import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutBanner from "@/components/about/AboutBanner";
import AboutNav from "@/components/about/AboutNav";
import CourseContent from "@/components/about/CourseContent";

/* 发展历程页面 */
export const metadata = {
  title: "网狐历程,棋牌开发，棋牌游戏开发，棋牌游戏开发商-深圳市网狐科技有限公司",
  description:
    "网狐科技自2005年成立以来，一直专注与棋牌游戏的开发与创新，每一年都在进步，都在成长，相信不管在以前还是以后，都会是最好的棋牌游戏开发商。",
};

export default function CoursePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutBanner
        title="18年棋牌游戏服务商"
        subtitle="不忘初心，一路伴行"
        variant="course"
      />
      <AboutNav title="发展历程" />
      <CourseContent />
      <Footer />
    </main>
  );
}
