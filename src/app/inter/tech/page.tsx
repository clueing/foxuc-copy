import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechBanner from "@/components/inter/TechBanner";
import TechNav from "@/components/inter/TechNav";
import TechSection from "@/components/inter/TechSection";
import TechProcess from "@/components/inter/TechProcess";

/* 技术服务页数据 */
const sections = [
  {
    title: "海量游戏资源",
    englishTitle: "Massive game resources",
    description:
      "欧美、东南亚、中东、印度......网狐研发的个海外游戏遍及全球。只要你有海外资源，总有一款适合你！",
    image: "/images/inter/support.png",
    imagePosition: "left" as const,
  },
  {
    title: "专属平台定制",
    englishTitle: "Customized platform",
    description:
      "网狐将为您定制专属海外手游平台，开发符合当地审美风格，本土化的产品。",
    image: "/images/inter/platform.png",
    imagePosition: "right" as const,
  },
  {
    title: "百人技术团队",
    englishTitle: "The technical team of hundred persons",
    description:
      "国内首家海外休闲手游联运CP，多国本土化游戏产品开发经验，行业架构典范，开发技术市场领先。",
    image: "/images/inter/team.png",
    imagePosition: "left" as const,
  },
  {
    title: "免费上架服务",
    englishTitle: "Free listing service",
    description:
      "免费上架APP Store、Google Play,技术相关，完全不需要您操心，网狐全程免费服务。",
    image: "/images/inter/service.png",
    imagePosition: "right" as const,
  },
  {
    title: "顶级运维支持",
    englishTitle: "Top level operations support",
    description:
      "7*24小时运维服务，随时随地解决您中运营中遇到的技术问题。让运营无后顾之忧。",
    image: "/images/inter/operations.png",
    imagePosition: "left" as const,
  },
  {
    title: "资讯资源共享",
    englishTitle: "Information resource sharing",
    description:
      "网狐用有行业最大的休闲手游出海社群，对接各类海外资源，联运伙伴能获取最新海外市场资讯及资源。",
    image: "/images/inter/resource.png",
    imagePosition: "right" as const,
  },
];

/* 技术服务页 */
export const metadata = {
  title: "Slots游戏开发_海外棋牌游戏开发_海外棋牌游戏联运",
  description:
    "网狐科技专注海外棋牌游戏本土化开发，现面向全球招募海外棋牌手游联运伙伴，网狐负责技术产品，联运伙伴负责具体运营。Slots游戏开发，海外棋牌开发，海外棋牌联运，网狐更专业。",
};

export default function TechPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TechBanner />
      <TechNav activeTab="tech" />
      {sections.map((section, i) => (
        <TechSection
          key={section.title}
          {...section}
          bgColor={i % 2 === 0 ? "white" : "gray"}
        />
      ))}
      <TechProcess />
      <Footer />
    </main>
  );
}
