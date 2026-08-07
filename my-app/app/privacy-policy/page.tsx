import React from 'react';
import { Metadata } from 'next';
import PrivacyPolicyHeroSection from '@/components/sections/PrivacyPolicyHeroSection';
import PrivacyPolicyContentSection from '@/components/sections/PrivacyPolicyContentSection';
import { privacyPolicyData } from '@/data/privacy-policy';
import { siteUrl } from '@/lib/site';

// Define metadata for the Privacy Policy page
export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Leia nossa política de privacidade para entender como protegemos seus dados pessoais.',
  alternates: siteUrl ? { canonical: '/privacy-policy' } : undefined,
  robots: {
    index: true,
    follow: true,
  },
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
