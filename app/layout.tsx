import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });


// ─── Fonts ────────────────────────────────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Zuldan Fahrizal Rahman",
    template: "%s | Zuldan Fahrizal Rahman",
  },
  description:
    "Personal portfolio of Zuldan, an Informatics student and frontend developer passionate about building clean, interactive, and user-friendly web applications.",
  keywords: ["frontend developer", "Next.js", "React", "TypeScript", "portfolio"],
  authors: [{ name: "Zuldan Fahrizal Rahman" }],
  creator: "Zuldan Fahrizal Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Zuldan Fahrizal Rahman",
    description:
      "Personal portfolio of Zuldan, an Informatics student and frontend developer passionate about building clean, interactive, and user-friendly web applications.",
    siteName: "Zuldan Fahrizal Rahman Portfolio",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Zuldan Fahrizal Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuldan Fahrizal Rahman",
    description:
      "Personal portfolio of Zuldan, an Informatics student and frontend developer passionate about building clean, interactive, and user-friendly web applications.",
    images: ["/og/og-default.png"],
  },
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
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", inter.variable, plusJakarta.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-dvh flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
