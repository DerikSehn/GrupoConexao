import React, { useState } from 'react';

interface TabsProps {
  name: string;
  children: React.ReactNode;
}

interface TabProps {
  value: string;
  label: string;
}

export const Tabs: React.FC<TabsProps> = ({ name, children }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<TabProps>(child)) {
          return React.cloneElement(child, {
            name,
            selectedValue,
            setSelectedValue,
          });
        }
        return child;
      })}
    </div>
  );
};

export const Tab: React.FC<TabProps & { name?: string; selectedValue?: string; setSelectedValue?: (value: string) => void; }> = ({
  value,
  label,
  name,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => setSelectedValue && setSelectedValue(value)}
        className="form-radio"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};
