"use client"

import SubNav from "@/components/SubNav"

/* 技术服务导航组件 */
interface TechNavProps {
  activeTab?: "intro" | "tech"
}

export default function TechNav({ activeTab = "tech" }: TechNavProps) {
  return (
    <SubNav
      title="网狐出海"
      links={[
        { href: "/inter", label: "联运介绍" },
        { href: "/inter/tech", label: "技术服务" },
      ]}
      width={1350}
    />
  )
}
