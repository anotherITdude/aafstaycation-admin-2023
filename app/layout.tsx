import "./globals.css";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin - Alain Farms | Back to school, 2023",
  description: "Admin - Alain Farms, back to school campaign, 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="icon" href="/favicon.png" />
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
