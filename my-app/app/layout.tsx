import { Header } from "@/components/Header"
import "./globals.css"
import Script from "next/script"
import Footer from "@/components/Footer"
export const metadata = {
  title: "Grupo Conexão",
  description: "Conectando Oportunidades, Gerando Resultados",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={"font-primary"}>
        <Header />
        {children}
        <Footer/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

