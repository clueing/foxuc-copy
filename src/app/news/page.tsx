import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsBanner from "@/components/news/NewsBanner";
import NewsNav from "@/components/news/NewsNav";
import NewsList from "@/components/news/NewsList";
import NewsSidebar from "@/components/news/NewsSidebar";

/* 棋牌资讯页面 */
export const metadata = {
  title: "网狐原创,棋牌开发，棋牌游戏开发，棋牌游戏开发商-深圳市网狐科技有限公司",
  description:
    "网狐新闻的原创写着行业内的热门新闻和棋牌游戏带给人们的众多好处，不但给大家带来了知识，还给大家带来了商机。",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <NewsBanner
        title="更快 更准 更全面"
        subtitle="棋牌业界资讯一站式服务"
        variant="original"
      />
      <NewsNav title="棋牌资讯" />
      <div className="w-[1200px] mx-auto my-[40px]">
        <div className="flex">
          <div className="flex-1 pr-[50px] border-r border-[#dedede]">
            <NewsList type="original" />
          </div>
          <div className="w-[390px]">
            <NewsSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
