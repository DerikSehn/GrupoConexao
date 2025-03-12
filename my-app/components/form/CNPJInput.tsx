import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

interface CNPJInputProps {
  id: string;
  name: string;
  required?: boolean;
}

const CNPJInput: React.FC<CNPJInputProps> = ({ id, name, required }) => {
  const [value, setValue] = useState('');


  return (
    <Input
      type="text"
      id={id}
      name={name}
      className="mt-1"
      required={required}
      value={value}
      onChange={(e) => setValue(e.target.value)}
     
    />
  );
};

export default CNPJInput;
