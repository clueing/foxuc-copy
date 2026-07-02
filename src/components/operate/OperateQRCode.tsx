import Image from "next/image";

/* 二维码区域区块 */
export default function OperateQRCode() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
          {/* 公众号二维码 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/operate/public.png"
              alt="关注公众号"
              width={160}
              height={160}
              className="mb-4 h-[160px] w-[160px] object-contain"
            />
            <p className="mb-1 text-lg font-bold text-gray-800">
              关注公众号
            </p>
            <p className="text-sm text-gray-500">
              了解更多「网狐游戏家园」产品信息
            </p>
          </div>

          {/* 商务微信二维码 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/liu-qr.png"
              alt="添加商务微信"
              width={160}
              height={160}
              className="mb-4 h-[160px] w-[160px] object-contain"
            />
            <p className="mb-1 text-lg font-bold text-gray-800">
              添加商务微信
            </p>
            <p className="text-sm text-gray-500">
              了解更多合作运营细节
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
