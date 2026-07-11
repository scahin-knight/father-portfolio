import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "M. Jayakumar | Insurance Leader | Assistant Manager | Business Development Expert",
  description: "Professional portfolio of M. Jayakumar showcasing over 15 years of expertise in insurance leadership, business development, sales management, recruitment, and customer relationship management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased bg-primary text-gray-200`}>
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
