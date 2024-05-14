import "./globals.css";
// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Eczar } from "next/font/google";
import { Prata } from "next/font/google";
import React from "react";
import { Navigation } from "@/components/component/navigation";

const eczar = Eczar({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eczar",
});
const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-prata",
  weight: "400",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={eczar.variable + " " + prata.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
