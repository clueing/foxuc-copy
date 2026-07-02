"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/* 关于页子导航数据 */
const navLinks = [
  { href: "/about", label: "关于我们" },
  { href: "/about/culture", label: "企业文化" },
  { href: "/about/course", label: "发展历程" },
];

/* 关于页子导航组件 */
interface AboutNavProps {
  title: string;
}

export default function AboutNav({ title }: AboutNavProps) {
  const pathname = usePathname();

  return (
    <div className="relative w-full mt-[-58px] z-10">
      <div className="w-[1230px] mx-auto border-b border-[#d4d4d4]">
        <div className="flex items-center justify-between py-2">
          {/* 标题 */}
          <span className="text-[24px] leading-[38px]">{title}</span>

          {/* 导航链接 */}
          <ul className="flex items-center h-[30px] mt-[8px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="float-left">
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-[18px] leading-[29px] transition-colors relative mr-[30px]",
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
