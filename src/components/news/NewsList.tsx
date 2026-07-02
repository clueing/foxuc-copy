import Link from "next/link";
import Image from "next/image";

/* 新闻文章数据 */
const newsArticles = {
  original: [
    { id: 13336, title: "棋牌游戏出海运营的关键策略与实用建议", desc: "棋牌游戏出海运营由于运营地区和目标用户具有差异性，实际的运营情况也会有所不同。", image: "/images/news/13336.png", date: "2024/11/18" },
    { id: 13335, title: "多语言版本：棋牌游戏出海的核心竞争力", desc: "随着棋牌游戏市场的全球化，棋牌创业者面对的不仅是产品质量的竞争，更是文化与语言的挑战。", image: "/images/news/13335.png", date: "2024/11/18" },
    { id: 13334, title: "棋牌出海：东南亚六国热门棋牌游戏解析", desc: "目前，东南亚棋牌市场一些游戏热度极高，如 QiuQiu、Gaple、Texas Hold'em、以及各种slots游戏", image: "/images/news/13334.png", date: "2024/11/14" },
    { id: 13333, title: "棋牌游戏运营精细化的重要性与策略", desc: "精细化运营能够通过优化游戏体验、提高玩家留存率，从而提升竞争力。", image: "/images/news/13333.png", date: "2024/11/13" },
    { id: 13332, title: "H5棋牌游戏开发中的核心技术解析", desc: "在H5棋牌游戏开发中，HTML5和JavaScript是所需的核心技术", image: "/images/news/13332.png", date: "2024/11/01" },
    { id: 13331, title: "棋牌游戏出海的那些坑，你踩到了吗", desc: "出海的本质就是要克服文化和市场的差异，打入目标市场，满足玩家需求，从而实现盈利。", image: "/images/news/13331.png", date: "2024/10/15" },
    { id: 13330, title: "如何选择合适的手机棋牌游戏开发方案？", desc: "市场上那么多选择，创业者如何选择合适的手机棋牌游戏开发方案？", image: "/images/news/13330.png", date: "2024/10/11" },
    { id: 13329, title: "东南亚棋牌市场买量攻略", desc: "目前棋牌游戏出海东南亚，可以采用的买量渠道有很多", image: "/images/news/13329.png", date: "2024/10/09" },
    { id: 13328, title: "购买三无棋牌源码存在哪些隐患？", desc: "开发或运营棋牌平台，建议寻找有合法授权、提供售后支持和安全保障的源码或开发服务。", image: "/images/news/13328.png", date: "2024/09/27" },
    { id: 13327, title: "棋牌出海用户流失的五大常见原因", desc: "棋牌游戏进入海外市场，普遍面临用户接受度低、活跃用户数量增长缓慢", image: "/images/news/13327.png", date: "2024/09/20" },
  ],
  qpnews: [
    { id: 12960, title: "网狐卓越Creator平台全新上市", desc: "网狐卓越Creator平台全新上市：做市场认可的创新型棋牌", image: "/images/news/12960.jpg", date: "2020/01/09" },
    { id: 13245, title: "网狐科技中秋节放假通知", desc: "中秋快乐", image: "/images/news/13245.jpg", date: "2021/09/19" },
    { id: 13153, title: "网狐Rummy上线诚招印度联运合伙人", desc: "2020年棋牌行业最火的方向是出海，出海最热的目的地是印度", image: "/images/news/13153.png", date: "2020/08/18" },
    { id: 13155, title: "网狐诚招欧美地区合伙人", desc: "欧美地区棋牌用户所钟情的产品以德州扑克和Slots游戏为主", image: "/images/news/13155.png", date: "2020/08/21" },
    { id: 13150, title: "《网狐U3D国际平台》正式上市", desc: "《网狐U3D国际平台》正式上线，专为海外棋牌市场打造的优质产品", image: "/images/news/13150.png", date: "2020/08/13" },
    { id: 13140, title: "《网狐王者平台》全新上市", desc: "引领不凡，王者风范。2020年7月，《网狐王者平台》正式发布", image: "/images/news/13140.jpg", date: "2020/07/30" },
    { id: 13128, title: "关于网狐开放常用服务端扩展接口的决定", desc: "即日起，网狐将对仅购买组件的运营商也会开放部分常用业务层的关键API接口", image: "/images/news/13128.png", date: "2020/07/16" },
    { id: 13118, title: "热烈庆贺网狐科技乔迁新址", desc: "2020年7月，网狐科技乔迁新址，正式入驻深圳市宝安区壹方中心B座9楼", image: "/images/news/13118.png", date: "2020/07/03" },
    { id: 13101, title: "网狐全新业务模式招募全球合伙人", desc: "2020年已接近过半，对国内的游戏从业者，尤其是棋牌从业者来说", image: "/images/news/13101.jpg", date: "2020/06/05" },
    { id: 13103, title: "网狐《海王》捕鱼全新上市", desc: "网狐也基本遵循着一年一款精品捕鱼游戏的节奏，不断推陈出新", image: "/images/news/13103.png", date: "2020/06/10" },
  ],
};

/* 新闻列表组件 */
interface NewsListProps {
  type: "original" | "qpnews";
}

export default function NewsList({ type }: NewsListProps) {
  const articles = newsArticles[type] || [];

  return (
    <div className="w-full">
      {/* 顶部三篇文章 */}
      <div className="flex justify-center items-start mb-[40px]">
        {articles.slice(0, 3).map((article, index) => (
          <section
            key={article.id}
            className={`overflow-hidden rounded-[12px] shadow-[0_2px_13px_#ebebeb] ${
              index === 1 ? "mx-[50px]" : ""
            }`}
          >
            <Link
              href={`/news/${article.id}`}
              className="block w-[330px] h-[220px] overflow-hidden"
            >
              <div className="relative overflow-hidden w-[330px] h-[220px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={330}
                  height={220}
                  className="block transition-transform duration-750 hover:scale-110"
                />
                <span
                  className={`absolute left-0 bottom-0 w-[36px] h-[24px] ${
                    index === 0
                      ? "bg-[url('/images/news/tag_top.png')] bg-no-repeat"
                      : index === 1
                      ? "bg-[url('/images/news/tag_rec.png')] bg-no-repeat"
                      : "bg-[url('/images/news/tag_hot.png')] bg-no-repeat"
                  }`}
                />
              </div>
            </Link>
            <p className="text-center px-[10px] py-[2px] text-[18px] text-black leading-[32px] mt-[2px] overflow-hidden text-ellipsis">
              <Link
                href={`/news/${article.id}`}
                className="hover:text-red-500 transition-colors no-underline text-[#333]"
              >
                {article.title}
              </Link>
            </p>
          </section>
        ))}
      </div>

      {/* 文章列表 */}
      <div>
        {articles.map((article) => (
          <section
            key={article.id}
            className="flex py-[40px] bg-[url('/images/line/dotted.png')] bg-repeat-x bg-bottom"
          >
            <Link
              href={`/news/${article.id}`}
              className="flex-shrink-0 relative overflow-hidden rounded-[6px] shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={240}
                height={160}
                className="block transition-transform duration-750 hover:scale-110"
              />
            </Link>
            <div className="w-[495px] ml-[24px]">
              <div className="h-[140px] overflow-hidden">
                <h2 className="text-[26px] leading-[1.17]">
                  <Link
                    href={`/news/${article.id}`}
                    className="text-black hover:text-red-500 transition-colors no-underline"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-[10px] text-[16px] text-[#333]">
                  <Link
                    href={`/news/${article.id}`}
                    className="text-[#333] hover:text-red-500 transition-colors no-underline"
                  >
                    {article.desc}
                  </Link>
                </p>
              </div>
              <span className="text-[#999]">{article.date}</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
