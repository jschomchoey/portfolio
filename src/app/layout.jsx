import { fontSans, fontSerif, fontMono } from "./fonts";
import "../styles/globals.scss";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ThemeProvider from "../components/theme-provider";

export const metadata = {
  title: "T1ramisu",
  description:
    "Bridging beautiful design and powerful performance to create websites that truly matter.",
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
