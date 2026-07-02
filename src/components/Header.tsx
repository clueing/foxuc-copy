"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/* 导航菜单数据 */
const navItems = [
  { label: "首页", sub: "HOME", href: "/", match: ["/"] },
  {
    label: "国际",
    sub: "International",
    href: "/inter",
    match: ["/inter", "/inter/tech"],
    children: [
      { label: "联运介绍", href: "/inter" },
      { label: "技术服务", href: "/inter/tech" },
    ],
  },
  {
    label: "产品",
    sub: "PRODUCT",
    href: "/product",
    match: ["/product", "/product/zy", "/product/qj"],
    children: [
      { label: "U3D 至尊版", href: "/product" },
      { label: "H5 环球版", href: "/product/zy" },
      { label: "H5 极速版", href: "/product/qj" },
    ],
  },
  {
    label: "资讯",
    sub: "NEWS",
    href: "/news",
    match: ["/news", "/news/qpnews"],
    children: [
      { label: "棋牌资讯", href: "/news" },
      { label: "网狐动态", href: "/news/qpnews" },
    ],
  },
  {
    label: "关于",
    sub: "ABOUT",
    href: "/about",
    match: ["/about", "/about/culture", "/about/course"],
    children: [
      { label: "关于我们", href: "/about" },
      { label: "企业文化", href: "/about/culture" },
      { label: "发展历程", href: "/about/course" },
    ],
  },
  { label: "联系", sub: "CONTACT", href: "/contact", match: ["/contact"] },
];

/* 固定导航栏组件 */
export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  /* 判断导航项是否激活 */
  const isActive = (item: (typeof navItems)[number]) => {
    return item.match.some(
      (path) => pathname === path || (path !== "/" && pathname.startsWith(path))
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[99999] h-[68px]">
      {/* 导航面板 */}
      <nav className="min-w-[1250px] w-full h-full bg-[url('/images/nav-bg.png')] bg-top bg-no-repeat">
        <div className="w-[1200px] h-[52px] mx-auto flex items-center">
          {/* Logo */}
          <Link href="/" className="ml-[27px] mt-[13px] block">
            <Image
              src="/images/logo.png"
              alt="FOXUC网狐"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* 导航链接 */}
          <ul className="flex items-center ml-[35px] mr-[35px] h-full">
            {navItems.map((item, index) => {
              const active = isActive(item);
              return (
                <li
                  key={item.label}
                  className="relative h-[46px] mt-[16px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* 分隔线 */}
                  {index > 0 && (
                    <span className="absolute left-[-20px] top-[15px]">
                      <Image
                        src="/images/line.png"
                        alt=""
                        width={1}
                        height={20}
                      />
                    </span>
                  )}

                  {/* 导航链接 */}
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-block w-[119px] text-white text-sm text-center transition-colors duration-300",
                      active ? "text-[#ff0101]" : "hover:text-[#ff0101]"
                    )}
                  >
                    {item.label}
                    <p
                      className={cn(
                        "text-xs mt-[-4px] transform scale-75",
                        active ? "text-white" : "text-[#938d8b]"
                      )}
                      style={{ fontFamily: "Verdana, sans-serif" }}
                    >
                      {item.sub}
                    </p>
                  </Link>

                  {/* 下拉子菜单 - 使用背景图片 */}
                  {item.children && (
                    <div
                      className={cn(
                        "absolute top-[45px] left-1/2 -translate-x-1/2 text-center transition-all duration-100 bg-no-repeat bg-contain",
                        item.children.length > 2
                          ? "w-[368px] h-[40px] bg-[url('/images/nav-long.png')]"
                          : "w-[246px] h-[40px] bg-[url('/images/nav-short.png')]",
                        hoveredIndex === index
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      )}
                    >
                      <div className="py-2">
                        {item.children.map((child, childIndex) => (
                          <span key={child.label}>
                            <Link
                              href={child.href}
                              className={cn(
                                "inline-block w-[99px] text-sm align-middle transition-colors",
                                pathname === child.href
                                  ? "text-[#ff0101]"
                                  : "text-[#ccc] hover:text-white"
                              )}
                            >
                              {child.label}
                            </Link>
                            {childIndex < item.children.length - 1 && (
                              <span className="inline-block mt-[6px] align-middle">
                                <Image
                                  src="/images/line.png"
                                  alt=""
                                  width={1}
                                  height={16}
                                />
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* 电话号码 */}
          <div className="relative w-[151px] h-[23px] ml-auto bg-[url('/images/tel-number.png')] bg-no-repeat" />
        </div>
      </nav>
    </div>
  );
}
