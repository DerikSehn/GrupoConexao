import React from 'react';
import { Metadata } from 'next';
import PrivacyPolicyHeroSection from '@/components/sections/PrivacyPolicyHeroSection';
import PrivacyPolicyContentSection from '@/components/sections/PrivacyPolicyContentSection';
import { privacyPolicyData } from '@/data/privacy-policy';

// Define metadata for the Privacy Policy page
export const metadata: Metadata = {
  title: 'Política de Privacidade - Grupo Conexão',
  description: 'Leia nossa política de privacidade para entender como protegemos seus dados pessoais.',
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <PrivacyPolicyHeroSection data={privacyPolicyData.hero} />
      <PrivacyPolicyContentSection data={privacyPolicyData.content} />
    </>
  );
};

export default PrivacyPolicyPage;
