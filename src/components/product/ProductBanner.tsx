import { cn } from "@/lib/utils";

/* 产品页横幅组件 */
interface ProductBannerProps {
  title: string;
  subtitle: string;
  variant: "zz" | "hw" | "gj";
}

const variantStyles = {
  zz: "bg-gradient-to-r from-amber-900 via-amber-700 to-amber-600",
  hw: "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600",
  gj: "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600",
};

export default function ProductBanner({
  title,
  subtitle,
  variant,
}: ProductBannerProps) {
  return (
    <div className="w-full h-[400px] mt-[68px]">
      <div
        className={cn(
          "w-full h-full flex items-center justify-center",
          variantStyles[variant]
        )}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-light mb-4">{title}</h1>
          <p className="text-xl opacity-80">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
