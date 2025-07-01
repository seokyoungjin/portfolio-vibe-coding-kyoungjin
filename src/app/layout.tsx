import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "서경진 | 프론트엔드 개발자",
  description:
    "React, TypeScript, Next.js를 활용한 프론트엔드 개발자 서경진의 포트폴리오입니다.",
  keywords: [
    "프론트엔드",
    "개발자",
    "React",
    "TypeScript",
    "Next.js",
    "포트폴리오",
  ],
  authors: [{ name: "서경진" }],
  creator: "서경진",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://kyoungjin-portfolio.vercel.app",
    title: "서경진 | 프론트엔드 개발자",
    description:
      "React, TypeScript, Next.js를 활용한 프론트엔드 개발자 서경진의 포트폴리오입니다.",
    siteName: "서경진 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "서경진 | 프론트엔드 개발자",
    description:
      "React, TypeScript, Next.js를 활용한 프론트엔드 개발자 서경진의 포트폴리오입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} ${notoSansKR.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
