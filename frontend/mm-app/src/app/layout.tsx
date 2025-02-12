import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/tailwind.css';
import '../styles/font.css'
import '../styles/index.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Market Minds",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
