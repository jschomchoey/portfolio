import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/LineSeedSansTH/LINESeedSansTH_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/LineSeedSansTH/LINESeedSansTH_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LineSeedSansTH/LINESeedSansTH_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/LineSeedSansTH/LINESeedSansTH_He.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const fontSerif = localFont({
  src: [
    {
      path: "../../public/fonts/GoogleSans/GoogleSans_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GoogleSans/GoogleSans_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const fontMono = localFont({
  src: [
    {
      path: "../../public/fonts/JetBrainsMono/JetBrainsMono_Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono/JetBrainsMono_Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono/JetBrainsMono_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono/JetBrainsMono_ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});
