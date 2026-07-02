import Image from "next/image";

/* 关于我们数据项 */
const stats = [
  {
    numImage: "/images/about/num-2005.png",
    numWidth: 81,
    label: "年成立",
    description:
      "深圳市网狐科技有限公司专注于娱乐软件开发及管理，成立于 2005 年，现有员工 100 余人，办公场地 1000 多平米，通过国家软件企业及高新技术企业认证，是广东省游戏产业协会理事单位。",
  },
  {
    numImage: "/images/about/num-18.png",
    numWidth: 33,
    label: "年",
    description:
      "深耕棋牌游戏行业十八年，网狐推出了一系列高度迎合市场需求的强大产品，网狐 6603 游戏平台、网狐荣耀游戏平台、网狐经典游戏平台等经典之作广受好评。",
  },
  {
    numImage: "/images/about/num-34.png",
    numWidth: 39,
    label: "个国家和地区",
    description:
      "依托丰富的资源优势和成熟的开发经验，网狐业务范围已遍及全球 34 个国家和地区。未来，网狐将携手更多合作伙伴共谋发展，再创辉煌。",
  },
  {
    numImage: "/images/about/num-200.png",
    numWidth: 59,
    label: "多款游戏",
    description:
      "致力于为市场提供更好的棋牌游戏解决方案，网狐自主研发200余款游戏，以满足全球客户。网狐不满足于此，更多特色游戏在网狐研发团队的计划中。",
  },
  {
    numImage: "/images/about/num-28.png",
    numWidth: 47,
    label: "亿次下载",
    description:
      "截止2021年底，网狐平台已在全球有2.8亿次下载。旗下《四川游戏家园》也在地方棋牌市场上大获成功，于全球游戏开发者大会荣获'GMGC年度休闲棋牌游戏奖'。",
  },
  {
    numImage: "/images/about/num-183.png",
    numWidth: 63,
    label: "万人同时在线",
    description:
      "2022年1月，网狐研发的游戏拥有最高18.3万人同时在线，刷新了历史新高。新华网主办的中国游戏盛典上，网狐获评'年度成长性企业'。",
  },
];

/* 关于我们内容组件 */
export default function AboutContent() {
  return (
    <main className="my-[100px] mx-auto max-w-[1230px]">
      {/* 数据展示 */}
      <div className="flex flex-wrap justify-between">
        {stats.map((stat, index) => (
          <div key={index} className="w-[340px] mb-[80px]">
            <div className="text-[16px] font-light text-black mb-[18px] flex items-center">
              <Image
                src={stat.numImage}
                alt=""
                width={stat.numWidth}
                height={41}
                className="inline-block align-text-bottom mr-[15px]"
              />
              {stat.label}
            </div>
            <p className="text-[14px] text-[#333] leading-[1.8] font-light">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* 公司介绍 */}
      <div
        className="w-[1230px] h-[286px] leading-[2] text-[16px] font-light mx-auto mb-[80px] bg-[url('/images/about/bg-dialog.png')] bg-no-repeat"
        style={{ padding: "50px 298px 0 166px" }}
      >
        作为首批从事网络棋牌游戏开发的企业，网狐秉承"以精为业、以质取胜"的核心经营理念，以技术革新为导向，不断打磨产品品质，自创立之初就与众多知名企业合作，现已形成覆盖
        PC
        端、移动端的多元化产品体系，在全国范围内牢牢占据棋牌游戏开发行业的龙头地位。棋牌游戏开发之于网狐人，不仅仅是兴趣，也是为之毕生奋斗的事业。
      </div>

      {/* 组织架构 */}
      <div className="w-[1200px] mx-auto text-center border-t border-[#dedede]">
        <h2 className="text-[44px] font-light text-center mt-[90px]">
          网狐组织架构
        </h2>
        <p className="text-[19px] text-[#999] text-center mb-[40px] leading-[3]">
          四大中心紧密协作，构建高效管理体系
        </p>
        <Image
          src="/images/about/construction.png"
          alt="组织架构"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
