import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutBanner from "@/components/about/AboutBanner";
import AboutNav from "@/components/about/AboutNav";
import CultureContent from "@/components/about/CultureContent";

/* 企业文化页面 */
export const metadata = {
  title: "网狐文化,棋牌开发，棋牌游戏开发，棋牌游戏开发商-深圳市网狐科技有限公司",
  description:
    "深圳网狐凭借'以精为业，以质取胜'的理念一直在业界受到好评，是一家不管在产品还是服务上面都是在全国最好棋牌游戏开发商。",
};

export default function CulturePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutBanner
        title="以精为业 以质取胜"
        subtitle="合作共赢，携手同行"
        variant="culture"
      />
      <AboutNav title="企业文化" />
      <CultureContent />
      <Footer />
    </main>
  );
}
