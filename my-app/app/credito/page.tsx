"use client"
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/hero/HeroSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useFormAutoFill } from '@/hooks/useFormAutoFill';
import { sendToBusinnessMail } from '@/modules/formMailHandler';
import { useFormStepper } from '@/modules/useFormStepper';
import { useGsapAnimations } from '@/modules/useGsapAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
 
gsap.registerPlugin(ScrollTrigger);

const Credito: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const form1Ref = useRef<HTMLFormElement>(null);
  const form2Ref = useRef<HTMLFormElement>(null);
  const { step, isSubmitting, setIsSubmitting, nextStep } = useFormStepper();
  
  useGsapAnimations(sectionRefs);

  useFormAutoFill(form1Ref)
  useFormAutoFill(form2Ref)

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <HeroSection 
      imageSrc="/images/products/credito-imobiliario.jpg" 
      title="Crédito e Benefícios" 
      description="Preencha o formulário abaixo para solicitar crédito ou assessoria de benefícios."
       sectionRef={sectionRefs.current[0] as any} />

      {step === 1 && (
        <section ref={(el) => {sectionRefs.current[1] = el}} className="py-12 px-4 bg-gray-200 relative">
          <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary bg-white/50 backdrop-blur-md  p-4 sticky top-0">Diagnóstico Empresarial - 1ª Sessão</h2>
            <form ref={form1Ref} onSubmit={sendToBusinnessMail()} className="space-y-4 mx-auto max-w-prose">
              <div>
                <label htmlFor="recomendante" className="block text-sm font-medium text-gray-700">Nome do Recomendante</label>
                <Input type="text" id="recomendante" name="recomendante" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700">Empresa</label>
                <Input type="text" id="empresa" name="empresa" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">CNPJ da Empresa</label>
                <Input type="text" id="cnpj" name="cnpj" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input type="email" id="email" name="email" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="responsavel" className="block text-sm font-medium text-gray-700">Nome do Responsável Operacional (Financeiro)</label>
                <Input type="text" id="responsavel" name="responsavel" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="celular" className="block text-sm font-medium text-gray-700">Celular (c/ Whatsapp) do Responsável Operacional</label>
                <Input type="text" id="celular" name="celular" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="socio" className="block text-sm font-medium text-gray-700">Nome do Sócio</label>
                <Input type="text" id="socio" name="socio" className="mt-1" />
              </div>
              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF do Sócio</label>
                <Input type="text" id="cpf" name="cpf" className="mt-1" />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <Input type="text" id="telefone" name="telefone" className="mt-1" />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                <Input type="text" id="website" name="website" className="mt-1" />
              </div>
              <div>
                <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">Endereço COMPLETO da Empresa (com CEP)</label>
                <Textarea id="endereco" name="endereco" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="empreendimento" className="block text-sm font-medium text-gray-700">O que é o Empreendimento? Quais produtos/serviços são produzidos/comercializados?</label>
                <Textarea id="empreendimento" name="empreendimento" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="regime" className="block text-sm font-medium text-gray-700">Regime Tributário da empresa</label>
                <select id="regime" name="regime" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" required>
                  <option value="">Selecione</option>
                  <option value="Simples Nacional">Simples Nacional</option>
                  <option value="Lucro Presumido">Lucro Presumido</option>
                  <option value="Lucro Real">Lucro Real</option>
                </select>
              </div>
              <div>
                <label htmlFor="natureza" className="block text-sm font-medium text-gray-700">Natureza jurídica da empresa</label>
                <select id="natureza" name="natureza" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" required>
                  <option value="">Selecione</option>
                  <option value="MEI">MEI</option>
                  <option value="EIRELI">EIRELI</option>
                  <option value="LTDA">LTDA</option>
                  <option value="SA">SA</option>
                </select>
              </div>
              <div>
                <label htmlFor="emprestimo" className="block text-sm font-medium text-gray-700">Já possui empréstimo empresarial?</label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input type="radio" name="emprestimo" value="Sim" className="form-radio" required />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input type="radio" name="emprestimo" value="Não" className="form-radio" required />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="apontamentos" className="block text-sm font-medium text-gray-700">Possui apontamentos?</label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input type="radio" name="apontamentos" value="Sim" className="form-radio" required />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input type="radio" name="apontamentos" value="Não" className="form-radio" required />
                    <span className="ml-2">Não</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input type="radio" name="apontamentos" value="Não sabemos" className="form-radio" required />
                    <span className="ml-2">Não sabemos</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="faturamento_anual" className="block text-sm font-medium text-gray-700">Faturamento anual médio da empresa</label>
                <Input type="text" id="faturamento_anual" name="faturamento_anual" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="faturamento_mensal" className="block text-sm font-medium text-gray-700">Faturamento mensal médio último mês</label>
                <Input type="text" id="faturamento_mensal" name="faturamento_mensal" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="despesa_mensal" className="block text-sm font-medium text-gray-700">Despesa fixa mensal média último mês</label>
                <Input type="text" id="despesa_mensal" name="despesa_mensal" className="mt-1" required />
              </div>
              <div>
                <label htmlFor="garantias" className="block text-sm font-medium text-gray-700">Possui garantias disponíveis?</label>
                <select id="garantias" name="garantias" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" required>
                  <option value="">Selecione</option>
                  <option value="Imóvel">Imóvel</option>
                  <option value="Veículo">Veículo</option>
                  <option value="Boletos">Boletos</option>
                  <option value="Maquininha de cartão">Maquininha de cartão</option>
                </select>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Próximo'}
              </Button>
            </form>
          </div>
        </section>
      )}

      {step === 2 && (
        <section ref={(el) => {sectionRefs.current[2] = el}} className="py-12 px-4 bg-gray-200">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">Diagnóstico Empresarial - 2ª Sessão</h2>
            <form ref={form2Ref} onSubmit={sendToBusinnessMail()} className="space-y-4">
              <div>
                <label htmlFor="interesse_credito" className="block text-sm font-medium text-gray-700">Tem interesse em crédito?</label>
                <select id="interesse_credito" name="interesse_credito" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" required>
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              <div>
                <label htmlFor="opcoes_credito" className="block text-sm font-medium text-gray-700">Quais opções de crédito tem interesse?</label>
                <select id="opcoes_credito" name="opcoes_credito" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" required>
                  <option value="">Selecione</option>
                  <option value="Crédito com Garantia de Imóvel">Crédito com Garantia de Imóvel</option>
                  <option value="Crédito com Garantia de Veículo">Crédito com Garantia de Veículo</option>
                  <option value="Crédito com Garantia em Boletos">Crédito com Garantia em Boletos</option>
                  <option value="Crédito com Garantia em Maquininha de cartão">Crédito com Garantia em Maquininha de cartão</option>
                  <option value="Financiamento de Imóvel">Financiamento de Imóvel</option>
                  <option value="Financiamento de Veículos">Financiamento de Veículos</option>
                  <option value="Crédito de Fomento">Crédito de Fomento</option>
                </select>
              </div>
              <div>
                <label htmlFor="funcionarios" className="block text-sm font-medium text-gray-700">Possui funcionários (CLT ou PJ)?</label>
                <select id="funcionarios" name="funcionarios" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" required>
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              <div>
                <label htmlFor="interesses_beneficios" className="block text-sm font-medium text-gray-700">Quais interesses nas assessorias de Benefícios:</label>
                <select id="interesses_beneficios" name="interesses_beneficios" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" required>
                  <option value="">Selecione</option>
                  <option value="Vale Alimentação/Refeição">Vale Alimentação/Refeição</option>
                  <option value="Consignado Folha">Consignado Folha</option>
                  <option value="Plano de Saúde">Plano de Saúde</option>
                  <option value="Telemedicina">Telemedicina</option>
                  <option value="Medicina Ocupacional">Medicina Ocupacional</option>
                  <option value="Educação Corporativa">Educação Corporativa</option>
                  <option value="Plataforma RH Integrado">Plataforma RH Integrado</option>
                  <option value="Seguro Funcionários/Sócios">Seguro Funcionários/Sócios</option>
                </select>
              </div>
              <div>
                <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">Observações ou Interesses Comerciais Adicionais (Opcional). Descreva abaixo:</label>
                <Textarea id="observacoes" name="observacoes" className="mt-1" />
              </div>
              <div>
                <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">4 + 10 = ?</label>
                <Input type="text" id="captcha" name="captcha" className="mt-1" required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          </div>
        </section>
      )}

      <ContactSection />
    </div>
  );
};

export default Credito;
