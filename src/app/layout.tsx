import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/headers/MainHeader";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Yum Map",
  description: "맛집 지도와 레시피",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>
      <body className="flex flex-col items-center h-screen web:min-w-[1440px] mobile:w-screen bg-slate-100">
        <MainHeader />
        <main className="w-full px-4">{children}</main>
      </body>
    </html>
  );
}
