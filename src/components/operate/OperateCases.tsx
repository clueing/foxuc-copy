import Image from "next/image";

/* 成功案例数据 */
const successCases = [
  {
    id: 1,
    title: "四川游戏家园",
    image: "/images/operate/case_1.png",
    region: "四川省",
    year: "2012 年",
    description:
      "四川游戏家园专注于四川地方棋牌游戏市场，目前同时在线人数已突破 20000，荣获「2017 年度休闲棋牌游戏」奖，已发展成为四川地区颇具影响力的地方棋牌精品。",
  },
  {
    id: 2,
    title: "西楚游戏家园",
    image: "/images/operate/case_2.png",
    region: "江苏宿迁",
    year: "2007 年",
    description:
      "西楚游戏家园是网狐与宿迁日报社携手打造的网络棋牌游戏项目，内含多种宿迁特色棋牌产品，新增茶馆快捷约局功能，更有精彩比赛聚集人气，从 PC 到手机端成功转型，是当地知名的棋牌游戏平台。",
  },
  {
    id: 3,
    title: "浙江游戏家园",
    image: "/images/operate/case_3.png",
    region: "浙江绍兴",
    year: "2017 年",
    description:
      "浙江游戏家园是网狐面向浙江地区定制开发的棋牌游戏平台，囊括多款绍兴特色游戏，内置游戏茶馆版块，原滋原味还原当地玩法，让人足不出户尽享棋牌乐趣，深受当地用户欢迎。",
  },
  {
    id: 4,
    title: "泸州游戏家园",
    image: "/images/operate/case_4.png",
    region: "四川泸州",
    year: "2018 年",
    description:
      "泸州游戏家园是网狐在以往开发运营基础上重磅推出的地方经典棋牌游戏，将传统地道玩法和创新功能深入结合，在泸州四县三区非常流行，是当地男女老少闲时必不可少的娱乐项目。",
  },
  {
    id: 5,
    title: "恩施游戏家园",
    image: "/images/operate/case_5.png",
    region: "湖北恩施",
    year: "2010 年",
    description:
      "恩施游戏家园于 2010 年开始与网狐合作，打造了具备当地特色的棋牌游戏，经过多年合作，恩施游戏家园积累了一大批忠实用户，并通过不断创新玩法，吸引更多的新用户加入游戏家园。",
  },
  {
    id: 6,
    title: "客家游戏家园",
    image: "/images/operate/case_6.png",
    region: "广东惠州",
    year: "2018 年",
    description:
      "客家游戏家园于 2018 年开始与网狐合作，携手共同开创广东惠州市场，开发运营地道正宗的惠州本地玩法棋牌游戏。平台一上线，受到了当地人的青睐，成为了当地颇受欢迎的客家游戏平台。",
  },
];

/* 成功案例区块 */
export default function OperateCases() {
  return (
    <section className="bg-white py-16" id="case">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* 标题 */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            有哪些「游戏家园」成功案例？
          </h2>
        </div>

        {/* 案例网格 */}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {successCases.map((item) => (
            <li key={item.id} className="rounded-lg bg-gray-50 p-6">
              {/* 案例标题区域 */}
              <div className="mb-4 flex items-start gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    所在地区：{item.region}
                  </p>
                  <p className="text-sm text-gray-500">
                    合作时间：{item.year}
                  </p>
                </div>
              </div>
              {/* 案例描述 */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
