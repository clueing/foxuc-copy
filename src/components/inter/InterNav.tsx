"use client"

import SubNav from "@/components/SubNav"

/* 联运介绍导航组件 */
interface InterNavProps {
  activeTab?: "intro" | "tech"
}

export default function InterNav({ activeTab = "intro" }: InterNavProps) {
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
