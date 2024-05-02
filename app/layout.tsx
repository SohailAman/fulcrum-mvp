import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "./components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Falcrum^4",
  description:
    "Your Trusted Partner in Navigating the Blockchain Rating Landscape",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FCFCFD]`}>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
