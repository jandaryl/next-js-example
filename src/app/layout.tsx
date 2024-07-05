import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.jdapps.online/script.js" data-website-id="bf214a16-95d1-4ed9-adf9-a0557c80cbc2"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
