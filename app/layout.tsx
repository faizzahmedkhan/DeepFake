import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./comp/navbar";
import "./globals.css";
import Footer from "./comp/footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
