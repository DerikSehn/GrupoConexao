import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Soluções Financeiras para Pessoa Jurídica",
  description: "Crédito corporativo, capital de giro, cartão corporativo, recebíveis e consultoria para empresas de todos os portes.",
  alternates: siteUrl ? { canonical: "/pessoa-juridica" } : undefined,
  openGraph: {
    title: "Soluções Financeiras para Pessoa Jurídica",
    description: "Crédito corporativo, capital de giro, cartão corporativo, recebíveis e consultoria para empresas.",
    url: siteUrl ? "/pessoa-juridica" : undefined,
  },
}

export default function PessoaJuridicaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}