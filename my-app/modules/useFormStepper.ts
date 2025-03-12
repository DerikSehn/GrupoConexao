import { useState } from 'react';

export const useFormStepper = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep(step + 1);

  return { step, isSubmitting, setIsSubmitting, nextStep };
};
