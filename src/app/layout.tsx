import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yashwanth R | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} dark scroll-smooth h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col font-sans text-neutral-400 bg-black selection:bg-emerald-500/30 selection:text-white overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
