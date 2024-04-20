"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from 'sonner'


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Toaster richColors position="top-right"/>
      </body>
    </html>
  );
}
