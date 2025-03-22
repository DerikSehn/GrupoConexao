import Link from "next/link";

export default function Footer() {

    return(  
        <footer className="py-8 px-4 bg-black text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-bold">Grupo Conexão</p>
              <p>© {new Date().getFullYear().toString()} Todos os direitos reservados.</p>
              <p>Desenvolvido por <Link href="https://api.whatsapp.com/send?phone=5551999300707&text=Ol%C3%A1" target="_blank" rel="noopener noreferrer" className="underline">Dérik Sehn</Link></p>
              <Link href="/privacy-policy" className="underline">Política de Privacidade</Link>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-bold">Informações</p>
              <p>O Projeto de Lei Complementar (PLP) 414/2021 visa modernizar o setor elétrico brasileiro.</p>
              <ul className="list-disc list-inside">
                <li>O projeto propõe a ampliação do mercado livre de energia e a portabilidade da conta de luz.</li>
                <li>Objetivos Modernizar o marco regulatório do setor elétrico.</li>
                <li>Ampliar o mercado livre de energia.</li>
                <li>Estabelecer a portabilidade da conta de luz.</li>
                <li>Aprimorar o modelo regulatório e comercial do setor elétrico.</li>
              </ul>
            </div>
           
          </div>
        </footer>
    )
}
