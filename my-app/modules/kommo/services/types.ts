// src/kommo/services/types.ts
export type Lead = {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: string;
    created_at: string;
    updated_at: string;
  };
  
  export type LeadCreate = {
    name: string;
    email?: string;
    phone?: string;
    status?: string;
  };
  
  export type LeadUpdate = Partial<LeadCreate>;
  