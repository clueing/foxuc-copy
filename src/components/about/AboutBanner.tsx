import { cn } from "@/lib/utils";

/* 关于页横幅组件 */
interface AboutBannerProps {
  title: string;
  subtitle: string;
  variant: "about" | "culture" | "course" | "case" | "operate";
}

const variantConfig = {
  about: {
    bg: "bg-[url('/images/about/banner-about.png')] bg-cover bg-top",
    titleColor: "text-[#222]",
    subtitleColor: "text-[#5a2294]",
  },
  culture: {
    bg: "bg-[url('/images/about/banner-culture.png')] bg-cover bg-top",
    titleColor: "text-white",
    subtitleColor: "text-[#e60000]",
  },
  course: {
    bg: "bg-[url('/images/about/banner-course.png')] bg-cover bg-top",
    titleColor: "text-[#222]",
    subtitleColor: "text-[#ef4ead]",
  },
  case: {
    bg: "bg-[url('/images/contact/banner-contact.png')] bg-cover bg-top",
    titleColor: "text-white",
    subtitleColor: "text-white/80",
  },
  operate: {
    bg: "bg-[url('/images/contact/banner-contact.png')] bg-cover bg-top",
    titleColor: "text-white",
    subtitleColor: "text-white/80",
  },
};

export default function AboutBanner({
  title,
  subtitle,
  variant,
}: AboutBannerProps) {
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
          <h1
            className={cn(
              "text-[58px] font-bold leading-tight",
              config.titleColor
            )}
          >
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
