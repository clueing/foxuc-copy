import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductBanner from "@/components/product/ProductBanner";
import ProductNav from "@/components/product/ProductNav";
import ProductContent from "@/components/product/ProductContent";

/* 环球版产品图片 */
const zyImages = [
  "/images/product/zy/1.png",
  "/images/product/zy/2.png",
  "/images/product/zy/3.png",
  "/images/product/zy/4.png",
  "/images/product/zy/5.png",
  "/images/product/zy/6.png",
];

/* H5环球版产品页 */
export const metadata = {
  title: "网狐卓越_网狐卓越平台_Creator平台_Creator棋牌游戏",
  description:
    "网狐卓越平台采用COCOS-Creator 引擎开发，开发语言为Typescript。客户端的大厅和游戏全部重构，界面UI经过全新设计，游戏画质更加精美。",
};

export default function ProductZYPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductBanner
        title="H5环球版"
        subtitle="面向全球化运营的游戏平台解决方案"
        variant="hw"
      />
      <ProductNav />
      <ProductContent images={zyImages} />
      <Footer />
    </main>
  );
}
