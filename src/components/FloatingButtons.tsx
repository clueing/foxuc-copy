"use client";

import { useState } from "react";
import Image from "next/image";

/* 浮动按钮组件 - 在线留言和客服中心 */
export default function FloatingButtons() {
  const [showService, setShowService] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      {/* 客服中心 - 左侧浮动 */}
      <div
        className="fixed left-0 top-[33%] z-[999] transition-all duration-300"
        style={{ width: showService ? "171px" : "49px" }}
      >
        {/* 展开内容 */}
        <div
          className={cn(
            "bg-white rounded-r-[14px] shadow-[1px_2px_10px_#a5a5a5] overflow-hidden transition-all duration-300",
            showService ? "w-[171px] opacity-100" : "w-0 opacity-0"
          )}
        >
          {/* 顶部标题栏 */}
          <div className="w-[168px] h-[42px] mx-auto bg-[url('/images/service-top.png')] bg-no-repeat flex items-center justify-center">
            <span className="text-[20px] text-white">客服中心</span>
          </div>

          {/* 游戏定制 */}
          <div className="w-[152px] py-4 mx-auto border-b border-dashed border-[#e5e5e5]">
            <p className="text-[18px] text-left pl-1 text-black mb-1">
              游戏定制
            </p>
            <Image
              src="/images/liu-qr.png"
              alt="游戏定制"
              width={144}
              height={144}
              className="w-[144px]"
            />
            <div className="mt-1 text-[12px] text-[#666] text-center">
              扫码联络游戏定制顾问
            </div>
          </div>

          {/* 游戏联运 */}
          <div className="w-[146px] py-2 mx-auto border-b border-dashed border-[#e5e5e5]">
            <p className="text-[18px] text-left pl-1 text-black mb-1">
              游戏联运
            </p>
            <Image
              src="/images/liu-qr.png"
              alt="游戏联运"
              width={144}
              height={144}
              className="w-[144px]"
            />
            <div className="mt-1 text-[12px] text-[#666] text-center">
              扫码联络游戏联运专员
            </div>
          </div>

          {/* 服务热线 */}
          <div className="w-[146px] pt-2 mx-auto text-center text-[14px]">
            <p className="text-[18px] text-left pl-1 text-black mb-1">
              服务热线
            </p>
            <Image
              src="/images/phone.png"
              alt="服务热线"
              width={133}
              height={40}
              className="mt-2 mx-auto"
            />
          </div>
        </div>

        {/* 展开/收起按钮 */}
        <div
          className="absolute top-[48px] right-[-49px] w-[40px] h-[140px] bg-[url('/images/service-btn.png')] bg-no-repeat cursor-pointer flex items-end justify-center"
          onClick={() => setShowService(!showService)}
        >
          <div className="mb-[10px] ml-[10px] w-[15px] h-[15px] bg-[url('/images/open-arrow.png')] bg-no-repeat transition-transform duration-300" style={{ transform: showService ? "rotate(180deg)" : "rotate(0deg)" }} />
        </div>
      </div>

      {/* 在线留言 - 左侧浮动 */}
      <div
        className="fixed left-0 top-[17%] z-[999] transition-all duration-300"
        style={{ width: showMessage ? "410px" : "40px" }}
      >
        {/* 展开内容 */}
        <div
          className={cn(
            "bg-white rounded-r-[14px] shadow-[1px_2px_10px_#a5a5a5] overflow-hidden transition-all duration-300",
            showMessage ? "w-[410px] opacity-100" : "w-0 opacity-0"
          )}
        >
          {/* 顶部标题栏 */}
          <div className="h-[42px] bg-[#333] text-white text-[18px] flex items-center justify-center rounded-tr-[14px]">
            请填写您的需求
          </div>

          {/* 表单内容 */}
          <div className="px-[44px] py-6">
            <div className="mb-8">
              <input
                type="text"
                placeholder="您的称呼"
                className="w-full h-[34px] px-[18px] border border-[#bbb] rounded-[6px] text-[14px] text-[#3d3d3d] outline-none focus:border-[#007bff]"
              />
            </div>
            <div className="mb-8 relative">
              <div className="flex">
                <select className="w-[100px] h-[40px] border border-[#bbb] rounded-l-[6px] px-2 text-[14px] text-[#3d3d3d] outline-none bg-white">
                  <option>手机号</option>
                  <option>QQ</option>
                  <option>微信</option>
                  <option>Telegram</option>
                  <option>WhatsApp</option>
                  <option>其他</option>
                </select>
                <input
                  type="text"
                  placeholder="联系方式"
                  className="flex-1 h-[40px] px-[18px] border border-l-0 border-[#bbb] rounded-r-[6px] text-[14px] text-[#3d3d3d] outline-none focus:border-[#007bff]"
                />
              </div>
              <span className="absolute top-1 right-[-14px] text-red-500 text-[16px]">
                *
              </span>
            </div>
            <div className="mb-2 relative">
              <textarea
                placeholder="您的需求"
                rows={4}
                maxLength={500}
                className="w-full px-[18px] py-2 border border-[#bbb] rounded-[6px] text-[14px] text-[#3d3d3d] outline-none resize-none min-h-[164px] focus:border-[#007bff]"
              />
              <span className="absolute top-2 right-[-14px] text-red-500 text-[16px]">
                *
              </span>
            </div>
            <div className="text-[12px] text-[#bdbdbd] text-right mb-5">
              *为必填项
            </div>
            <button className="w-[165px] h-[46px] bg-[url('/images/submit-btn.png')] bg-cover bg-no-repeat border-0 cursor-pointer rounded-md">
              <span className="sr-only">提交</span>
            </button>
          </div>

          {/* 底部提示 */}
          <div className="px-[44px] pb-6">
            <div className="text-[12px] text-[#666] pt-4 border-t border-dashed border-[#8c8c8c]">
              我们将会尽快处理您的问题，需加急处理请前往在线客服
            </div>
          </div>
        </div>

        {/* 展开/收起按钮 */}
        <div
          className="absolute top-[88px] right-[-40px] w-[40px] h-[140px] bg-[url('/images/message-btn.png')] bg-no-repeat cursor-pointer flex items-end justify-center"
          onClick={() => setShowMessage(!showMessage)}
        >
          <div className="mb-[10px] ml-[10px] w-[15px] h-[15px] bg-[url('/images/open-arrow.png')] bg-no-repeat transition-transform duration-300" style={{ transform: showMessage ? "rotate(180deg)" : "rotate(0deg)" }} />
        </div>
      </div>
    </>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
