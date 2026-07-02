import Image from "next/image";

/* 核心价值观数据 */
const coreValues = [
  {
    icon: "/images/about/culture-3.png",
    title: "专注、专业--我们的态度",
    items: [
      "专注：欲博则不精，欲全则不细，网狐全心致力于网络棋牌游戏的开发、销售和运营，精专一行，在专一行业内求博广。",
      "专业：汲取众多成功案例及开发运营理念之精华，精铸棋牌技术，引领行业革新。以专致精，以质取胜。",
    ],
  },
  {
    icon: "/images/about/culture-4.png",
    title: "创新、务实--我们的优势",
    items: [
      "创新：立足于棋牌游戏市场的潮流变化，网狐人持续创新，精益求精，以全面满足玩家及运营商需求、提高人们文化生活水平为目标。",
      "务实：将目光聚焦在产品之上，以客户需求为出发点，踏踏实实深化技术，勤勤恳恳做人做事，用精尖技术奠定企业发展的基石。",
    ],
  },
  {
    icon: "/images/about/culture-5.png",
    title: "诚挚、诚信--我们的原则",
    items: [
      "诚挚：以开放的心态广泛听取各种声音，用诚恳的态度服务每一位合作伙伴，让客户收获满意的回报，让玩家尽享棋牌的乐趣。",
      "诚信：对客户永怀真心、诚实守信，视诚信为立身之本，通过塑造良好的企业信誉来打造企业品牌和树立行业地位。",
    ],
  },
  {
    icon: "/images/about/culture-6.png",
    title: "合作、共赢--我们的追求",
    items: [
      "合作：企业内部，齐心协力、团结合作，共攀棋牌高峰；企业外部，携手发展、共创佳绩，不断深化战略合作关系。",
      "共赢：在竞争日益激烈的互联网游戏市场中，与广大游戏运营商共享资源、共克难关，提振信心，把握商机，开创互利共赢的新局面。",
    ],
  },
];

/* 企业文化内容组件 */
export default function CultureContent() {
  return (
    <main className="my-[100px] mx-auto max-w-[1230px]">
      {/* 第一屏 - 经营理念 */}
      <section className="relative min-h-[600px] mb-[100px]">
        <div className="text-center">
          <p className="text-[28px] text-[#333] mb-2">网狐的经营理念</p>
          <p className="text-[36px] font-bold text-[#e60000]">以精为业、以质取胜</p>
        </div>
        {/* 插图区域 - 使用占位 */}
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-[#999]">办公场景</span>
          </div>
        </div>
      </section>

      {/* 第二屏 - 发展愿景 */}
      <section className="relative min-h-[600px] mb-[100px]">
        <div className="text-center">
          <p className="text-[28px] text-[#333] mb-2">我们的发展愿景</p>
          <p className="text-[36px] font-bold text-[#e60000]">
            力争成为业界最优秀
          </p>
          <p className="text-[36px] font-bold text-[#e60000]">
            最知名的棋牌游戏开
          </p>
          <p className="text-[36px] font-bold text-[#e60000]">发与运营商</p>
        </div>
      </section>

      {/* 第三屏 - 核心价值观 */}
      <section className="mb-[100px]">
        <div className="text-center mb-[60px]">
          <p className="text-[28px] text-[#333] mb-2">核心价值观</p>
          <p className="text-[36px] font-bold text-[#e60000]">
            专注、专业丨创新、务实
          </p>
          <p className="text-[36px] font-bold text-[#e60000]">
            诚挚、诚信丨合作、共赢
          </p>
        </div>

        {/* 价值观卡片 */}
        <div className="grid grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <Image
                  src={value.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="flex-shrink-0"
                />
                <div>
                  <h3 className="text-[20px] font-bold text-[#333] mb-4">
                    {value.title}
                  </h3>
                  {value.items.map((item, i) => (
                    <p
                      key={i}
                      className="text-[14px] text-[#666] leading-[1.8] mb-3"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
