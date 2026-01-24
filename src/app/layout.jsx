import { fontSans, fontSerif, fontMono } from "./fonts";
import "../styles/globals.scss";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

export const metadata = {
  title: "T1ramisu Portfolio",
  description: "A portfolio website showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}
    >
      <body>
        {<Navbar />}
        <main>{children}</main>
        {<Footer />}
      </body>
    </html>
  );
}
