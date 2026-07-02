import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const IMAGES = [
  { path: "/Assets/images/case/case_qqgame.png", dest: "public/images/case/case_qqgame.png" },
  { path: "/Assets/images/case/case_zhongyou1.png", dest: "public/images/case/case_zhongyou1.png" },
  { path: "/Assets/images/case/case_jixiang.png", dest: "public/images/case/case_jixiang.png" },
  { path: "/Assets/images/case/case_yiku.png", dest: "public/images/case/case_yiku.png" },
  { path: "/Assets/images/case/case_jinyou.png", dest: "public/images/case/case_jinyou.png" },
  { path: "/Assets/images/case/case_cixi.png", dest: "public/images/case/case_cixi.png" },
  { path: "/Assets/images/case/case_pk.png", dest: "public/images/case/case_pk.png" },
  { path: "/Assets/images/case/case_kuaileba.png", dest: "public/images/case/case_kuaileba.png" },
  { path: "/Assets/images/case/case_shengtang.png", dest: "public/images/case/case_shengtang.png" },
  { path: "/Assets/images/case/case_chouzhou.png", dest: "public/images/case/case_chouzhou.png" },
  { path: "/Assets/images/case/banner-case.png", dest: "public/images/case/banner-case.png" },
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
  console.log("Downloading case page images...");
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
