import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutBanner from "@/components/about/AboutBanner";
import CaseList from "@/components/case/CaseList";

/* 案例页面元数据 */
export const metadata = {
  title: "成功案例,棋牌游戏开发案例,棋牌平台案例-深圳市网狐科技有限公司",
  description:
    "网狐科技有超过300家运营商的成功案例，证实了网狐棋牌游戏开发的实力以及能力，是全国最稳定，安全，人性化的棋牌游戏平台。",
};

/* 案例页面 */
export default function CasePage() {
  return (
    <main className="min-h-screen">
      {/* 固定导航栏 */}
      <Header />

      {/* 横幅区域 */}
      <AboutBanner
        title="携手发展，互利共赢"
        subtitle="成功案例"
        variant="case"
      />

      {/* 案例内容区域 */}
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <CaseList />
      </div>

      {/* 页脚 */}
      <Footer />
    </main>
  );
}
