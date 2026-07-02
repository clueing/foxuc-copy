"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// 联系二维码弹窗组件
// 其他组件可通过 useState 控制 isOpen 属性来显示/隐藏弹窗
export default function ContactPopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  // ESC 键关闭弹窗
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      // 防止背景滚动
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* 弹窗主体 */}
      <div
        className="relative flex flex-col items-center rounded-2xl bg-white px-10 py-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          aria-label="关闭"
        >
          <X className="h-5 w-5" />
        </button>

        {/* 标题 */}
        <h3 className="mb-4 text-xl font-bold text-[#3b3b3b]">扫码咨询</h3>

        {/* 二维码图片 */}
        <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 p-2">
          <Image
            src="/images/liu-qr.png"
            alt="微信二维码"
            width={200}
            height={200}
            className="h-[200px] w-[200px] object-contain"
          />
        </div>

        {/* 说明文字 */}
        <p className="text-sm text-[#666]">游戏定制 / 游戏联运</p>
      </div>
    </div>
  )
}
