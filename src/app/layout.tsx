import type { Metadata } from "next";
import "./globals.css";

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
      <body className="flex flex-col items-center h-screen web:min-w-[1440px] mobile:w-screen bg-slate-100">
        <main className="w-full px-4">{children}</main>
      </body>
    </html>
  );
}
