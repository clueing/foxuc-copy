"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { QQIcon, MailIcon } from "@/components/icons";

// 产品数据定义
const products = [
  {
    id: 1,
    title: "至尊版 Supreme",
    image: "/images/product1.png",
    description:
      "网狐U3D至尊平台，博弈海外棋牌市场。全新界面风格，更符海外主流审美；英葡主流双语，出海地区全面覆盖。",
    link: "/product/hw",
  },
  {
    id: 2,
    title: "环球版 Global",
    image: "/images/product2.png",
    description:
      "全新Cocos-Creator引擎，TS语言开发。一套代码，三个终端；平台数据互通，降低运营成本。",
    link: "/product/zy",
  },
  {
    id: 3,
    title: "极速版 Ultra Speed",
    image: "/images/product3.png",
    description:
      "网狐H5极速版，兼容性强，加载轻量，满足快速运营需求。",
    link: "/product/qj",
  },
];

// 产品卡片组件
function ProductCard({
  product,
  className,
}: {
  product: (typeof products)[0];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-[17px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl",
        className
      )}
    >
      {/* 产品图片 */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      {/* 产品信息 */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold text-[#3b3b3b]">
          {product.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#666]">
          {product.description}
        </p>
        <Link
          href={product.link}
          className="inline-flex h-9 items-center justify-center rounded-lg bg-[#e44c40] px-5 text-sm font-medium text-white transition-colors hover:bg-[#d43c30]"
        >
          产品详情
        </Link>
      </div>
    </div>
  );
}

// 产品展示组件
export default function Products({ className }: { className?: string }) {
  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-[1200px] px-4">
        {/* 左右两栏布局 */}
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* 左栏 - 产品展示 (70%) */}
          <div className="flex-1 lg:w-[70%]">
            {/* 标题区域 */}
            <div className="mb-8">
              <h2 className="mb-3 text-[38px] font-bold leading-tight text-[#3b3b3b]">
                网狐棋牌游戏开发
              </h2>
              <p className="text-base text-[#666]">
                网狐推荐三大系列产品，深入挖掘棋牌热点，引领运营趋势
              </p>
            </div>
            {/* 按钮组 - 右对齐 */}
            <div className="mb-8 flex justify-end gap-4">
              <Link
                href="/product/hw"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-[#e44c40] px-6 text-sm font-medium text-[#e44c40] transition-colors hover:bg-[#e44c40] hover:text-white"
              >
                更多平台
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-[#e44c40] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d43c30]"
              >
                购买咨询
              </Link>
            </div>
            {/* 产品卡片网格 */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* 右栏 - 联系方式 (30%) */}
          <div className="lg:w-[30%] lg:pl-8">
            <div className="sticky top-24 rounded-[17px] bg-[#f8f8f8] p-8">
              {/* 右栏标题 */}
              <h2 className="mb-4 text-2xl font-bold text-[#3b3b3b]">
                棋牌开发
              </h2>
              <p className="mb-6 text-sm text-[#666]">
                您可以联系微信客服
                <br />
                或通过电话、QQ、邮件进行咨询
              </p>

              {/* 微信二维码 */}
              <div className="mb-6 flex flex-col items-center">
                <div className="mb-3 overflow-hidden rounded-lg border border-gray-200 bg-white p-2">
                  <Image
                    src="/images/liu-qr.png"
                    alt="微信客服二维码"
                    width={160}
                    height={160}
                    className="h-[160px] w-[160px] object-contain"
                  />
                </div>
                <p className="text-sm text-[#666]">扫码联络微信客服</p>
              </div>

              {/* 联系图标 */}
              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#666] shadow-sm transition-colors hover:bg-[#e44c40] hover:text-white"
                  title="QQ咨询"
                >
                  <QQIcon className="h-6 w-6" />
                </a>
                <a
                  href="mailto:contact@foxuc.com"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#666] shadow-sm transition-colors hover:bg-[#e44c40] hover:text-white"
                  title="邮件咨询"
                >
                  <MailIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
