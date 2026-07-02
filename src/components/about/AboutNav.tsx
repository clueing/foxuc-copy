"use client"

import SubNav from "@/components/SubNav"

/* 关于页子导航组件 */
interface AboutNavProps {
  title: string
}

export default function AboutNav({ title }: AboutNavProps) {
  return (
    <SubNav
      title={title}
      links={[
        { href: "/about", label: "关于我们" },
        { href: "/about/culture", label: "企业文化" },
        { href: "/about/course", label: "发展历程" },
      ]}
    />
  )
}
