import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsNav from "@/components/news/NewsNav";
import NewsDetailContent from "@/components/news/NewsDetailContent";
import NewsSidebar from "@/components/news/NewsSidebar";

/* 新闻详情页面 - 所有文章暂时使用相同内容 */
export const metadata = {
  title: "网狐卓越Creator平台全新上市：做市场认可的创新型棋牌-深圳市网狐科技有限公司",
};

export default function NewsDetailPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* 空白横幅区域 */}
      <div className="relative w-full h-[480px] overflow-hidden min-w-[1250px] bg-gradient-to-r from-gray-800 to-gray-600">
        <div className="pt-[140px] pl-[460px]">
          <h1 className="text-[58px] font-bold leading-tight text-white opacity-0">
            -
          </h1>
        </div>
      </div>
      <NewsNav title="网狐动态" />
      <div className="w-[1200px] mx-auto my-[40px]">
        <div className="flex">
          <div className="flex-1 pr-[50px]">
            <NewsDetailContent />
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
