import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductBanner from "@/components/product/ProductBanner";
import ProductNav from "@/components/product/ProductNav";
import ProductContent from "@/components/product/ProductContent";

/* 极速版产品图片 */
const qjImages = [
  "/images/product/qj/1.png",
  "/images/product/qj/2.png",
  "/images/product/qj/3.png",
  "/images/product/qj/4.png",
  "/images/product/qj/5.png",
  "/images/product/qj/6.png",
];

/* H5极速版产品页 */
export const metadata = {
  title: "网狐U3D平台_网狐国际平台_网狐国际U3D平台",
  description:
    "网狐U3D国际平台，3D立体画面，特效炫酷升级。集经典街机+竞技娱乐之精华，引领国际竞技娱乐新潮流。",
};

export default function ProductQJPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductBanner
        title="H5极速版"
        subtitle="更轻量，更高效的移动平台方案"
        variant="gj"
      />
      <ProductNav />
      <ProductContent images={qjImages} />
      <Footer />
    </main>
  );
}
