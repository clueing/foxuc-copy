import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutBanner from "@/components/about/AboutBanner";
import OperateIntro from "@/components/operate/OperateIntro";
import OperateWhyChoose from "@/components/operate/OperateWhyChoose";
import OperateMethods from "@/components/operate/OperateMethods";
import OperateFlow from "@/components/operate/OperateFlow";
import OperateCases from "@/components/operate/OperateCases";
import OperateQRCode from "@/components/operate/OperateQRCode";

/* 合作运营页面元数据 */
export const metadata = {
  title: "棋牌运营,棋牌游戏运营,网狐游戏家园联运-深圳市网狐科技有限公司",
  description:
    "网狐家园合作介绍了合作运营的平台、合作运营优势、合作运营条件、合作运营需求、合作运营流程等让您能更进一步了解网狐。",
};

/* 合作运营页面 */
export default function OperatePage() {
  return (
    <main className="min-h-screen">
      {/* 固定导航栏 */}
      <Header />

      {/* 横幅区域 */}
      <AboutBanner
        title="诚信为本，精诚合作"
        subtitle="家园合作"
        variant="operate"
      />

      {/* 家园合作介绍 */}
      <OperateIntro />

      {/* 为什么选择网狐 */}
      <OperateWhyChoose />

      {/* 合作方式 */}
      <OperateMethods />

      {/* 合作流程 */}
      <OperateFlow />

      {/* 成功案例 */}
      <OperateCases />

      {/* 二维码区域 */}
      <OperateQRCode />

      {/* 页脚 */}
      <Footer />
    </main>
  );
}
