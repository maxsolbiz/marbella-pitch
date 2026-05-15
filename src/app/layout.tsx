import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pitch.maxsolbiz.com"),
  title: "Marbella AI — Property Intelligence Platform",
  description:
    "AI-powered real estate platform for Marbella & Costa del Sol. Smart search, investment analytics, and broker tools.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Marbella AI — Property Intelligence Platform",
    description:
      "AI-powered real estate platform for Marbella & Costa del Sol. Smart search, investment analytics, and broker tools.",
    url: "https://pitch.maxsolbiz.com",
    siteName: "Marbella AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marbella AI — Property Intelligence Platform",
    description:
      "AI-powered real estate platform for Marbella & Costa del Sol. Smart search, investment analytics, and broker tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable} h-full antialiased custom-cursor`}
    >
      <head />
      <body className="min-h-full bg-midnight">
        <div id="cursor-dot" />
        <div id="cursor-ring" />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', function(e) {
                var dot = document.getElementById('cursor-dot');
                var ring = document.getElementById('cursor-ring');
                if (dot) { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; }
                if (ring) { ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px'; }
              });
              document.addEventListener('mousedown', function() {
                var dot = document.getElementById('cursor-dot');
                if (dot) { dot.style.width = '6px'; dot.style.height = '6px'; }
              });
              document.addEventListener('mouseup', function() {
                var dot = document.getElementById('cursor-dot');
                if (dot) { dot.style.width = '8px'; dot.style.height = '8px'; }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
