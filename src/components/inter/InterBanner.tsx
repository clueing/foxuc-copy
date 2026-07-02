"use client"

/* 联运介绍页面横幅组件 */
export default function InterBanner() {
  return (
    <div className="relative w-full h-[480px] overflow-hidden min-w-[1250px]">
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[1920px] h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/inter/inter-banner.png')",
          backgroundPosition: "top",
        }}
      >
        {/* 内容区域 */}
        <div className="relative z-10 pt-[140px] pl-[460px]">
          <h1 className="text-[58px] font-bold leading-tight text-[#222]">
            全球招募
          </h1>
          <p className="text-[32px] font-light text-[#a73f1d]">
            海外棋牌手游战略合作伙伴
          </p>
        </div>
      </div>
    </div>
  )
}
