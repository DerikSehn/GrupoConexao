import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
      {steps.map((step, index) => (
        <li
          key={`${step.title}-${index}`}
          className={cn(
            'flex items-center space-x-2.5 rtl:space-x-reverse',
            index + 1 === currentStep
              ? 'text-blue-600 dark:text-blue-500'
              : 'text-gray-500 dark:text-gray-400'
          )}
        >
          <span
            className={cn(
              'flex items-center justify-center w-8 h-8 border rounded-full shrink-0',
              index + 1 === currentStep
                ? 'border-blue-600 dark:border-blue-500'
                : 'border-gray-500 dark:border-gray-400'
            )}
          >
            {index + 1}
          </span>
          <span>
            <h3 className="font-medium leading-tight">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
