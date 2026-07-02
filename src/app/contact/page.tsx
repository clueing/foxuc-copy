import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/contact/ContactBanner";
import ContactConsultant from "@/components/contact/ContactConsultant";
import ContactContent from "@/components/contact/ContactContent";

/* 联系页面 */
export const metadata = {
  title: "联系方式,棋牌开发，棋牌游戏开发，棋牌游戏开发商-深圳市网狐科技有限公司",
  description:
    "网狐科技将有专业的人士为您提供业务质询，还提供了公司地址和行车路线，如需进一步的了解，也可以来公司进行面对面的沟通。400 000 7043.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      <Header />
      <ContactBanner />
      <ContactConsultant />
      <ContactContent />
      <Footer />
    </main>
  );
}
