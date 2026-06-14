import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bruno Fukumori | Engenheiro de Software",
  description:
    "Portfólio especializado em arquiteturas escaláveis, ecossistema TypeScript e Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} antialiased bg-zinc-950`}
    >
      <body>{children}</body>
    </html>
  );
}
