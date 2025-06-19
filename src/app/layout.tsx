import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from './context/LanguageContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saulo Gabriel | Analista de TI & Analista de Negócios",
  description: "Portfolio de Saulo Gabriel - Analista de TI & Analista de Negócios com experiência em análise de sistemas, infraestrutura, automação e transformação digital.",
  keywords: [
    "Analista de TI",
    "Analista de Negócios",
    "Análise de Sistemas",
    "Infraestrutura",
    "Automação",
    "Cloud",
    "Portfolio"
  ],
  authors: [{ name: "Saulo Gabriel Rodrigues de Moraes" }],
  creator: "Saulo Gabriel Rodrigues de Moraes",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-dominio.com",
    title: "Saulo Gabriel | Analista de TI & Analista de Negócios",
    description: "Portfolio de Saulo Gabriel - Analista de TI & Analista de Negócios com experiência em análise de sistemas, infraestrutura, automação e transformação digital.",
    siteName: "Portfolio - Saulo Gabriel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saulo Gabriel | Analista de TI & Analista de Negócios",
    description: "Portfolio de Saulo Gabriel - Analista de TI & Analista de Negócios com experiência em análise de sistemas, infraestrutura, automação e transformação digital.",
    creator: "@seu-usuario",
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
  icons: {
    icon: "/icons/icon-192x192.png",
    shortcut: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
