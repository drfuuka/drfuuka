import "@/styles/global.scss";

import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "DrFuuka Web Profile",
  description: "This is my web profile",
};

export default function RootLayout({
  children,
  works,
}: Readonly<{
  children: React.ReactNode;
  works: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background">
        <Providers>
          <Navbar />
          {works}
          {children}
        </Providers>
      </body>
    </html>
  );
}
