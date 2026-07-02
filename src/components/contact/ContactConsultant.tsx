import Image from "next/image";

/* 联系顾问组件 */
export default function ContactConsultant() {
  return (
    <div className="w-full h-[450px]">
      <div className="w-[1200px] h-[449px] mx-auto mt-[-58px]">
        {/* 标题 */}
        <h2 className="text-center text-[38px] font-light mb-[25px]">
          专业棋牌顾问<span className="font-black ml-3">随时恭候 ！</span>
        </h2>

        {/* 顾问卡片 */}
        <div className="flex w-full h-[290px] bg-white rounded-[9px] py-[44px] px-0">
          {/* 左侧 - 头像和姓名 */}
          <div className="flex items-center justify-center w-[600px] border-r border-dashed border-[#d4d4d4]">
            <div className="flex items-center">
              <div className="pr-[31px] border-r-2 border-[#e60000]">
                <Image
                  src="/images/contact/logo.png"
                  alt="Logo"
                  width={96}
                  height={96}
                />
              </div>
              <div className="ml-[27px]">
                <span className="text-[16px] text-[#444] font-light">
                  专业棋牌顾问
                </span>
                <div className="mt-[10px]">
                  <span className="text-[32px] font-bold text-[#444] mr-[23px] align-middle">
                    刘小姐
                  </span>
                  <span className="inline-block w-[75px] h-[31px] align-middle bg-[url('/images/contact/name.png')] bg-no-repeat" />
                </div>
              </div>
            </div>
          </div>

          {/* 右侧 - 联系方式 */}
          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-[154px] h-[27px] bg-[url('/images/contact/phone.png')] bg-no-repeat" />
              <div className="w-[156px] h-[26px] mt-[22px] bg-[url('/images/contact/wechat.png')] bg-no-repeat" />
              <div className="w-[123px] h-[26px] my-[24px] bg-[url('/images/contact/qq.png')] bg-no-repeat" />
              <div className="w-[175px] h-[25px] bg-[url('/images/contact/email.png')] bg-no-repeat" />
            </div>

            {/* 二维码 */}
            <div className="w-[180px] h-[200px] text-center rounded-[9px] pt-[11px] ml-[55px] border border-[#ddd] box-border">
              <Image
                src="/images/liu-qr.png"
                alt="客服微信"
                width={156}
                height={156}
              />
              <p className="text-[14px] text-[#666]">扫码添加顾问微信</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
