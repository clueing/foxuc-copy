import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductBanner from "@/components/product/ProductBanner";
import ProductNav from "@/components/product/ProductNav";
import ProductContent from "@/components/product/ProductContent";

/* 至尊版产品图片 */
const zzImages = [
  "/images/product/zz/1.png",
  "/images/product/zz/2.png",
  "/images/product/zz/3.png",
  "/images/product/zz/4.png",
  "/images/product/zz/5.png",
  "/images/product/zz/6.png",
  "/images/product/zz/7.png",
  "/images/product/zz/8.png",
];

/* U3D至尊版产品页 */
export const metadata = {
  title: "网狐U3D平台_网狐海外平台_网狐海外U3D平台 - 网狐王者平台",
  description:
    "2020年7月，《网狐王者平台》正式发布。《网狐王者平台》采用Cocos-Creator 引擎开发，开发语言为Typescript。此外，在新平台中，我们实现了热更新功能。",
};

export default function ProductZZPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductBanner
        title="U3D至尊版"
        subtitle="全新框架，精心力作"
        variant="zz"
      />
      <ProductNav />
      <ProductContent images={zzImages} />
      <Footer />
    </main>
  );
}
