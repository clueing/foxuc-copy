import Image from "next/image";

/* 新闻侧边栏组件 */
export default function NewsSidebar() {
  return (
    <div className="w-[390px]">
      {/* 联系我们 */}
      <div className="w-[390px] border-b border-[#d4d4d4] mx-auto">
        <h2 className="text-[26px] font-light mt-[30px] text-[#333]">
          想了解更多产品详情
        </h2>
        <h3 className="font-light leading-[1.5]">
          欢迎您通过热线电话或微信客服进行咨询
        </h3>
        <div className="mt-[20px]">
          <p className="w-[328px] py-[36px] mb-[30px] mx-auto">
            <Image
              src="/images/news/phone.png"
              alt="联系电话"
              width={328}
              height={27}
            />
          </p>
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src="/images/liu-qr.png"
                alt="在线微信"
                width={160}
                height={160}
              />
              <p className="text-[16px] text-[#666] pt-0">在线微信客服</p>
            </div>
          </div>
        </div>
      </div>

      {/* 更多业界资讯 */}
      <div className="text-center pt-[40px]">
        <h2 className="text-[26px] font-light text-[#333] mb-[4px]">
          更多业界资讯
        </h2>
        <p className="text-[16px] text-[#666] font-light">
          关注网狐公众号、新浪微博以及搜狐作者
        </p>
        <p className="text-[16px] text-[#666] font-light">
          您可以了解更新、更全行业资讯
        </p>
        <Image
          src="/images/qrcode-wechat.png"
          alt="微信公众号"
          width={200}
          height={200}
          className="mt-[30px] mx-auto"
        />
        <div className="text-[16px] text-[#666] mt-[12px]">
          扫码添加网狐公众号
        </div>
      </div>

      {/* 热门关注 */}
      <div className="mt-[56px] border-t border-b border-[#dedede]">
        <div className="text-center pt-[40px] mb-[4px]">
          <h2 className="text-[26px] font-light text-[#333] mb-[2px]">
            热门关注
          </h2>
          <p className="text-[16px] font-light text-[#666]">
            直击行业内幕，挖掘用户痛点，汇总运营方案
          </p>
        </div>
        <ul className="flex flex-wrap px-[40px] pb-[40px] ml-[-30px]">
          {[
            { title: "重视海外棋牌的社交需求", date: "2024/08/08", color: "bg-[#e86868]" },
            { title: "游戏定制开发", date: "2023/03/21", color: "bg-[#67b4dc]" },
            { title: "棋牌游戏业的真实状况", date: "2018/05/24", color: "bg-[#9db551]" },
            { title: "浙数文化年赚16.57亿", date: "2018/05/22", color: "bg-[#e8a968]" },
            { title: "四川棋牌市场厮杀惨烈", date: "2018/05/21", color: "bg-[#7c91ce]" },
            { title: "棋牌海外市场现状", date: "2018/05/18", color: "bg-[#dcc765]" },
            { title: "4月棋牌游戏数据", date: "2018/05/17", color: "bg-[#e87d68]" },
            { title: "东南亚博彩游戏市场分析", date: "2018/05/16", color: "bg-[#4cc0b8]" },
          ].map((item, index) => (
            <li key={index} className="relative mt-[20px] ml-[30px]">
              <div
                className={`${item.color} rounded-[6px] w-[140px] h-[160px] pt-[32px] px-[28px] text-center relative`}
              >
                <p className="text-[20px] text-white mb-[30px] leading-[1.25]">
                  {item.title}
                </p>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[2px] text-[13px] text-white/50">
                  {item.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
