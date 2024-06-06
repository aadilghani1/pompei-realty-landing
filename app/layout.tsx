import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pompei Realty",
  description:
    "Pompei Realty provides fully furnished apartments for expats in the heart of Rome.",
  keywords: "rome, expat, housing, apartment, furnished, italy",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(poppins.className, "text-secondary")}>
        {children}
      </body>
    </html>
  );
}
