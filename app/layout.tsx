import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "iScottsberg | Engineering Excellence Beyond Integration",
    template: "%s | iScottsberg",
  },

  description:
    "iScottsberg delivers engineering, automation, commissioning, facility integration and digital transformation solutions across Semiconductor, Data Center, Pharmaceutical and Industrial sectors.",

  keywords: [
    "iScottsberg",
    "Engineering Services",
    "Facility Integration",
    "Automation",
    "Commissioning",
    "Digital Transformation",
    "Data Center Engineering",
    "Semiconductor Engineering",
    "Pharmaceutical Engineering",
    "Industrial Automation",
  ],

  authors: [{ name: "iScottsberg" }],

  creator: "iScottsberg",

  metadataBase: new URL("https://iscottsberg.com"),

  openGraph: {
    title: "iScottsberg | Engineering Excellence Beyond Integration",
    description:
      "Global engineering, automation and digital transformation solutions for mission-critical industries.",
    url: "https://iscottsberg.com",
    siteName: "iScottsberg",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "iScottsberg",
    description:
      "Engineering, Automation and Digital Transformation Solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://iscottsberg.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}