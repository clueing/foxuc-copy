import Image from "next/image";

/* 产品详情图片列表组件 */
interface ProductContentProps {
  images: string[];
}

export default function ProductContent({ images }: ProductContentProps) {
  return (
    <div className="w-full">
      {images.map((src, index) => (
        <div key={index} className="w-full">
          <Image
            src={src}
            alt={`产品展示 ${index + 1}`}
            width={1200}
            height={800}
            className="w-full h-auto"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
