import type { Metadata } from "next";
import {
  Geist,
  Azeret_Mono as Geist_Mono,
  Inter,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BodyAttributes from "../components/body-attributes";
import RootProvider from "./providers/root-provider";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "UPT Project | Innovative Solutions",
    template: "%s | UPT Project",
  },
  description:
    "UPT Project offers innovative solutions for modern businesses. Explore our services and transform your digital presence.",
  keywords: [
    "UPT Project",
    "innovative solutions",
    "digital transformation",
    "business technology",
  ],
  authors: [{ name: "UPT project" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/icons/logo.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.uptproject.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} antialiased `}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
