import type { Metadata } from "next";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: "M. Jayakumar | Insurance Sales & Team Leadership | Assistant Manager",
  description: "Professional portfolio of M. Jayakumar (B.B.A.) showcasing over 14+ years in insurance leadership, advisor recruitment, sales management, and 19+ years in production operations.",
  keywords: ["M. Jayakumar", "Insurance Leader", "Assistant Manager", "Aditya Birla Sun Life Insurance", "Pollachi", "Insurance Sales", "Team Leadership"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-primary text-gray-200">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
