"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/* 产品导航数据 */
const products = [
  {
    href: "/product/hw",
    label: "至尊版",
    english: "Supreme",
    icon: "/images/product/nav-zz.png",
  },
  {
    href: "/product/zy",
    label: "环球版",
    english: "Global",
    icon: "/images/product/nav-hw.png",
  },
  {
    href: "/product/qj",
    label: "极速版",
    english: "Ultra Speed",
    icon: "/images/product/nav-gj.png",
  },
];

/* 产品右侧固定导航组件 */
export default function ProductNav() {
  const pathname = usePathname();

  return (
    <div className="fixed right-[10px] top-[394px] z-[99] w-[200px] bg-white rounded-[14px] shadow-[0_2px_13px_#ebebeb]">
      {/* 标题栏 */}
      <div
        className="w-[196px] h-[42px] ml-[2px] mt-[2px] text-white text-[18px] leading-[42px] bg-[url('/images/product/bg-title-top.png')] bg-no-repeat"
        style={{ paddingLeft: "85px" }}
      >
        网狐产品
      </div>

      {/* 产品切换按钮 */}
      <div className="px-2 pb-2">
        {products.map((product, index) => {
          const isActive = pathname === product.href;
          return (
            <Link
              key={product.href}
              href={product.href}
              className={cn(
                "block text-center transition-colors",
                index === 0 ? "mt-3" : "mt-1",
                "group"
              )}
            >
              <Image
                src={product.icon}
                alt={product.label}
                width={196}
                height={100}
                className="w-full h-auto"
              />
              <p
                className={cn(
                  "text-[14px] transition-colors",
                  isActive ? "text-red-500" : "text-[#222] group-hover:text-red-500"
                )}
              >
                {product.label}
                <span
                  className={cn(
                    "ml-[5px] font-light transition-colors",
                    isActive ? "text-red-500" : "text-[#666] group-hover:text-red-500"
                  )}
                >
                  {product.english}
                </span>
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
