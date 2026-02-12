import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Analytics } from "@vercel/analytics/react";
import "./globalv2.css";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
// const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
import Head from "next/head";
import localFont from "next/font/local";
import type { Viewport } from "next";

import { theme } from "@/theme";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "VERdeCINE – Festival Socioambiental de Filmes.",
  description:
    "O VERdeCINE é um Festival Socioambiental de filmes que nasce em Lavras, Minas Gerais, em 2022.",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  userScalable: false,
  maximumScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body id="bm">
        <link rel="stylesheet" href="https://use.typekit.net/yat2spu.css" />
        <MantineProvider forceColorScheme="light" theme={theme}>
          {children}
          <SpeedInsights />
        </MantineProvider>
      </body>
      <Analytics />
    </html>
  );
}
