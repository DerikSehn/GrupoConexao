import React from 'react';

interface FormErrorManagerProps {
  error: string;
}

const FormErrorManager: React.FC<FormErrorManagerProps> = ({ error }) => {
   return (
    <div className="text-red-500">
      <p>{error}</p>
    </div>
  );
};

export default FormErrorManager;
