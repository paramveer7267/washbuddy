import Navbar from "@/components/Navbar";
import "./globals.css";
import { JSX } from "react";
import Footer from "@/components/Footer";
export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
