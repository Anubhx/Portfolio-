import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anubhavportfolio.vercel.app"),
  title: {
    default: "Anubhav Raj UI/UX Designer",
    template: "%s | Anubhav Raj",
  },
  description:
    "UX Designer, Design Engineer, and Agentic Builder at LTI Mindtree. I turn messy problems into products people actually use.",
  keywords: [
    "UX Designer",
    "Design Engineer",
    "Product Designer",
    "React",
    "TypeScript",
    "Accessibility",
    "LTI Mindtree",
    "Anubhav Raj",
  ],
  authors: [{ name: "Anubhav Raj" }],
  creator: "Anubhav Raj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anubhavportfolio.vercel.app",
    title: "Anubhav Raj — UX Designer & Design Engineer",
    description:
      "UX Designer, Design Engineer, and Agentic Builder at LTI Mindtree. I turn messy problems into products people actually use.",
    siteName: "Anubhav Raj",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anubhav Raj — UX Designer & Design Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anubhav Raj — UX Designer & Design Engineer",
    description:
      "UX Designer, Design Engineer, and Agentic Builder at LTI Mindtree.",
    creator: "@anubhavRaj0",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <meta name="theme-color" content="#080808" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LenisProvider>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
