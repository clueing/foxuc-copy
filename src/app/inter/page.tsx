import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InterBanner from "@/components/inter/InterBanner";
import InterNav from "@/components/inter/InterNav";
import InterOperation from "@/components/inter/InterOperation";
import InterProducts from "@/components/inter/InterProducts";
import InterTrend from "@/components/inter/InterTrend";
import InterCooperation from "@/components/inter/InterCooperation";
import InterAdvantage from "@/components/inter/InterAdvantage";
import InterQrcode from "@/components/inter/InterQrcode";

/* 联运介绍页 */
export const metadata = {
  title: "棋牌出海_海外棋牌联运_海外棋牌定制开发_共享万亿海外棋牌市场",
  description:
    "网狐海外棋牌联运，招募全球合作伙伴。印度、东南亚、北美、欧洲、中东地区棋牌产品联运合作。帮助中小棋牌企业发展国际业务，开辟海外市场。网狐，棋牌出海更专业。",
};

export default function InterPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <InterBanner />
      <InterNav activeTab="intro" />
      <InterOperation />
      <InterProducts />
      <InterTrend />
      <InterCooperation />
      <InterAdvantage />
      <InterQrcode />
      <Footer />
    </main>
  );
}
