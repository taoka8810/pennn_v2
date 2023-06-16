import { Inter, Pacifico, Shrikhand, Noto_Sans_JP } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

export const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shrikhand",
});

export const notoSansJP = Noto_Sans_JP({
  preload: false,
  display: "swap",
  variable: "--font-noto-sans-jp",
});
