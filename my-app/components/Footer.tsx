import Link from "next/link";

export default function Footer() {

    return(  
        <footer className="py-8 px-4 bg-black text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-bold">Grupo Conexão</p>
              <p className="mt-2 text-center text-sm text-white/70 md:text-left">Seguros, crédito consignado e soluções financeiras para empresas.</p>
              <p>© {new Date().getFullYear().toString()} Todos os direitos reservados.</p>
              <Link href="/privacy-policy" className="underline">Política de Privacidade</Link>
            </div>
            <nav className="flex flex-col items-center md:items-start" aria-label="Soluções Grupo Conexão">
              <p className="text-lg font-bold">Soluções</p>
              <Link href="/#seguros" className="mt-2 hover:text-[#ff8833]">Seguros</Link>
              <Link href="/pessoa-juridica" className="mt-1 hover:text-[#ff8833]">Soluções para Pessoa Jurídica</Link>
              <Link href="/#credito-consignado" className="mt-1 hover:text-[#ff8833]">Crédito Consignado</Link>
            </nav>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-bold">Atendimento</p>
              <p className="mt-2 text-center text-sm text-white/70 md:text-left">Fale com um consultor para encontrar a solução ideal.</p>
              <a href="https://wa.me/5551981728039" target="_blank" rel="noreferrer" className="mt-2 underline hover:text-[#44cf6c]">WhatsApp: (51) 98172-8039</a>
            </div>
           
          </div>
        </footer>
    )
}
