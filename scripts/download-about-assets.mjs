import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const IMAGES = [
  // 横幅背景图
  { path: "/Assets/images/about/banner/banner_about.png", dest: "public/images/about/banner-about.png" },
  { path: "/Assets/images/about/banner/banner_culture.png", dest: "public/images/about/banner-culture.png" },
  { path: "/Assets/images/about/banner/banner_course.png", dest: "public/images/about/banner-course.png" },
  // 关于我们数字图片
  { path: "/Assets/images/about/2005.png", dest: "public/images/about/num-2005.png" },
  { path: "/Assets/images/about/18.png", dest: "public/images/about/num-18.png" },
  { path: "/Assets/images/about/34.png", dest: "public/images/about/num-34.png" },
  { path: "/Assets/images/about/200.png", dest: "public/images/about/num-200.png" },
  { path: "/Assets/images/about/2.8.png", dest: "public/images/about/num-28.png" },
  { path: "/Assets/images/about/18.3.png", dest: "public/images/about/num-183.png" },
  // 背景图
  { path: "/Assets/images/about/bg-dialog.png", dest: "public/images/about/bg-dialog.png" },
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
  console.log("Downloading about page images...");
  for (const img of IMAGES) {
    await ensureDir(img.dest);
    await downloadFile(`${BASE_URL}${img.path}`, img.dest);
  }
  console.log("Done!");
}

main().catch(console.error);
