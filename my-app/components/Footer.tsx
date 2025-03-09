import Link from "next/link";

export default function Footer() {

    return(  
        <footer className="py-8 px-4 bg-black text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-bold">Grupo Conexão</p>
              <p>© {new Date().getFullYear().toString()} Todos os direitos reservados.</p>
              <p>Desenvolvido por <Link href="https://api.whatsapp.com/send?phone=5551999300707&text=Ol%C3%A1" target="_blank" rel="noopener noreferrer" className="underline">Dérik Sehn</Link></p>
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
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-bold">Principais pontos</p>
              <ul className="list-disc list-inside">
                <li>Separar a energia do lastro no setor elétrico.</li>
                <li>Permitir que imóveis residenciais e pequenos negócios migrem para o mercado livre.</li>
                <li>Baratear a conta de luz.</li>
                <li>Permitir a portabilidade da conta de luz ao mudar de setor elétrico.</li>
              </ul>
              <p>Considerações:</p>
              <p>O PLP 414/2021 é o antigo PLS 232/2016. O Instituto Brasileiro de Defesa do Consumidor, (Idec)</p>
            </div>
          </div>
        </footer>
    )
}
