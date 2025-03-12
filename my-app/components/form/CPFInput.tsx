import React from 'react';
import { Input } from '@/components/ui/input';

interface CPFInputProps {
  id: string;
  name: string;
  required?: boolean;
}

const CPFInput: React.FC<CPFInputProps> = ({ id, name, required }) => {
  const validateCPF = (value: string) => {
    // Adicione a lógica de validação de CPF aqui
    return true;
  };

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  return (
    <Input
      type="text"
      id={id}
      name={name}
      className="mt-1"
      required={required}
      onBlur={(e) => {
        e.target.value = formatCPF(e.target.value);
        if (!validateCPF(e.target.value)) {
          alert('CPF inválido');
        }
      }}
    />
  );
};

export default CPFInput;
