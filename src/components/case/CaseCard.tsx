import Image from "next/image";

/* 案例数据接口 */
interface CaseItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

/* 单个案例卡片组件 */
export default function CaseCard({ item }: { item: CaseItem }) {
  return (
    <li className="flex flex-col gap-6 md:flex-row">
      {/* 案例图片 */}
      <div className="shrink-0 overflow-hidden rounded-lg md:w-[400px]">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
          className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* 案例介绍 */}
      <section className="flex flex-col justify-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-800">
          {item.title}
        </h2>
        <p className="leading-relaxed text-gray-600">{item.description}</p>
      </section>
    </li>
  );
}
