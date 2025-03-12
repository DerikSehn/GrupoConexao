import React from 'react';
import { Input } from '@/components/ui/input';

interface CurrencyInputProps {
  id: string;
  name: string;
  required?: boolean;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ id, name, required }) => {
  const formatCurrency = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.');
  };

  return (
    <div className="relative mt-1">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">R$</span>
      <Input
        type="text"
        id={id}
        name={name}
        className="pl-10"
        required={required}
        onBlur={(e) => {
          e.target.value = formatCurrency(e.target.value);
        }}
      />
    </div>
  );
};

export default CurrencyInput;
