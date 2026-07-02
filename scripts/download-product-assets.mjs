import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const PRODUCT_IMAGES = [
  // 至尊版 (hw)
  { path: "/Assets/images/product-detail/zz/app_1.png", dest: "public/images/product/zz/1.png" },
  { path: "/Assets/images/product-detail/zz/app_2.png", dest: "public/images/product/zz/2.png" },
  { path: "/Assets/images/product-detail/zz/app_3.png", dest: "public/images/product/zz/3.png" },
  { path: "/Assets/images/product-detail/zz/app_4.png", dest: "public/images/product/zz/4.png" },
  { path: "/Assets/images/product-detail/zz/app_5.png", dest: "public/images/product/zz/5.png" },
  { path: "/Assets/images/product-detail/zz/app_6.png", dest: "public/images/product/zz/6.png" },
  { path: "/Assets/images/product-detail/zz/app_7.png", dest: "public/images/product/zz/7.png" },
  { path: "/Assets/images/product-detail/zz/app_8.png", dest: "public/images/product/zz/8.png" },
  // 环球版 (zy)
  { path: "/Assets/images/product-detail/zy/app_01e.png", dest: "public/images/product/zy/1.png" },
  { path: "/Assets/images/product-detail/zy/app_02e.png", dest: "public/images/product/zy/2.png" },
  { path: "/Assets/images/product-detail/zy/app_03e.png", dest: "public/images/product/zy/3.png" },
  { path: "/Assets/images/product-detail/zy/app_04e.png", dest: "public/images/product/zy/4.png" },
  { path: "/Assets/images/product-detail/zy/app_05e.png", dest: "public/images/product/zy/5.png" },
  { path: "/Assets/images/product-detail/zy/app_06e.png", dest: "public/images/product/zy/6.png" },
  // 极速版 (qj)
  { path: "/Assets/images/product-detail/qj/eng_01.png", dest: "public/images/product/qj/1.png" },
  { path: "/Assets/images/product-detail/qj/eng_02.png", dest: "public/images/product/qj/2.png" },
  { path: "/Assets/images/product-detail/qj/eng_03.png", dest: "public/images/product/qj/3.png" },
  { path: "/Assets/images/product-detail/qj/eng_04.png", dest: "public/images/product/qj/4.png" },
  { path: "/Assets/images/product-detail/qj/eng_05.png", dest: "public/images/product/qj/5.png" },
  { path: "/Assets/images/product-detail/qj/eng_06.png", dest: "public/images/product/qj/6.png" },
  // 产品导航图标
  { path: "/Assets/images/products/product-nav-zz.png", dest: "public/images/product/nav-zz.png" },
  { path: "/Assets/images/products/product-nav-hw.png", dest: "public/images/product/nav-hw.png" },
  { path: "/Assets/images/products/product-nav-gj.png", dest: "public/images/product/nav-gj.png" },
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
  console.log("Downloading product images...");
  for (let i = 0; i < PRODUCT_IMAGES.length; i += 4) {
    const batch = PRODUCT_IMAGES.slice(i, i + 4);
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
