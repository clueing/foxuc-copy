"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/* 新闻子导航组件 */
interface NewsNavProps {
  title: string;
}

export default function NewsNav({ title }: NewsNavProps) {
  const pathname = usePathname();

  return (
    <div className="relative w-full mt-[-58px] z-10">
      <div className="w-[1200px] mx-auto border-b border-[#dedede]">
        <div className="flex items-center justify-between py-2">
          <span className="text-[24px] leading-[38px] text-[#333]">
            {title}
          </span>
          <ul className="flex items-center h-[30px] mt-[8px]">
            <li className="float-left">
              <Link
                href="/news"
                className={cn(
                  "block text-[18px] leading-[29px] transition-colors ml-[30px] no-underline",
                  pathname === "/news"
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-[#666] hover:text-red-500"
                )}
              >
                棋牌资讯
              </Link>
            </li>
            <li className="float-left">
              <Link
                href="/news/qpnews"
                className={cn(
                  "block text-[18px] leading-[29px] transition-colors ml-[30px] no-underline",
                  pathname === "/news/qpnews"
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-[#666] hover:text-red-500"
                )}
              >
                网狐动态
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
