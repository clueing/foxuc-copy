import { mkdir, writeFile } from "fs/promises";

const BASE_URL = "https://www.foxuc.cn";

const IMAGES = [
  // 第一屏插图
  { path: "/Assets/images/about/culture/anoson.png", dest: "public/images/about/culture/man.png" },
  { path: "/Assets/images/about/culture/book.png", dest: "public/images/about/culture/book.png" },
  { path: "/Assets/images/about/culture/computer.png", dest: "public/images/about/culture/computer.png" },
  { path: "/Assets/images/about/culture/cup.png", dest: "public/images/about/culture/cup.png" },
  { path: "/Assets/images/about/culture/desk.png", dest: "public/images/about/culture/desk.png" },
  { path: "/Assets/images/about/culture/diagram.png", dest: "public/images/about/culture/diagram.png" },
  { path: "/Assets/images/about/culture/drawer.png", dest: "public/images/about/culture/drawer.png" },
  { path: "/Assets/images/about/culture/fox.png", dest: "public/images/about/culture/fox.png" },
  { path: "/Assets/images/about/culture/laptop.png", dest: "public/images/about/culture/laptop.png" },
  { path: "/Assets/images/about/culture/pen-box.png", dest: "public/images/about/culture/pen-box.png" },
  { path: "/Assets/images/about/culture/pen.png", dest: "public/images/about/culture/pen.png" },
  // 第二屏插图
  { path: "/Assets/images/about/culture/board-line.png", dest: "public/images/about/culture/board-line.png" },
  { path: "/Assets/images/about/culture/board.png", dest: "public/images/about/culture/board.png" },
  { path: "/Assets/images/about/culture/boy.png", dest: "public/images/about/culture/boy.png" },
  { path: "/Assets/images/about/culture/chair.png", dest: "public/images/about/culture/chair.png" },
  { path: "/Assets/images/about/culture/girl.png", dest: "public/images/about/culture/girl.png" },
  { path: "/Assets/images/about/culture/cupboard.png", dest: "public/images/about/culture/cupboard.png" },
  { path: "/Assets/images/about/culture/helloworld.png", dest: "public/images/about/culture/helloworld.png" },
  { path: "/Assets/images/about/culture/flower.png", dest: "public/images/about/culture/flower.png" },
  // 标题装饰
  { path: "/Assets/images/about/culture/top.png", dest: "public/images/about/culture/title-top.png" },
  { path: "/Assets/images/about/culture/bottom.png", dest: "public/images/about/culture/title-bottom.png" },
  { path: "/Assets/images/about/culture/top-2.png", dest: "public/images/about/culture/title-top-2.png" },
  { path: "/Assets/images/about/culture/bottom-2.png", dest: "public/images/about/culture/title-bottom-2.png" },
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
  console.log("Downloading culture page images...");
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
