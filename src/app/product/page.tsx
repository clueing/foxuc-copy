import { redirect } from "next/navigation";

/* 产品页 - 重定向到至尊版 */
export default function ProductPage() {
  redirect("/product/hw");
}
