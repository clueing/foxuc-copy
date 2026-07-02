import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsBanner from "@/components/news/NewsBanner";
import NewsNav from "@/components/news/NewsNav";
import NewsList from "@/components/news/NewsList";
import NewsSidebar from "@/components/news/NewsSidebar";

/* 网狐动态页面 */
export const metadata = {
  title: "公司新闻,棋牌开发，棋牌游戏开发，棋牌游戏开发商-深圳市网狐科技有限公司",
  description:
    "网狐科技的公司新闻将专门介绍网狐的内部新闻，包括新游戏的上线、新有的平台、打麻将的技巧、平台的介绍等等。",
};

export default function QpnewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <NewsBanner
        title="更新 更全 更贴近"
        subtitle="网狐棋牌动态尽在掌握"
        variant="qpnews"
      />
      <NewsNav title="网狐动态" />
      <div className="w-[1200px] mx-auto my-[40px]">
        <div className="flex">
          <div className="flex-1 pr-[50px] border-r border-[#dedede]">
            <NewsList type="qpnews" />
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
