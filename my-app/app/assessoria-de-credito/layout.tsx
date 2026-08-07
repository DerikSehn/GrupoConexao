import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Assessoria de Crédito para Pessoas e Empresas",
  description:
    "Diagnóstico, dossiê de crédito, capital de giro, recebíveis, financiamentos e garantias com assessoria especializada.",
  alternates: siteUrl ? { canonical: "/assessoria-de-credito" } : undefined,
  openGraph: {
    title: "Assessoria de Crédito para Pessoas e Empresas",
    description:
      "Uma estratégia de crédito personalizada para organizar informações e encontrar alternativas adequadas ao seu momento.",
    url: siteUrl ? "/assessoria-de-credito" : undefined,
  },
}

export default function AssessoriaDeCreditoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}