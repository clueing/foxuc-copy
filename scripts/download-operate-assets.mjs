import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const IMAGES = [
  { path: "/Assets/images/operate/reason_1.png", dest: "public/images/operate/reason_1.png" },
  { path: "/Assets/images/operate/reason_2.png", dest: "public/images/operate/reason_2.png" },
  { path: "/Assets/images/operate/reason_3.png", dest: "public/images/operate/reason_3.png" },
  { path: "/Assets/images/operate/reason_4.png", dest: "public/images/operate/reason_4.png" },
  { path: "/Assets/images/operate/reason_5.png", dest: "public/images/operate/reason_5.png" },
  { path: "/Assets/images/operate/flow_icon.png", dest: "public/images/operate/flow_icon.png" },
  { path: "/Assets/images/operate/case_1.png", dest: "public/images/operate/case_1.png" },
  { path: "/Assets/images/operate/case_2.png", dest: "public/images/operate/case_2.png" },
  { path: "/Assets/images/operate/case_3.png", dest: "public/images/operate/case_3.png" },
  { path: "/Assets/images/operate/case_4.png", dest: "public/images/operate/case_4.png" },
  { path: "/Assets/images/operate/case_5.png", dest: "public/images/operate/case_5.png" },
  { path: "/Assets/images/operate/case_6.png", dest: "public/images/operate/case_6.png" },
  { path: "/Assets/images/operate/public.png", dest: "public/images/operate/public.png" },
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
  console.log("Downloading operate page images...");
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
