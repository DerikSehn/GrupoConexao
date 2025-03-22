export const pessoaJuridicaData = {
  hero: {
    backgroundImage: "/images/products/pessoa-juridica.jpg",
    title: "Soluções para Pessoa Jurídica",
    subtitle: "Obtenha crédito corporativo, agilize o fluxo de caixa e ofereça benefícios aos colaboradores.",
    card: {
      title: "Soluções integradas através de um programa personalizado",
      content: "Simplifique o controle de gastos com cartões de crédito corporativos e facilite pagamentos para terceiros. Cartões de crédito ilimitados, físicos e virtuais, sem custos ou anuidade e com limite de crédito que se adapta ao seu negócio."
    },
    heroImage: {
      src: "/images/pessoa-juridica/hero.jpg",
      alt: "Cartão Corporativo"
    },
    cta: {
      text: "Solicitar Cartão",
      href: "#pessoa-juridica-form-section"
    }
  },
  services: {
    title: "Serviços",
    products: [
      { title: "Dossiê de Credito", description: "Bacen + Score Serasa + Rating de Crédito, custo zero ($).", icon: "📊" },
      { title: "Abertura Conta Corrente Digital", description: "PJ e PF", icon: "🏦" },
      { title: "Assessoria Jurídica Empresarial", description: "Especializada para empresas.", icon: "⚖️" },
      { title: "Cartão de Crédito Corporativo Mastercard", description: "Facilidades para sua empresa.", icon: "💳" },
      { title: "Credito Fomento PJ", description: "Para o crescimento da sua empresa.", icon: "📈" },
      { title: "Crédito com Garantia Imóvel", description: "Taxas competitivas.", icon: "🏠" },
      { title: "Crédito Imobiliário", description: "Para investir em imóveis.", icon: "🏢" },
      { title: "Capital de Giro", description: "Para manter o fluxo de caixa.", icon: "💰" },
      { title: "Empréstimo com Garantia Imóvel", description: "Condições especiais.", icon: "🔑" },
      { title: "Financiamentos", description: "Diversas opções de financiamento.", icon: "💸" },
      { title: "Recebíveis", description: "Antecipe seus recebíveis.", icon: "🧾" },
      { title: "Reestruturação Empresarial", description: "Para otimizar sua empresa.", icon: "🛠️" },
    ]
  },
  fintechPartnerships: {
    title: "Parcerias com Fintechs",
    description: "Operamos junto às principais Fintechs para oferecer as melhores soluções financeiras para sua empresa.",
    logos: [
      { src: "/images/fintech/logo1.png", alt: "Fintech 1" },
      { src: "/images/fintech/logo2.png", alt: "Fintech 2" },
      { src: "/images/fintech/logo3.png", alt: "Fintech 3" },
    ]
  },
  form: {
    title: "Solicite seu Cartão Corporativo"
  }
};


import { z } from "zod";

export const generateMockEvent = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    Object.entries(data[key]).forEach(([field, value]) => {
      formData.append(field, value as string);
    });
  });
  const event = {
    currentTarget: {
      ...formData,
      addEventListener: () => {},
      dispatchEvent: () => true,
      removeEventListener: () => {},
    } as unknown as EventTarget & HTMLFormElement
  }
  return event;
}

export const formLabels = {
  step1: {
    recomendante: "Nome do Recomendante",
    empresa: "Empresa",
    cnpj: "CNPJ da Empresa",
    email: "Email",
    responsavel: "Nome do Responsável Operacional",
    celular: "Celular",
    endereco: "Endereço",
    faturamento_anual: "Faturamento Anual",
    faturamento_mensal: "Faturamento Mensal",
    despesa_mensal: "Despesa Mensal",
  },
  step2: {
    interesse_credito: "Interesse em Crédito",
    opcoes_credito: "Opções de Crédito",
    funcionarios: "Funcionários",
    interesses_beneficios: "Interesses em Benefícios",
  },
};

export const step1Schema = z.object({
  recomendante: z.string().nonempty("Nome do Recomendante é obrigatório").describe(formLabels.step1["recomendante"]),
  empresa: z.string().nonempty("Empresa é obrigatório").describe(formLabels.step1["empresa"]),
  cnpj: z.string().nonempty("CNPJ da Empresa é obrigatório").describe(formLabels.step1["cnpj"]),
  email: z.string().email("Email inválido").describe(formLabels.step1["email"]),
  responsavel: z.string().nonempty("Nome do Responsável Operacional é obrigatório").describe(formLabels.step1["responsavel"]),
  celular: z.string().nonempty("Celular é obrigatório").describe(formLabels.step1["celular"]),
  endereco: z.string().nonempty("Endereço é obrigatório").describe(formLabels.step1["endereco"]),
  faturamento_anual: z.string().nonempty("Faturamento anual é obrigatório").describe(formLabels.step1["faturamento_anual"]),
  faturamento_mensal: z.string().nonempty("Faturamento mensal é obrigatório").describe(formLabels.step1["faturamento_mensal"]),
  despesa_mensal: z.string().nonempty("Despesa mensal é obrigatório").describe(formLabels.step1["despesa_mensal"]),
});

export const step2Schema = z.object({
  interesse_credito: z.enum(["Sim", "Não"]).describe(formLabels.step2["interesse_credito"]),
  opcoes_credito: z.enum([
    "Crédito com Garantia de Imóvel",
    "Crédito com Garantia de Veículo",
    "Crédito com Garantia em Boletos",
    "Crédito com Garantia em Maquininha de cartão",
    "Financiamento de Imóvel",
    "Financiamento de Veículos",
    "Crédito de Fomento",
  ]).describe(formLabels.step2["opcoes_credito"]),
  funcionarios: z.enum(["Sim", "Não"]).describe(formLabels.step2["funcionarios"]),
  interesses_beneficios: z.enum([
    "Vale Alimentação/Refeição",
    "Consignado Folha",
    "Plano de Saúde",
    "Telemedicina",
    "Medicina Ocupacional",
    "Educação Corporativa",
    "Plataforma RH Integrado",
    "Seguro Funcionários/Sócios",
  ]).describe(formLabels.step2["interesses_beneficios"]),
});

export const steps = [
  { title: "Primeiro", description: "Preencha os dados" },
  { title: "Final", description: "Após, clique em enviar" },
];

