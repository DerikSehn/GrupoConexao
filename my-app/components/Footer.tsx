import Link from "next/link";

export default function Footer() {

    return(  
        <footer className="py-8 px-4 bg-black text-white">
          <div className="container mx-auto flex flex-col items-center gap-4">
            <p>© {new Date().getFullYear().toString()} Grupo Conexão. Todos os direitos reservados.</p>
            <p>Desenvolvido por <Link href="https://api.whatsapp.com/send?phone=5551999300707&text=Ol%C3%A1" target="_blank" rel="noopener noreferrer" className="underline">Dérik Sehn</Link></p>
          </div>
        </footer>
        )
    }
