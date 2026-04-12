import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plano de Estudos — Java",
  description: "Um plano de estudos completo com Java e Spring Boot, do zero até uma API em produção.",
  openGraph: {
    title: "Plano de Estudos — Java",
    description: "Um plano de estudos completo com Java e Spring Boot, do zero até uma API em produção.",
    images: [{ url: "https://java.walysondev.online/og.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plano de Estudos — Java",
    description: "Um plano de estudos completo com Java e Spring Boot, do zero até uma API em produção.",
    images: ["https://java.walysondev.online/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/cats.webp" as="image" />
        <link rel="preload" href="/ads.png" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
