import Image from "next/image";

/* 案例数据接口 */
interface CaseItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

/* 单个案例卡片组件 */
export default function CaseCard({
  item,
  isFirst = false,
}: {
  item: CaseItem;
  isFirst?: boolean;
}) {
  return (
    <li
      className={cn(
        "flex items-center pb-[62px] border-b border-[#dedede]",
        !isFirst && "mt-[62px]"
      )}
    >
      {/* 案例图片 */}
      <div className="shrink-0 w-[354px] h-[240px] rounded-[12px] overflow-hidden shadow-[0_2px_13px_#ebebeb]">
        <Image
          src={item.image}
          alt={item.title}
          width={354}
          height={240}
          className="w-full h-full object-cover transition-transform duration-750 hover:scale-110"
        />
      </div>

      {/* 案例介绍 */}
      <section className="w-[750px] ml-[40px]">
        <h2 className="text-[36px] font-light text-[#333] mb-[16px]">
          {item.title}
        </h2>
        <p className="text-[16px] text-[#666] leading-[1.8] font-light">
          {item.description}
        </p>
      </section>
    </li>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
