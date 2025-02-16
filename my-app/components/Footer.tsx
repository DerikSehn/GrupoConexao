export default function Footer() {

    return(  
        <footer className="py-8 px-4 bg-black text-white">
          <div className="container mx-auto flex flex-col items-center gap-4">
            <p>© {new Date().getFullYear().toString()} Grupo Conexão. Todos os direitos reservados.</p>
            <p>Desenvolvido por <a href="https://github.com/DerikSehn" target="_blank" rel="noopener noreferrer" className="underline">Dérik Sehn</a></p>
          </div>
        </footer>
        )
    }
