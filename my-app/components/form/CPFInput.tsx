import React from 'react';
import { Input } from '@/components/ui/input';

interface CPFInputProps {
  id: string;
  name: string;
  required?: boolean;
}

const CPFInput: React.FC<CPFInputProps> = ({ id, name, required }) => {
 

  // const formatCPF = (value: string): string => {
  //   return value
  //     .replace(/\D/g, '')
  //     .replace(/(\d{3})(\d)/, '$1.$2')
  //     .replace(/(\d{3})(\d)/, '$1.$2')
  //     .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  // };

  return (
    <Input
      type="text"
      id={id}
      name={name}
      className="mt-1"
      required={required}
    
    />
  );
};

export default CPFInput;
