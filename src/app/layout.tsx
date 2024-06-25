import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2024-RitsumeiSai SpecialSite",
  description: "Created by K-Tech (ItoShido, OchiaiMasaya, IshikawaIchiro)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" rel="stylesheet"/>
        
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/icons/site.webmanifest"/>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#81D8D0"/>
        <meta name="msapplication-TileColor" content="#81D8D0"/>
        <meta name="theme-color" content="#81D8D0"/>
      </head>
      <body className={inter.className}>
        <div className="font_custom text-black">
          <Suspense>
            <Header />{children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
