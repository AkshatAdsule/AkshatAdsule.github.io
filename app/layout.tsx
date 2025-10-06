import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { Backdrop } from "./_components/backdrop";

const akshatSans = localFont({
  src: "./fonts/AkshatSans.ttf",
  display: "swap",
  variable: "--font-akshat-sans",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Akshat Adsule",
  description: "Motivated student and teacher with strong interests in technology. Student at UC Davis.",
  keywords: ["Akshat Adsule", "UC Davis", "Software Engineer", "Developer", "Student"],
  authors: [{ name: "Akshat Adsule" }],
  openGraph: {
    title: "Akshat Adsule",
    description: "Motivated student and teacher with strong interests in technology. Student at UC Davis.",
    type: "website",
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
      className={`${akshatSans.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="group/spotlight relative">
          <Backdrop />
          {children}
        </div>
      </body>
    </html>
  );
}
