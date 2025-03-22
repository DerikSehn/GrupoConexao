import React from 'react';
import { Input } from '@/components/ui/input';

interface PhoneInputProps {
  id: string;
  name: string;
  required?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ id, name, required }) => {
  const formatPhone = (value: string): string => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  };

  return (
    <Input
      type="text"
      id={id}
      name={name}
      className="mt-1"
      required={required}
      onBlur={(e) => {
        e.target.value = formatPhone(e.target.value);
      }}
    />
  );
};

export default PhoneInput;
