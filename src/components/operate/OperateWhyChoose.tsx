import Image from "next/image";

/* 优势数据 */
const advantages = [
  {
    icon: "/images/operate/reason_1.png",
    title: "棋牌",
    highlight: "资历深",
    description: "15 年棋牌行业资深专家，屈指可数的老牌企业，成功案例 1000+。",
  },
  {
    icon: "/images/operate/reason_2.png",
    title: "技术",
    highlight: "研发强",
    description: "棋牌行业架构典范，开发技术市场领先，为游戏的稳定提供坚实保障。",
  },
  {
    icon: "/images/operate/reason_3.png",
    title: "产品",
    highlight: "体验好",
    description: "界面交互亮眼，服务器架构灵活，产品稳定性和拓展性极强，每一款都经过市场检验。",
  },
  {
    icon: "/images/operate/reason_4.png",
    title: "成功",
    highlight: "经验多",
    description: "十年市场经验，一手信息资源，熟知棋牌游戏行业用户的痛点，避免误入暗坑。",
  },
  {
    icon: "/images/operate/reason_5.png",
    title: "运维",
    highlight: "响应快",
    description: "运维体系成熟，运作高效，安全防御及时，应急情况处理快。",
  },
];

/* 为什么选择网狐区块 */
export default function OperateWhyChoose() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* 标题 */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            为什么选择网狐？
          </h2>
        </div>

        {/* 优势卡片列表 */}
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {advantages.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* 图标 */}
              <Image
                src={item.icon}
                alt={`${item.title}${item.highlight}`}
                width={80}
                height={80}
                className="mb-4 h-20 w-20 object-contain"
              />
              {/* 标题 */}
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                {item.title}
                <span className="text-red-500">{item.highlight}</span>
              </h3>
              {/* 描述 */}
              <p className="text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
