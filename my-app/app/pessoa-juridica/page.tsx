"use client";

import BusinnessDiagnosticForm from "@/components/form/BusinnessDiagnosticForm";
import HeroSectionEnhanced from "@/components/hero/HeroSectionEnhanced";
import BenefitsSection from "@/components/sections/BenefitsSection";
import { pessoaJuridicaData } from "@/data/pessoa-juridica";

const PessoaJuridicaPage: React.FC = () => {
  return (
    <>
      <span className="relative overflow-hidden">
        <HeroSectionEnhanced {...pessoaJuridicaData.hero} />
      </span>
      <BenefitsSection data={pessoaJuridicaData.services} />
    {/*<FintechPartnershipsSection data={pessoaJuridicaData.fintechPartnerships} /> */}
      <BusinnessDiagnosticForm />
    </>
  );
};

export default PessoaJuridicaPage;
