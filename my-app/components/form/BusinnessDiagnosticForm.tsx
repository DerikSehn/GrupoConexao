"use client";
import { products } from '@/data/products';
import { useFormStepper } from '@/hooks/useFormStepper';
import { ZodProvider } from "@autoform/zod";
import React, { useState } from 'react';
import { z } from "zod";
import FormSection from '../sections/FormSection';
import { AutoForm } from '../ui/autoform';
import { SubmitButton } from '../ui/autoform/components/SubmitButton';
import CompletionPage from './CompletionPage';
import { createLeadAndMoveStage } from '@/app/actions/kommoActions';
import Script from 'next/script';
import { Button } from '../ui/button';
import CTAButton from '../button/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Title from '../text/Title';
import CTACard from '../cards/CTACard';
import Section from '../sections/Section';
 
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

const defaultValues = {
    step1: {
        recomendante: "João da Silva",
        empresa: "Empresa Exemplo",
        cnpj: "12345678901234",
        email: "joao.silva@example.com",
        responsavel: "Maria Oliveira",
        celular: "(11) 98765-4321",
        endereco: "Rua Exemplo, 123, São Paulo - SP",
        faturamento_anual: "5000000",
        faturamento_mensal: "416666",
        despesa_mensal: "200000",
    },
};

const steps = [
    { title: "Primeiro", description: "Preencha os dados" },
    { title: "Final", description: "Após, clique em enviar" },
    { title: "Concluído", description: "Obrigado!" },
];

const BusinnessDiagnosticForm: React.FC = () => {
    const { step, nextStep, Stepper } = useFormStepper(steps);
    const [formData, setFormData] = useState({});

    async function handleSubmit(data: any) {
        if (step < steps.length - 1) {
            setFormData(prev => ({
                ...prev,
                ...data,
            }));
            nextStep();
        } else {
            try {
                await createLeadAndMoveStage({
                    ...formData,
                    ...data,
                });
                nextStep();
            } catch (error) {
                console.error("Erro ao criar lead:", error);
                alert("Erro ao enviar formulário. Por favor, verifique os dados e tente novamente.");
            }
        }
    }

    return (
       <Section>   <Title >
                Diagnóstico Empresarial
            </Title>
            <CTACard
            className='container'
                title="Preencha o formulário para um diagnóstico empresarial completo" 
                content={
                    <CTAButton
                       text='Preencher formulário'
                       variant='primary'
                       href={"https://forms.kommo.com/rddwzrw"}
                       />  
                }
            >
            </CTACard>
    </Section>
    );
};

export default BusinnessDiagnosticForm;
