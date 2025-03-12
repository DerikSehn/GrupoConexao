import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

interface CNPJInputProps {
  id: string;
  name: string;
  required?: boolean;
}

const CNPJInput: React.FC<CNPJInputProps> = ({ id, name, required }) => {
  const [value, setValue] = useState('');

  const validateCNPJ = (value: string): boolean => {
    // Adicione a lógica de validação de CNPJ aqui
    return true;
  };

  const formatCNPJ = (value: string): string => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  };

  return (
    <Input
      type="text"
      id={id}
      name={name}
      className="mt-1"
      required={required}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        const formattedValue = formatCNPJ(value);
        setValue(formattedValue);
        if (!validateCNPJ(formattedValue)) {
          alert('CNPJ inválido');
        }
      }}
    />
  );
};

export default CNPJInput;
