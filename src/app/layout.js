import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User Profile - CJCG",
  description: "User Profile by Carlos Castro",
  author: "Carlos José Castro Galante",
  copyright: "© 2024 Carlos José Castro Galante. All rights reserved.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="copyright" content={metadata.copyright} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
