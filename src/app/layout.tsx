import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillMeterMu",
  description: "Uji kemampuan ITmu untuk berkarir!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="bg-gradient-to-r px-8 from-blue-100 to-pink-100">
          {children}
        </main>
      </body>
    </html>
  );
}
