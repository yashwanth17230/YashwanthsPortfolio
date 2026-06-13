import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import SplashCursor from "@/components/SplashCursor";
import GlobalProtections from "@/components/GlobalProtections";
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
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={7}
          SHADING={true}
          RAINBOW_MODE={false}
          COLOR="#A855F7"
        />
        <GlobalProtections />
        {children}
      </body>
    </html>
  );
}
