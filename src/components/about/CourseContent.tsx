"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/* 发展历程数据 */
const timeline = [
  {
    year: "2019",
    title: "海外市场大爆发，网狐坚持为市场提供高质量棋牌产品",
    events: [
      { date: "2019 年 11 月", text: "《网狐U3D娱乐平台PC版》创新上市，用匠心复刻经典" },
      { date: "2019 年 09 月", text: "《网狐IOS超级签名系统》正式发售，用心解决苹果掉签问题" },
      { date: "2019 年 08 月", text: "《网狐卓越Creator平台》全新上市，助运营商掌控三端用户" },
      { date: "2019 年 05 月", text: "海外市场扩张迅速，与越南棋牌运营商达成棋牌定制服务" },
      { date: "2019 年 04 月", text: "进驻菲律宾棋牌市场，为当地运营商开发棋牌产品" },
      { date: "2019 年 03 月", text: "为美国厂商制作开发棋牌游戏，进一步拓展海外版图" },
      { date: "2019 年 03 月", text: "为柬埔寨公司制作开发棋牌游戏再拓海外市场" },
      { date: "2019 年 01 月", text: "网狐与新加坡棋牌运营商达成定制开发服务" },
    ],
  },
  {
    year: "2018",
    title: "新产品新平台 赋予网狐 6 系棋牌新定义",
    events: [
      { date: "2018 年 09 月", text: "《网狐旗舰 U3D 平台》震撼发布" },
      { date: "2018 年 08 月", text: "《网狐旗舰 H5 平台》正式发售" },
      { date: "2018 年 07 月", text: "《网狐旗舰平台》重磅推出" },
      { date: "2018 年 04 月", text: "网狐获评新华网主办'中国游戏盛典'最具成长性企业" },
      { date: "2018 年 03 月", text: "《网狐精华 H5 平台》全新上线" },
      { date: "2018 年 01 月", text: "新华网专访网狐创始人江慧峰" },
      { date: "2018 年 01 月", text: "网狐乔迁至南山区深圳湾超级总部基地中建钢构大厦 28 楼" },
      { date: "2018 年 01 月", text: "网狐荣膺 2017 金茶奖'最佳棋牌游戏企业'" },
    ],
  },
  {
    year: "2017",
    title: "全新战略部署 开辟网狐新纪元",
    events: [
      { date: "2017 年 11 月", text: "网狐《四川游戏家园》荣获天府奖'最佳休闲棋牌游戏'" },
      { date: "2017 年 10 月", text: "网狐棋牌游戏平台 6603 系列——网狐棋牌精华版震撼发布" },
      { date: "2017 年 09 月", text: "网狐游戏家园手机用户同时在线人数突破 1.5 万人" },
      { date: "2017 年 08 月", text: "网狐乔迁南山后海海信南方大厦 27 楼" },
      { date: "2017 年 08 月", text: "新浪深圳科技频道授牌网狐'最佳战略合作伙伴'" },
      { date: "2017 年 04 月", text: "网狐被推荐成为广东省游戏产业协会理事单位" },
      { date: "2017 年 03 月", text: "浙江游戏家园合作站点正式上线" },
    ],
  },
  {
    year: "2016",
    title: "进军棋牌游戏移动运营市场 游戏家园手机客户端上线",
    events: [
      { date: "2016 年 12 月", text: "网狐新品'红包扫地雷'安卓版正式上线" },
      { date: "2016 年 11 月", text: "网狐研发'经典斗地主房卡功能'正式发布" },
      { date: "2016 年 08 月", text: "网狐棋牌游戏平台 6603 系列——网狐棋牌荣耀版重磅发布" },
      { date: "2016 年 04 月", text: "网狐棋牌经典版 Cocos2d-x 手机大厅正式发布" },
      { date: "2016 年 03 月", text: "与英企达成合作，海外市场再度扩张" },
    ],
  },
  {
    year: "2015",
    title: "技术的自我革新 原生语言产品到 Cocos2d 产品的移植",
    events: [
      { date: "2015 年 12 月", text: "全新款捕鱼游戏'深海侏罗纪'全新上线" },
      { date: "2015 年 08 月", text: "全新制作的人鱼奇缘 Cocos2d-x 版正式发布" },
      { date: "2015 年 03 月", text: "全新制作的人鱼奇缘 PC 版正式发布" },
      { date: "2015 年 01 月", text: "再次获得《软件企业证书》" },
    ],
  },
  {
    year: "2014",
    title: "从未停止探索的脚步 网狐新产品层出不穷",
    events: [
      { date: "2014 年 12 月", text: "运营辅助产品——'配置助手-网狐棋牌'在 App Store 正式上线" },
      { date: "2014 年 11 月", text: "网狐自主运营——'跳跳球-网狐游戏'在 App Store 正式上线" },
      { date: "2014 年 11 月", text: "网狐自主运营——'炉石大师-网狐游戏'在 App Store 正式上线" },
      { date: "2014 年 10 月", text: "为印尼公司制作开发棋牌游戏再拓海外市场" },
      { date: "2014 年 09 月", text: "运营辅助产品——'运营助手-网狐棋牌'在 App Store 正式上线" },
      { date: "2014 年 08 月", text: "网狐棋牌游戏平台 6603 系列——网狐棋牌经典版隆重发布" },
      { date: "2014 年 03 月", text: "与禧游同城合作淮安掼蛋电视直播系统正式上线" },
    ],
  },
  {
    year: "2013",
    title: "政府各方的高度认可 助力网狐稳健前行",
    events: [
      { date: "2013 年 10 月", text: "再次通过国家高新技术企业认证" },
      { date: "2013 年 07 月", text: "为越南公司制作的休闲游戏平台正式上线" },
      { date: "2013 年 01 月", text: "网狐获批《网络文化经营许可证》" },
    ],
  },
  {
    year: "2012",
    title: "一个划时代的产品诞生 一次里程碑式的乔迁",
    events: [
      { date: "2012 年 12 月", text: "网狐棋牌游戏平台 6603 系列——网狐棋牌标准版正式发布" },
      { date: "2012 年 11 月", text: "网狐乔迁入驻南山中心区海岸大厦西座 908" },
      { date: "2012 年 04 月", text: "网狐新增产品线--机顶盒斗地主" },
      { date: "2012 年 01 月", text: "四川游戏家园合作分站正式上线" },
    ],
  },
  {
    year: "2011",
    title: "从 PC 端到手机端 网狐产品转型的重要转折点",
    events: [
      { date: "2011 年 12 月", text: "计时斗地主比赛正式上线" },
      { date: "2011 年 12 月", text: "第二代网狐棋牌游戏手机平台开发完成" },
      { date: "2011 年 10 月", text: "Version 6603 网狐棋牌游戏平台盛大发布" },
      { date: "2011 年 05 月", text: "网狐首创 PC 和手机互通，手机斗地主开发完成" },
      { date: "2011 年 02 月", text: "网狐游戏家园游戏用户同时在线人数突破 8000 人" },
    ],
  },
  {
    year: "2010",
    title: "强强联合 优势互补 合作共赢 携手同行",
    events: [
      { date: "2010 年 08 月", text: "恩施游戏家园合作分站正式上线" },
      { date: "2010 年 03 月", text: "与中国游戏中心达成正式战略合作" },
    ],
  },
  {
    year: "2009",
    title: "大厂的青睐 自营的突破 网狐势如破竹的一年",
    events: [
      { date: "2009 年 07 月", text: "与腾讯 QQ 游戏达成正式战略合作" },
      { date: "2009 年 03 月", text: "网狐游戏家园各站点当地市场占有率突破50%" },
    ],
  },
  {
    year: "2008",
    title: "每一次进步 每一步台阶 我们离成功又近了一点",
    events: [
      { date: "2008 年 06 月", text: "携手华东知名网站成立稠州游戏中心" },
      { date: "2008 年 05 月", text: "网狐办公室扩张，新增青海大厦 27 楼办公室" },
      { date: "2008 年 04 月", text: "Version 6602 网狐棋牌游戏平台正式发布" },
    ],
  },
  {
    year: "2007",
    title: "获得国家的认可不难 难的是在那样不开放的时代",
    events: [
      { date: "2007 年 12 月", text: "首次获得高新技术企业认定" },
      { date: "2007 年 08 月", text: "网狐海外华侨娱乐游戏系统发布" },
      { date: "2007 年 07 月", text: "宿迁游戏家园（现西楚游戏家园）合作分站正式上线" },
      { date: "2007 年 07 月", text: "网狐游戏家园（PC 端）正式上线" },
      { date: "2007 年 07 月", text: "Version 6601 网狐棋牌游戏平台正式发布" },
      { date: "2007 年 06 月", text: "获得《软件企业认定证书》" },
      { date: "2007 年 04 月", text: "网狐游戏家园软件 V6.0.1.0 获得《软件产品登记证书》" },
    ],
  },
  {
    year: "2006",
    title: "游戏平台换代 办公环境升级 网狐更上一层楼",
    events: [
      { date: "2006 年 07 月", text: "网狐办公室乔迁至福田区青海大厦 712" },
      { date: "2006 年 04 月", text: "Version 6501 网狐棋牌游戏平台正式发布" },
    ],
  },
  {
    year: "2005",
    title: "网狐公司成立 网狐棋牌游戏平台创始版本隆重出场",
    events: [
      { date: "2005 年 03 月", text: "Version 6001 网狐棋牌游戏平台正式发布" },
      { date: "2005 年 01 月", text: "网狐在深圳成立 落址深圳福田区梅林一村新活力花园五栋401" },
    ],
  },
];

/* 发展历程内容组件 */
export default function CourseContent() {
  const [expandedYears, setExpandedYears] = useState<string[]>(["2019"]);

  /* 切换年份展开/收起 */
  const toggleYear = (year: string) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  return (
    <main className="my-[100px] mx-auto max-w-[1200px]">
      <div className="space-y-4">
        {timeline.map((item) => {
          const isExpanded = expandedYears.includes(item.year);
          return (
            <div
              key={item.year}
              className={cn(
                "border border-gray-200 rounded-lg overflow-hidden",
                isExpanded && "shadow-sm"
              )}
            >
              {/* 年份标题 */}
              <div
                className="bg-gray-50 px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleYear(item.year)}
              >
                <h2 className="text-[18px] font-bold text-[#333]">
                  <strong className="text-[#e60000] mr-2">{item.year}</strong>
                  {item.title}
                  <span className="float-right text-[14px] text-[#999] font-normal">
                    {isExpanded ? "收起" : `展开显示 ${item.events.length} 条历史事件`}
                  </span>
                </h2>
              </div>

              {/* 事件列表 */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <ul className="px-6 py-4 space-y-4">
                  {item.events.map((event, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#e60000] mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-[14px] text-[#999] mb-1">
                          {event.date}
                        </p>
                        <p className="text-[14px] text-[#333] leading-[1.8]">
                          {event.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
