import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Products from "@/components/Products";
import Overseas from "@/components/Overseas";
import International from "@/components/International";
import WhyChoose from "@/components/WhyChoose";
import News from "@/components/News";
import Cases from "@/components/Cases";
import Partnership from "@/components/Partnership";
import FollowUs from "@/components/FollowUs";
import Footer from "@/components/Footer";

/* 狐狸科技首页 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 固定导航栏 */}
      <Header />

      {/* 英雄轮播横幅 */}
      <HeroCarousel />

      {/* 产品展示区 */}
      <Products />

      {/* 海外联运区 */}
      <Overseas />

      {/* 国际市场优势区 */}
      <International />

      {/* 为什么选择我们 */}
      <WhyChoose />

      {/* 新闻动态区 */}
      <News />

      {/* 案例展示轮播 */}
      <Cases />

      {/* 家园合作区 */}
      <Partnership />

      {/* 关注我们区 */}
      <FollowUs />

      {/* 页脚 */}
      <Footer />
    </main>
  );
}
