import React from 'react';
import HeroSectionEnhanced, { HeroSectionEnhancedProps } from '@/components/hero/HeroSectionEnhanced';

interface PrivacyPolicyHeroSectionProps {
  data: HeroSectionEnhancedProps;
}

const PrivacyPolicyHeroSection: React.FC<PrivacyPolicyHeroSectionProps> = ({ data }) => {
  return <HeroSectionEnhanced {...data} />;
};

export default PrivacyPolicyHeroSection;
