import { cn } from "@/lib/utils";

/* 产品页横幅组件 */
interface ProductBannerProps {
  title: string;
  subtitle: string;
  variant: "zz" | "hw" | "gj";
}

const variantConfig = {
  zz: {
    bg: "bg-[url('/images/product/banner-zz.png')] bg-cover bg-top",
    subtitleColor: "text-[#13e7d9]",
    subtitleSize: "text-[32px]",
  },
  hw: {
    bg: "bg-[url('/images/product/banner-hw.png')] bg-cover bg-top",
    subtitleColor: "text-[#87e38f]",
    subtitleSize: "text-2xl",
  },
  gj: {
    bg: "bg-[url('/images/product/banner-gj.png')] bg-cover bg-top",
    subtitleColor: "text-[#dab6ff]",
    subtitleSize: "text-2xl",
  },
};

export default function ProductBanner({
  title,
  subtitle,
  variant,
}: ProductBannerProps) {
  const config = variantConfig[variant];

  return (
    <div className="relative w-full h-[480px] mt-[68px] overflow-hidden min-w-[1250px]">
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 w-[1920px] h-full",
          config.bg
        )}
      >
        <div className="pt-[140px] pl-[460px]">
          <h1 className="text-[58px] font-bold leading-tight text-white">
            {title}
          </h1>
          <p
            className={cn(
              "font-light",
              config.subtitleColor,
              config.subtitleSize
            )}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
