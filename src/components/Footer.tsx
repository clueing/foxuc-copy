"use client"

import { PhoneIcon, MailIcon } from "@/components/icons"

// 证书链接数据接口
interface CertificateLinkProps {
  label: string
  href?: string
}

export default function Footer() {
  // 证书链接数据
  const certificates: CertificateLinkProps[] = [
    { label: "高新技术企业", href: "#" },
    { label: "软件著作权", href: "#" },
    { label: "ISO9001认证", href: "#" },
    { label: "AAA级信用企业", href: "#" }
  ]

  return (
    <footer className="border-t-2 border-red-500 bg-[#f6f6f6]">
      {/* 证书链接行 */}
      <div className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.href || "#"}
                className="text-sm text-gray-600 transition-colors hover:text-red-500"
              >
                {cert.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* 左侧：公司信息 */}
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-lg font-bold text-gray-800">珠海市网狐科技有限公司</h3>
              <p className="mb-1 text-sm text-gray-600">珠海市网狐科技有限公司</p>
              <p className="text-sm text-gray-500">
                粤ICP备12345678号-1
              </p>
            </div>

            {/* 中间：联系信息 */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-2 text-gray-600">
                <PhoneIcon className="h-4 w-4" />
                <span className="text-sm">商务热线：400-000-8888</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MailIcon className="h-4 w-4" />
                <span className="text-sm">邮箱：service@foxuc.com</span>
              </div>
            </div>

            {/* 右侧：公司地址 */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">
                公司地址：广东省珠海市香洲区
              </p>
              <p className="text-sm text-gray-500">
                科技创新海岸
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权信息 */}
      <div className="border-t border-gray-200 bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">
            Copyright © 2004-2024 珠海市网狐科技有限公司 版权所有
          </p>
        </div>
      </div>
    </footer>
  )
}
