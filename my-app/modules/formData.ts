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
