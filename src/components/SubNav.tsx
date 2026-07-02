"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/* 导航链接数据 */
interface NavLink {
  href: string;
  label: string;
}

/* 子页面导航组件 */
interface SubNavProps {
  /** 左侧标题 */
  title: string;
  /** 导航链接列表 */
  links: NavLink[];
  /** 容器宽度 */
  width?: number;
}

export default function SubNav({ title, links, width = 1200 }: SubNavProps) {
  const pathname = usePathname();

  return (
    <div className="relative w-full mt-[-58px] z-10">
      <div
        className="mx-auto border-b border-[#d4d4d4]"
        style={{ width: `${width}px` }}
      >
        <div className="flex items-center justify-between py-2">
          {/* 标题 */}
          <span className="text-[24px] leading-[38px] text-[#333]">
            {title}
          </span>

          {/* 导航链接 */}
          <ul className="flex items-center h-[30px] mt-[8px]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="float-left">
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-[18px] leading-[29px] transition-colors ml-[30px] no-underline",
                      isActive
                        ? "text-red-500 border-b-2 border-red-500"
                        : "text-[#666] hover:text-red-500"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
