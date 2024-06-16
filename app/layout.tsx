import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/nav";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gage Patenaude | Home",
  description: "Software Engineer portfolio web application for Gage Patenaude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-tech`}>
        <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
        <div className="relative">
          <Navigation />
          <main>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
