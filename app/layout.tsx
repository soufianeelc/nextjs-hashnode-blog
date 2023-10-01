import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight as Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "variable" });

export const metadata: Metadata = {
  title: "Soufianeelc | Blog",
  description:
    "A blog template made using Next.js, TailwindCSS, MDX and Hashnode API by @soufianeelc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`container max-w-5xl px-6 mb-12 ${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
