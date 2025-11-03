import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXIONICS — Discovery de Procesos, Automatización e IA",
  description: "Axionics transforma procesos de negocio con Discovery, Automatización y IA aplicada en Azure y Power Platform para generar valor 360° medible.",
  generator: 'v0.app',
  openGraph: {
    title: 'AXIONICS — Discovery, Automatización e IA',
    description: 'Procesos superiores. Resultados medibles. Discovery → Automatización → IA con ROI.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
