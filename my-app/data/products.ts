export interface Product {
  index: number;
  id: string;
  name: string;
  href: string;
  image: string;
  title: string;
  description: string;
  features: string[];
  button?: {
    title: string;
    href: string;
  };
}

export const products: Product[] = [
  {
    index: 0,
    id: "seguros",
    name: "Seguros",
    href: "/#seguros",
    image: '/images/products/seguros.jpg',
    title: "Seguros",
    description: "Proteja o que é importante para você com nossas soluções em seguros, oferecendo tranquilidade e segurança para sua vida e seus bens.",
    features: [
      "Seguros de vida, residencial, automóvel e empresarial",
      "Coberturas personalizadas de acordo com suas necessidades",
      "Processo de contratação simplificado",
      "Suporte ágil em caso de sinistros"
    ]
  },
  {
    index: 1,
    id: "pessoa-juridica",
    name: "Pessoa Jurídica",
    href: "/#pessoa-juridica",
    button: {
        title: "Ver mais",
        href: '/pessoa-juridica'
    },
    image: '/images/products/pessoa-juridica.jpg',
    title: "Soluções para Pessoa Jurídica",
    description: "Oferecemos soluções financeiras completas para empresas de todos os portes, incluindo cartão corporativo, financiamento empresarial e consultoria personalizada.",
    features: [
      "Cartão corporativo sem anuidade",
      "Limite flexível que se adapta ao seu negócio",
      "Gestão financeira centralizada e em tempo real",
      "Consultoria empresarial personalizada",
      "Acesso a linhas de crédito exclusivas",
      "Integração com sistemas de gestão corporativa"
    ]
  },
  {
    index: 2,
    id: "credito-consignado",
    name: "Crédito Consignado Público e Privado",
    href: "#credito-consignado",
    image: '/images/products/consignado-publico-privado.jpg',
    title: "Crédito Consignado Público e Privado",
    description: "Oferecemos as melhores condições de crédito consignado, com taxas atrativas e processo simplificado para servidores públicos e trabalhadores do setor privado.",
    features: [
      "Taxas de juros reduzidas",
      "Prazos estendidos para pagamento",
      "Desconto em folha de pagamento",
      "Atendimento personalizado e análise rápida"
    ]
  },
];