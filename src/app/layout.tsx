import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AMDE Architects & Engineers",
    template: "%s | AMDE Architects & Engineers",
  },
  description:
    "Leading architecture and engineering firm delivering innovative design and sustainable solutions in Ethiopia and beyond.",
  keywords: [
    "AMDE",
    "Architects",
    "Engineering",
    "Design",
    "Construction",
    "Sustainable architecture",
    "Ethiopia",
  ],
  authors: [
    { name: "AMDE Architects & Engineers", url: "https://amdedesign.com" },
  ],
  creator: "AMDE Architects & Engineers",
  metadataBase: new URL("https://amdedesign.com"),
  openGraph: {
    title: "AMDE Architects & Engineers",
    description:
      "Innovative architecture and engineering solutions for a better tomorrow.",
    url: "https://amdedesign.com",
    siteName: "AMDE Architects & Engineers",
    images: [
      {
        url: "/amd-logo.png",
        width: 1200,
        height: 630,
        alt: "AMDE Architects & Engineers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMDE Architects & Engineers",
    description:
      "Innovative architecture and engineering solutions for a better tomorrow.",
    images: ["/amd-logo.png"], // Replace with your actual image path
    creator: "@amde_arch", // Replace if you have a Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://amdedesign.com",
  },
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
