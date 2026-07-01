import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "棋牌开发,棋牌游戏开发,手机棋牌游戏开发,棋牌游戏开发商-深圳市网狐科技有限公司",
  description:
    "深圳市网狐科技有限公司从事棋牌开发,棋牌游戏开发,棋牌游戏开发商,棋牌游戏程序,棋牌游戏源码的职业科技公司，力争成为国际知名棋牌开发,棋牌游戏开发公司，向业界提供优质棋牌游戏产品。",
  keywords:
    "棋牌开发,棋牌游戏开发,棋牌游戏开发商,棋牌游戏程序,手机棋牌游戏开发,棋牌游戏源码,网狐,深圳市网狐科技有限公司",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSansSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
