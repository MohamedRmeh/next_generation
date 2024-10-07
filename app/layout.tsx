import type { Metadata } from "next";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next Generation",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
        <Navbar />
        <main className="relative overflow-hidden flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}