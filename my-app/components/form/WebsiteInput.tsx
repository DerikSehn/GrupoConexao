import React from 'react';
import { Input } from '@/components/ui/input';

interface WebsiteInputProps {
  id: string;
  name: string;
  required?: boolean;
}

const WebsiteInput: React.FC<WebsiteInputProps> = ({ id, name, required }) => {
  const validateWebsite = (value: string) => {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*$/;
    return regex.test(value);
  };

  return (
    <Input
      type="text"
      id={id}
      name={name}
      className="mt-1"
      required={required}
      onBlur={(e) => {
        if (!validateWebsite(e.target.value)) {
          alert('URL inválida');
        }
      }}
    />
  );
};

export default WebsiteInput;
