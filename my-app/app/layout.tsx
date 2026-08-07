import { Header } from "@/components/Header"
import "./globals.css"
import Script from "next/script"
import Footer from "@/components/Footer"
import type { Metadata } from "next"
import { absoluteUrl, siteUrl } from "@/lib/site"

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: "Grupo Conexão",
      url: siteUrl?.toString(),
      logo: absoluteUrl("/logo.png"),
      description: "Soluções em seguros, assessoria de crédito, crédito consignado e serviços financeiros para empresas.",
      telephone: "+55 51 98172-8039",
      sameAs: ["https://www.instagram.com/grupoconexao_br"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55 51 98172-8039",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Soluções Grupo Conexão",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Seguros",
              description: "Seguros de vida, residencial, automóvel e empresarial.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Assessoria de Crédito",
              description: "Diagnóstico, dossiê de crédito, capital de giro, recebíveis, financiamentos e garantias para pessoas e empresas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Soluções para Pessoa Jurídica",
              description: "Crédito corporativo, capital de giro, cartão corporativo e consultoria empresarial.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Crédito Consignado Público e Privado",
              description: "Crédito consignado para servidores públicos e trabalhadores do setor privado.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: "Grupo Conexão",
      url: siteUrl?.toString(),
      inLanguage: "pt-BR",
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Grupo Conexão | Seguros, Assessoria de Crédito e Soluções Empresariais",
    template: "%s | Grupo Conexão",
  },
  description: "Seguros, assessoria de crédito, crédito consignado e soluções financeiras para empresas. Conte com atendimento consultivo, ágil e humanizado do Grupo Conexão.",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Grupo Conexão",
    title: "Grupo Conexão | Seguros, Assessoria de Crédito e Soluções Empresariais",
    description: "Soluções financeiras e assessoria de crédito para pessoas e empresas, com atendimento consultivo, ágil e humanizado.",
    url: siteUrl ? "/" : undefined,
    images: siteUrl
      ? [{ url: "/images/hero/background-widescreen.png", width: 1920, height: 1080, alt: "Grupo Conexão" }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Conexão | Seguros, Assessoria de Crédito e Soluções Empresariais",
    description: "Soluções financeiras e assessoria de crédito para pessoas e empresas, com atendimento consultivo, ágil e humanizado.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={"font-primary bg-black"}>
        <Header />
        {children}
        <Footer/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" strategy="afterInteractive" />
        {siteUrl && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
        )}
      </body>
    </html>
  )
}

