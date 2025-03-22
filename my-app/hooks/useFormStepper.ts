import { createElement, useState } from 'react';
import Stepper from '@/components/ui/Stepper';

interface UseFormStepperProps {
  step: number;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  nextStep: () => void;
  Stepper: React.FC<{ currentStep: number }>;
}

export const useFormStepper = (steps: { title: string; description: string }[]): UseFormStepperProps => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep(step + 1);

  const StepperComponent: React.FC<{ currentStep: number }> = ({ currentStep }) => (
    createElement(Stepper, { steps, currentStep })
  );

  return { step, isSubmitting, setIsSubmitting, nextStep, Stepper: StepperComponent };
};
