"use client";
import { products } from '@/data/products';
import { useFormStepper } from '@/hooks/useFormStepper';
import { sendToBusinnessMailDirect } from '@/modules/formMailHandler';
import { ZodProvider } from "@autoform/zod";
import React, { useRef } from 'react';
import { z } from "zod";
import FormSection from '../sections/FormSection';
import { AutoForm } from '../ui/autoform';
import { SubmitButton } from '../ui/autoform/components/SubmitButton';
import CompletionPage from './CompletionPage';

const formLabels = {
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

const step1Schema = z.object({
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

const step2Schema = z.object({
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

const steps = [
  { title: "Primeiro", description: "Preencha os dados" },
  { title: "Final", description: "Após, clique em enviar" },
];

const BusinnessDiagnosticForm: React.FC = () => {
  const { step, nextStep, Stepper } = useFormStepper(steps);
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit(data: Record<string, unknown>) {
     if (step < steps.length) {
      nextStep();
    } else  
      if (formRef.current) {
        await sendToBusinnessMailDirect(formRef.current);
    }
  }

  return (
    <FormSection id="diagnostic-form" title="Formulário de Diagnóstico Empresarial">
      <Stepper currentStep={step} />
      <form ref={formRef}>
        {step === 1 && (
          <AutoForm
            schema={new ZodProvider(step1Schema)}
            onSubmit={handleSubmit}
          >
            <SubmitButton>Próximo</SubmitButton>
            <p className="text-sm text-center mt-2">
              <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Leia nossa política de privacidade
              </a>
            </p>
          </AutoForm>
        )}
        {step === 2 && (
          <AutoForm
            schema={new ZodProvider(step2Schema)}
            onSubmit={handleSubmit}
          >
            <SubmitButton>Enviar</SubmitButton>
            <p className="text-sm text-center mt-2">
              <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Leia nossa política de privacidade
              </a>
            </p>
          </AutoForm>
        )}
        {step === 3 && (
          <CompletionPage 
            heading='Obrigado!'
            subHeading='Seus dados foram enviados com sucesso.'
            items={products.slice(0, 5).map((product) => ({ href: product.href, name: product.title }))}
          />
        )}
      </form>
    </FormSection>
  );
};

export default BusinnessDiagnosticForm;