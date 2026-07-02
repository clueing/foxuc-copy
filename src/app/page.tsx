import Header from "@/components/Header";
import HeroCarousel from "@/components/home/HeroCarousel";
import Products from "@/components/home/Products";
import Overseas from "@/components/home/Overseas";
import International from "@/components/home/International";
import WhyChoose from "@/components/home/WhyChoose";
import News from "@/components/home/News";
import Cases from "@/components/home/Cases";
import Partnership from "@/components/home/Partnership";
import FollowUs from "@/components/home/FollowUs";
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
