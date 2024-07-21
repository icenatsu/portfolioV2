import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers"
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
import Footer from "@components/Footer";
import Navbar from '@components/Navbar';

const poppins = Poppins({
  weight: ["100", "200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font--poppins",
  fallback: ["Arial", "sans serif"],
  preload: true,
  adjustFontFallback: false,
  display: "swap",
});

const dm_sans = DM_Sans({
  weight: ["100", "200","300","400","500","600","700","800","900", "1000"],
  subsets: ["latin"],
  variable: "--font--dm_sans",
  fallback: ["Arial", "sans serif"],
  preload: true,
  adjustFontFallback: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Bienvenue sur mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body id="home" className={`${poppins.variable}, ${dm_sans.variable}`}>
        <Providers>
        <header>
            <Navbar/>
        </header>
          <main className="flex flex-col nabvar_main_footer-padding">
          {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}