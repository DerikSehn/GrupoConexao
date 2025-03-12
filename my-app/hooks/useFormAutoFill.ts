import { useEffect } from 'react';

export const useFormAutoFill = (formRef: React.RefObject<HTMLFormElement>) => {
  useEffect(() => {
    if (formRef.current) {
      const params = new URLSearchParams(window.location.search);
      params.forEach((value, key) => {
        const input = formRef.current!.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        if (input) {
          input.value = value;
        }
      });
    }
  }, [formRef]);
};
