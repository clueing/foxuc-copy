import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

const BASE_URL = "https://www.foxuc.cn";

const IMAGES = [
  { path: "/Assets/images/logo.png", dest: "public/images/logo.png" },
  { path: "/Assets/images/line.png", dest: "public/images/line.png" },
  { path: "/Assets/images/nav_bg.png", dest: "public/images/nav-bg.png" },
  { path: "/Assets/images/new-index/index_product1.png", dest: "public/images/product1.png" },
  { path: "/Assets/images/new-index/index_product2.png", dest: "public/images/product2.png" },
  { path: "/Assets/images/new-index/index_product3.png", dest: "public/images/product3.png" },
  { path: "/Assets/images/liu-qr.png", dest: "public/images/liu-qr.png" },
  { path: "/Assets/images/cooperation/1.png", dest: "public/images/cooperation/1.png" },
  { path: "/Assets/images/cooperation/2.png", dest: "public/images/cooperation/2.png" },
  { path: "/Assets/images/cooperation/3.png", dest: "public/images/cooperation/3.png" },
  { path: "/Assets/images/cooperation/4.png", dest: "public/images/cooperation/4.png" },
  { path: "/Assets/images/cooperation/5.png", dest: "public/images/cooperation/5.png" },
  { path: "/Assets/images/cooperation/6.png", dest: "public/images/cooperation/6.png" },
  { path: "/Assets/images/qrcode_1.png", dest: "public/images/qrcode-wechat.png" },
  { path: "/Assets/images/qrcode_2.png", dest: "public/images/qrcode-weibo.png" },
  { path: "/Assets/images/arrow-left.png", dest: "public/images/arrow-left.png" },
  { path: "/Assets/images/arrow-right.png", dest: "public/images/arrow-right.png" },
  { path: "/Assets/images/safety_1.png", dest: "public/images/safety1.png" },
  { path: "/Assets/images/safety_2.png", dest: "public/images/safety2.png" },
  { path: "/Assets/images/safety_3.png", dest: "public/images/safety3.png" },
  { path: "/Assets/images/safety_4.png", dest: "public/images/safety4.png" },
  { path: "/Assets/images/safety_5.png", dest: "public/images/safety5.png" },
  { path: "/Assets/images/contact.png", dest: "public/images/contact.png" },
  { path: "/Assets/images/UCmail.png", dest: "public/images/ucmail.png" },
  { path: "/Assets/images/new-index/phone.png", dest: "public/images/phone.png" },
  { path: "/Assets/images/new-index/bg_service_top.png", dest: "public/images/service-top.png" },
  { path: "/Assets/images/new-index/bg_service_btn.png", dest: "public/images/service-btn.png" },
  { path: "/Assets/images/new-index/bg_message_btn.png", dest: "public/images/message-btn.png" },
  { path: "/Assets/images/new-index/bg_open_arrow.png", dest: "public/images/open-arrow.png" },
  { path: "/Assets/images/new-index/submit-btn.png", dest: "public/images/submit-btn.png" },
  { path: "/Assets/images/new-index/submit-disabled-btn.png", dest: "public/images/submit-disabled-btn.png" },
  { path: "/Assets/images/footer/wenhuajingying.png", dest: "public/images/wenhuajingying.png" },
  { path: "/Assets/images/tel_number.png", dest: "public/images/tel-number.png" },
  { path: "/Assets/images/index_top1.png", dest: "public/images/index-top.png" },
  { path: "/Assets/images/k_top_bg.png", dest: "public/images/top-bg.png" },
];

const FAVICON = { path: "/favicon.ico", dest: "public/favicon.ico" };

async function downloadFile(url, dest) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to download ${url}: ${response.status}`);
      return false;
    }
    const buffer = await response.arrayBuffer();
    await writeFile(dest, Buffer.from(buffer));
    console.log(`Downloaded: ${dest}`);
    return true;
  } catch (error) {
    console.error(`Error downloading ${url}:`, error);
    return false;
  }
}

async function ensureDir(filePath) {
  const dir = filePath.substring(0, filePath.lastIndexOf("/"));
  await mkdir(dir, { recursive: true });
}

async function main() {
  console.log("Starting asset download...");

  await ensureDir(FAVICON.dest);
  await downloadFile(`${BASE_URL}${FAVICON.path}`, FAVICON.dest);

  for (let i = 0; i < IMAGES.length; i += 4) {
    const batch = IMAGES.slice(i, i + 4);
    await Promise.all(
      batch.map(async (img) => {
        await ensureDir(img.dest);
        await downloadFile(`${BASE_URL}${img.path}`, img.dest);
      })
    );
  }

  console.log("Asset download complete!");
}

main().catch(console.error);
