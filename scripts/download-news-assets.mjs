import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const IMAGES = [
  // 横幅背景图
  { path: "/Assets/images/news/banner_original.png", dest: "public/images/news/banner-original.png" },
  { path: "/Assets/images/news/banner_qpnews.png", dest: "public/images/news/banner-qpnews.png" },
  { path: "/Assets/images/news/phone.png", dest: "public/images/news/phone.png" },
  // 文章图片 - 棋牌资讯
  { path: "/upload/News/20230322/big_20230322162521_2647.png", dest: "public/images/news/13298.png" },
  { path: "/upload/News/20230321/mid_20230321154126_4378.png", dest: "public/images/news/13297.png" },
  { path: "/upload/News/20220921/mid_20220921101727_7534.png", dest: "public/images/news/13292.png" },
  { path: "/upload/News/20241118/sml_20241118163623_4070.png", dest: "public/images/news/13336.png" },
  { path: "/upload/News/20241118/sml_20241118102814_5789.png", dest: "public/images/news/13335.png" },
  { path: "/upload/News/20241114/sml_20241114144319_0164.png", dest: "public/images/news/13334.png" },
  { path: "/upload/News/20241113/sml_20241113145032_0789.png", dest: "public/images/news/13333.png" },
  { path: "/upload/News/20241101/sml_20241101172510_2175.png", dest: "public/images/news/13332.png" },
  { path: "/upload/News/20241015/sml_20241015163907_6863.png", dest: "public/images/news/13331.png" },
  { path: "/upload/News/20241011/sml_20241011141514_2331.png", dest: "public/images/news/13330.png" },
  { path: "/upload/News/20241009/sml_20241009102807_2644.png", dest: "public/images/news/13329.png" },
  { path: "/upload/News/20240927/sml_20240927105606_7644.png", dest: "public/images/news/13328.png" },
  { path: "/upload/News/20240920/sml_20240920103443_0145.png", dest: "public/images/news/13327.png" },
  // 文章图片 - 网狐动态
  { path: "/upload/News/20200109/big_20200109115954_2887.jpg", dest: "public/images/news/12960.jpg" },
  { path: "/upload/News/20210919/mid_20210919082513_0346.jpg", dest: "public/images/news/13245.jpg" },
  { path: "/upload/News/20200918/mid_20200918110424_8052.png", dest: "public/images/news/13153.png" },
  { path: "/upload/News/20200821/sml_20200821102214_8365.png", dest: "public/images/news/13155.png" },
  { path: "/upload/News/20201221/sml_20201221150850_3678.png", dest: "public/images/news/13150.png" },
  { path: "/upload/News/20200918/sml_20200918110919_2427.jpg", dest: "public/images/news/13140.jpg" },
  { path: "/upload/News/20200716/sml_20200716094102_1177.png", dest: "public/images/news/13128.png" },
  { path: "/upload/News/20200703/sml_20200703101416_0865.png", dest: "public/images/news/13118.png" },
  { path: "/upload/News/20200605/sml_20200605104525_7427.jpg", dest: "public/images/news/13101.jpg" },
  { path: "/upload/News/20200610/sml_20200610120603_6958.png", dest: "public/images/news/13103.png" },
  { path: "/upload/News/20210930/sml_20210930104801_4252.png", dest: "public/images/news/13250.png" },
  // 文章详情图片
  { path: "/Upload/News/image/20190820/20190820145139_2281.png", dest: "public/images/news/detail-2281.png" },
  { path: "/Upload/News/image/20210420/20210420142921_3363.jpg", dest: "public/images/news/detail-3363.jpg" },
];

async function downloadFile(url, dest) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed: ${url} (${response.status})`);
      return false;
    }
    const buffer = await response.arrayBuffer();
    await writeFile(dest, Buffer.from(buffer));
    console.log(`OK: ${dest}`);
    return true;
  } catch (error) {
    console.error(`Error: ${url}`, error.message);
    return false;
  }
}

async function ensureDir(filePath) {
  const dir = filePath.substring(0, filePath.lastIndexOf("/"));
  await mkdir(dir, { recursive: true });
}

async function main() {
  console.log("Downloading news page images...");
  for (let i = 0; i < IMAGES.length; i += 4) {
    const batch = IMAGES.slice(i, i + 4);
    await Promise.all(
      batch.map(async (img) => {
        await ensureDir(img.dest);
        await downloadFile(`${BASE_URL}${img.path}`, img.dest);
      })
    );
  }
  console.log("Done!");
}

main().catch(console.error);
