"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* 地图标签数据 */
const mapTabs = [
  { label: "概览", active: true },
  { label: "从机场来", active: false },
  { label: "从火车站来", active: false },
  { label: "乘地铁来", active: false },
  { label: "坐公交来", active: false },
  { label: "周边吃住", active: false },
];

/* 联系页面内容组件 */
export default function ContactContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white">
      <div className="w-[1200px] mx-auto py-[78px] px-0">
        {/* 公司地址和服务热线 */}
        <div className="flex pb-[62px] border-b border-[#dedede]">
          {/* 左侧 - 公司地址 */}
          <div className="flex-1 text-center">
            <h2 className="text-[38px] font-light text-[#222] mb-[20px]">
              公司地址
            </h2>
            <p className="text-[16px] text-[#444] font-light mb-[14px]">
              广东省深圳市宝安区新安街道新湖路99号壹方城中心B座 22 楼
            </p>
            <p className="text-[14px] text-[#e60000] font-light">
              9F, Yifangcheng B Building, 99 xinhu lu baoan Center St,
            </p>
            <p className="text-[14px] text-[#e60000] font-light">
              Nanshan Dist, Shenzhen, Guangdong, China.
            </p>

            {/* 地图链接 */}
            <div className="inline-block mt-[86px]">
              <a
                href="https://j.map.baidu.com/1c/rqc"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center"
              >
                <Image
                  src="/images/contact/baidu-map.png"
                  alt="百度地图"
                  width={100}
                  height={40}
                  className="mr-[23px]"
                />
                <div>
                  <span className="block text-[19px] text-[#333] text-left">
                    在百度地图中
                  </span>
                  <span className="text-[16px] text-[#e82626]">
                    查看我司地址{" "}
                    <Image
                      src="/images/contact/link.png"
                      alt=""
                      width={12}
                      height={12}
                      className="inline"
                    />
                  </span>
                </div>
              </a>
            </div>

            <div className="inline-block mt-[86px] ml-[70px]">
              <a
                href="https://surl.amap.com/xwRrfaV14M"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center"
              >
                <Image
                  src="/images/contact/gaode-map.png"
                  alt="高德地图"
                  width={100}
                  height={40}
                  className="mr-[23px]"
                />
                <div>
                  <span className="block text-[19px] text-[#333] text-left">
                    在高德地图中
                  </span>
                  <span className="text-[16px] text-[#e82626]">
                    查看我司地址{" "}
                    <Image
                      src="/images/contact/link.png"
                      alt=""
                      width={12}
                      height={12}
                      className="inline"
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* 右侧 - 服务热线 */}
          <div className="w-[479px] pb-[12px] text-center border-l border-dotted border-[#d4d4d4]">
            <h2 className="text-[38px] font-light text-[#222] mb-[20px]">
              服务热线
            </h2>
            <p className="text-[16px] text-[#666] font-light">
              欢迎您通过热线电话或微信客服进行咨询
            </p>

            <div className="mt-[30px]">
              <p className="w-[328px] mx-auto pb-[30px] border-b border-dotted border-[#c3c3c3]">
                <Image
                  src="/images/contact/phone.png"
                  alt="联系电话"
                  width={328}
                  height={27}
                />
              </p>

              {/* 微信二维码 */}
              <div className="flex justify-between items-center px-[64px] mt-[32px]">
                <div className="text-center">
                  <Image
                    src="/images/liu-qr.png"
                    alt="客服微信"
                    width={160}
                    height={160}
                  />
                  <p className="text-[16px] text-[#666] pt-0">游戏定制</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/liu-qr.png"
                    alt="客服微信"
                    width={160}
                    height={160}
                  />
                  <p className="text-[16px] text-[#666] pt-0">游戏联运</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 地图导航 */}
        <div className="text-center mt-[75px]">
          <h2 className="text-[38px] font-light text-black text-center">
            地图导航
          </h2>
          <p className="text-[16px] text-[#666] text-center">
            在地图中获取到达网狐的最佳路线
          </p>

          {/* 标签栏 */}
          <div className="inline-flex mt-[38px] mb-[4px] text-center">
            {mapTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "w-[142px] h-[60px] text-[15px] text-white leading-[53px] no-underline border-0 cursor-pointer mr-2",
                  activeTab === index
                    ? "bg-[url('/images/contact/map-active.png')] bg-no-repeat text-[#666]"
                    : "bg-[url('/images/contact/map-back.png')] bg-no-repeat"
                )}
                style={{
                  backgroundPosition: activeTab === index
                    ? "top"
                    : `-${148 * index}px 0`,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 地图图片 */}
          <div className="mt-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className={cn(
                  activeTab === index ? "block" : "hidden"
                )}
              >
                <Image
                  src={`/images/contact/map-0${index + 1}.png`}
                  alt={`地图 ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
