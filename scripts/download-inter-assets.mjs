import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const INTER_IMAGES = [
  { path: "/Assets/images/inter/operation_left_img.png", dest: "public/images/inter/operation-left.png" },
  { path: "/Assets/images/inter/operation_right_img.png", dest: "public/images/inter/operation-right.png" },
  { path: "/Assets/images/inter/product1.jpg", dest: "public/images/inter/product1.jpg" },
  { path: "/Assets/images/inter/product2.jpg", dest: "public/images/inter/product2.jpg" },
  { path: "/Assets/images/inter/product3.jpg", dest: "public/images/inter/product3.jpg" },
  { path: "/Assets/images/inter/cooperation1.png", dest: "public/images/inter/cooperation1.png" },
  { path: "/Assets/images/inter/cooperation2.png", dest: "public/images/inter/cooperation2.png" },
  { path: "/Assets/images/inter/cooperation3.png", dest: "public/images/inter/cooperation3.png" },
  { path: "/Assets/images/inter/support_img.png", dest: "public/images/inter/support.png" },
  { path: "/Assets/images/inter/platform_img.png", dest: "public/images/inter/platform.png" },
  { path: "/Assets/images/inter/team_img.png", dest: "public/images/inter/team.png" },
  { path: "/Assets/images/inter/service_img.png", dest: "public/images/inter/service.png" },
  { path: "/Assets/images/inter/operations_img.png", dest: "public/images/inter/operations.png" },
  { path: "/Assets/images/inter/resource_img.png", dest: "public/images/inter/resource.png" },
  { path: "/Assets/images/inter/process.png", dest: "public/images/inter/process.png" },
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
  console.log("Downloading inter page assets...");
  for (let i = 0; i < INTER_IMAGES.length; i += 4) {
    const batch = INTER_IMAGES.slice(i, i + 4);
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
