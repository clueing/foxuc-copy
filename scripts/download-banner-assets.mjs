import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const IMAGES = [
  // 横幅背景图
  { path: "/Assets/images/product-detail/banner/banner_zz.png", dest: "public/images/product/banner-zz.png" },
  { path: "/Assets/images/product-detail/banner/banner_hw.png", dest: "public/images/product/banner-hw.png" },
  { path: "/Assets/images/product-detail/banner/banner_gj.png", dest: "public/images/product/banner-gj.png" },
  // 产品导航背景
  { path: "/Assets/images/products/bg-title-top.png", dest: "public/images/product/bg-title-top.png" },
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
  console.log("Downloading banner images...");
  for (const img of IMAGES) {
    await ensureDir(img.dest);
    await downloadFile(`${BASE_URL}${img.path}`, img.dest);
  }
  console.log("Done!");
}

main().catch(console.error);
