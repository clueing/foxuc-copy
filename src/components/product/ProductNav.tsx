"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/* 产品导航数据 */
const products = [
  {
    href: "/product",
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

/* 产品导航组件 */
export default function ProductNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="w-[1200px] mx-auto">
        {/* 标题栏 */}
        <div className="py-4 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-800">网狐产品</span>
        </div>

        {/* 产品切换按钮 */}
        <div className="flex justify-center gap-8 py-6">
          {products.map((product) => {
            const isActive = pathname === product.href;
            return (
              <Link
                key={product.href}
                href={product.href}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-lg transition-all",
                  isActive
                    ? "bg-red-50 border-2 border-red-500"
                    : "bg-gray-50 border-2 border-transparent hover:border-gray-300"
                )}
              >
                <Image
                  src={product.icon}
                  alt={product.label}
                  width={48}
                  height={48}
                />
                <div>
                  <p
                    className={cn(
                      "text-base font-medium",
                      isActive ? "text-red-500" : "text-gray-800"
                    )}
                  >
                    {product.label}
                  </p>
                  <p className="text-xs text-gray-500">{product.english}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
