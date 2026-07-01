"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* 导航菜单数据 */
const navItems = [
  { label: "首页", sub: "HOME", href: "/", active: true },
  {
    label: "国际",
    sub: "International",
    href: "/inter/index.html",
    children: [
      { label: "联运介绍", href: "/inter/index.html" },
      { label: "技术服务", href: "/inter/tech.html" },
    ],
  },
  {
    label: "产品",
    sub: "PRODUCT",
    href: "/product-detail/hw/game-app.html",
    children: [
      { label: "U3D 至尊版", href: "/product-detail/hw/game-app.html" },
      { label: "H5 环球版", href: "/product-detail/zy/game-app.html" },
      { label: "H5 极速版", href: "/product-detail/qj/game-u3d-eng.html" },
    ],
  },
  {
    label: "资讯",
    sub: "NEWS",
    href: "/news/original.html",
    children: [
      { label: "棋牌资讯", href: "/news/original.html" },
      { label: "网狐动态", href: "/news/qpnews.html" },
    ],
  },
  {
    label: "关于",
    sub: "ABOUT",
    href: "/about/index.html",
    children: [
      { label: "关于我们", href: "/about/index.html" },
      { label: "企业文化", href: "/about/culture.html" },
      { label: "发展历程", href: "/about/course.html" },
    ],
  },
  { label: "联系", sub: "CONTACT", href: "/contact/index.html" },
];

/* 固定导航栏组件 */
export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            {navItems.map((item, index) => (
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
                    item.active ? "text-[#ff0101]" : "hover:text-[#ff0101]"
                  )}
                >
                  {item.label}
                  <p
                    className={cn(
                      "text-xs mt-[-4px] transform scale-75",
                      item.active
                        ? "text-white"
                        : "text-[#938d8b] group-hover:text-white"
                    )}
                    style={{ fontFamily: "Verdana, sans-serif" }}
                  >
                    {item.sub}
                  </p>
                </Link>

                {/* 下拉子菜单 */}
                {item.children && (
                  <div
                    className={cn(
                      "absolute top-[45px] left-1/2 -translate-x-1/2 text-center transition-all duration-100",
                      item.children.length > 2 ? "w-[368px]" : "w-[246px]",
                      "bg-[url('/images/nav-long.png')] bg-no-repeat",
                      hoveredIndex === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    )}
                  >
                    {item.children.map((child, childIndex) => (
                      <span key={child.label}>
                        <Link
                          href={child.href}
                          className="inline-block w-[99px] text-sm text-[#ccc] align-middle hover:text-white transition-colors"
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
                )}
              </li>
            ))}
          </ul>

          {/* 电话号码 */}
          <div className="relative w-[151px] h-[23px] ml-auto bg-[url('/images/tel-number.png')] bg-no-repeat" />
        </div>
      </nav>
    </div>
  );
}
