import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Luis-Ruiz",
  description: "Full-Stack Developer, AI Enthusiast, and Tech-Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
