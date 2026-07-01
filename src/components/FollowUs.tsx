"use client"

// 二维码图片组件
function QRCodeImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 overflow-hidden rounded-lg border border-gray-200 bg-white p-2">
        <img src={src} alt={alt} className="h-32 w-32 object-contain" />
      </div>
      <span className="text-sm text-gray-600">{alt}</span>
    </div>
  )
}

export default function FollowUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center">
          {/* 左栏：家园合作按钮 */}
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">家园合作</h2>
            <p className="mb-6 text-gray-600">携手网狐科技 互利共赢</p>
            <a
              href="#partnership"
              className="inline-flex min-w-[160px] items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
            >
              立即合作
            </a>
          </div>

          {/* 分隔线 */}
          <div className="hidden h-40 w-px bg-gray-300 lg:block" />

          {/* 右栏：关注我们 */}
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">关注网狐</h2>
            <p className="mb-6 max-w-xs text-gray-600">
              关注官方微博或添加微信公众号，了解最新动态和优惠活动
            </p>
            
            {/* 二维码区域 */}
            <div className="flex gap-8">
              <QRCodeImage src="/images/wechat-qr.png" alt="微信公众号" />
              <QRCodeImage src="/images/weibo-qr.png" alt="官方微博" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
