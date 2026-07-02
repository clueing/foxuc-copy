import { cn } from "@/lib/utils";

/* 新闻横幅组件 */
interface NewsBannerProps {
  title: string;
  subtitle: string;
  variant: "original" | "qpnews";
}

const variantConfig = {
  original: {
    bg: "bg-[url('/images/news/banner/banner_original.png')] bg-cover bg-top",
    subtitleColor: "text-[#55d5ff]",
  },
  qpnews: {
    bg: "bg-[url('/images/news/banner/banner_qpnews.png')] bg-cover bg-top",
    subtitleColor: "text-[#ffb7bf]",
  },
};

export default function NewsBanner({
  title,
  subtitle,
  variant,
}: NewsBannerProps) {
  const config = variantConfig[variant];

  return (
    <div className="relative w-full h-[480px] overflow-hidden min-w-[1250px]">
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
          <p className={cn("text-[32px] font-light", config.subtitleColor)}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
