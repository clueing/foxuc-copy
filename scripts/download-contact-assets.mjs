import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const IMAGES = [
  // 横幅背景图
  { path: "/Assets/images/contact/banner_contact.png", dest: "public/images/contact/banner-contact.png" },
  // 联系页面图标
  { path: "/Assets/images/contact/logo.png", dest: "public/images/contact/logo.png" },
  { path: "/Assets/images/contact/name.png", dest: "public/images/contact/name.png" },
  { path: "/Assets/images/contact/phone.png", dest: "public/images/contact/phone.png" },
  { path: "/Assets/images/contact/wechat.png", dest: "public/images/contact/wechat.png" },
  { path: "/Assets/images/contact/qq.png", dest: "public/images/contact/qq.png" },
  { path: "/Assets/images/contact/email.png", dest: "public/images/contact/email.png" },
  // 地图图片
  { path: "/Assets/images/map_01.png", dest: "public/images/contact/map-01.png" },
  { path: "/Assets/images/map_02.png", dest: "public/images/contact/map-02.png" },
  { path: "/Assets/images/map_03.png", dest: "public/images/contact/map-03.png" },
  { path: "/Assets/images/map_04.png", dest: "public/images/contact/map-04.png" },
  { path: "/Assets/images/map_05.png", dest: "public/images/contact/map-05.png" },
  { path: "/Assets/images/map_06.png", dest: "public/images/contact/map-06.png" },
  // 地图标签背景
  { path: "/Assets/images/map_back.png", dest: "public/images/contact/map-back.png" },
  { path: "/Assets/images/map_active.png", dest: "public/images/contact/map-active.png" },
  // 地图链接图标
  { path: "/Assets/images/baidu-map.png", dest: "public/images/contact/baidu-map.png" },
  { path: "/Assets/images/gaode-map.png", dest: "public/images/contact/gaode-map.png" },
  { path: "/Assets/images/link.png", dest: "public/images/contact/link.png" },
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
  console.log("Downloading contact page images...");
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
