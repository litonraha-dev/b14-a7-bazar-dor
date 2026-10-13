import type { Metadata } from "next";
import { Geist, Geist_Mono,Hind_Siliguri } from "next/font/google";
import "./globals.css";

import NavLinks from "@/components/NavLinks";

import { Suspense } from "react";
import Marquee from "@/components/Marquee";




const hindSiliguri = Hind_Siliguri({
  subsets: ["latin","bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
     {/* <Header></Header> */}
     
       <Suspense fallback={<h1>Loading....</h1>}> <NavLinks/></Suspense>
       <Suspense fallback={ <h1>বাজারদর লোড হচ্ছে ......</h1> }>   <Marquee /></Suspense>
     
       <main>
         {children}
       </main>
        
        
        </body>
    </html>
  );
}
