export interface Member {
  image: string;
  name: string;
  description: string;
  email: string;
  phone: string;
}

export const teamMembers: Member[] = [
  {
    name: 'Sandro Marques',
    image: '/images/sandro.png',
    email: 'sandro.marques@conexao-suc.com.br',
    phone: '(51) 98172 8039',
    description: 'Diretor Executivo com vasta experiência em liderança e gestão de equipes.',
  },
  {
    name: 'Dérik Sehn',
    image: '/images/derik.jpeg',
    email: 'derikbosing@gmail.com',
    phone: '(51) 99930-0707',
    description: 'Desenvolvedor Especialista em TI.',
  },
  {
    name: 'Leandro Duarte',
    image: '/images/leandro.jpeg',
    email: 'leandro.duarte@conexao-suc.com.br',
    phone: '(51) 98484-0902',
    description: 'Diretor comercial e estrategista, com vasta experiência em técnicas de vendas inovadoras e negociação de parcerias sólidas',
  },
  {
    name: 'Diego Cividini',
    image: '/images/diego.jpeg',
    email: 'diego.cividini@gmail.com',
    phone: '(51) 8275-5185',
    description: 'Estrategista de tráfego pago, empreendedor e consultor de negócios, com mais de 15 anos de experiência em estratégia, planejamento e gestão.',
  },
];

