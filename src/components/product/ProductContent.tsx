import Image from "next/image";

/* 产品详情图片列表组件 */
interface ProductContentProps {
  images: string[];
}

export default function ProductContent({ images }: ProductContentProps) {
  return (
    <div className="w-full min-w-[1250px]">
      {images.map((src, index) => (
        <div
          key={index}
          className={cn(
            "w-full text-center",
            index === 0 ? "mt-[-9px]" : "mt-[30px]"
          )}
        >
          <Image
            src={src}
            alt={`产品展示 ${index + 1}`}
            width={1079}
            height={600}
            className="w-[1079px] h-auto mx-auto"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
