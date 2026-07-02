import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutBanner from "@/components/about/AboutBanner";
import AboutNav from "@/components/about/AboutNav";
import AboutContent from "@/components/about/AboutContent";

/* 关于我们页面 */
export const metadata = {
  title: "网狐简介,棋牌开发，棋牌游戏开发，棋牌游戏开发商-深圳市网狐科技有限公司",
  description:
    "深圳网狐科技成立于2005年，是一家专业的棋牌游戏开发，制作，出售棋牌游戏的公司，八年的经验，300多个成功案例，足以证明网狐成为全国最大的棋牌游戏开发商。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutBanner
        title="从未停止探索的脚步"
        subtitle="技术自我革新，开辟网狐新纪元"
        variant="about"
      />
      <AboutNav title="关于我们" />
      <AboutContent />
      <Footer />
    </main>
  );
}
