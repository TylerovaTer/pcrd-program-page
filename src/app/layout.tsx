import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "@/components/typography";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Prague City Roller Derby",
  description: "Prague City Roller Derby program page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>
        <main className={bodyFont.className}>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
