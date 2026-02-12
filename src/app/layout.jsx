import { fontSans, fontSerif, fontMono } from "./fonts";
import "../styles/globals.scss";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ThemeProvider from "../components/providers/ThemeProvider";

export const metadata = {
  metadataBase: new URL("https://t1ramisu.dev"),
  title: {
    default: "T1ramisu",
    template: "%s | T1ramisu",
  },
  description:
    "Bridging beautiful design and powerful performance to create websites that truly matter.",
  openGraph: {
    title: "T1ramisu",
    description:
      "Bridging beautiful design and powerful performance to create websites that truly matter.",
    url: "https://t1ramisu.dev",
    siteName: "T1ramisu",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "T1ramisu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "T1ramisu",
    description:
      "Bridging beautiful design and powerful performance to create websites that truly matter.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {<Navbar />}
          <main>{children}</main>
          {<Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
