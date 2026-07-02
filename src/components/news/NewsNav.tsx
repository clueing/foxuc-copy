"use client"

import SubNav from "@/components/SubNav"

/* 新闻子导航组件 */
interface NewsNavProps {
  title: string
}

export default function NewsNav({ title }: NewsNavProps) {
  return (
    <SubNav
      title={title}
      links={[
        { href: "/news", label: "棋牌资讯" },
        { href: "/news/qpnews", label: "网狐动态" },
      ]}
    />
  )
}
