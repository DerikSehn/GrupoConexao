// src/kommo/services/lead.service.ts
import { Kommo } from '../factory/kommo.factory';
import { Lead, LeadCreate, LeadUpdate } from './types';

export class LeadService {
  private kommoInstance: Kommo;

  constructor() {
    this.kommoInstance = new Kommo();
  }

  async getAllLeads(params?: {
    page?: number;
    limit?: number;
  }): Promise<Lead[]> {
    return this.kommoInstance.get<Lead[]>('/leads', params);
  }

  async getLeadById(id: string): Promise<Lead> {
    return this.kommoInstance.get<Lead>(`/leads/${id}`);
  }

  async createLead(lead: LeadCreate): Promise<Lead> {
    return this.kommoInstance.post<Lead>('/leads', lead);
  }

  async updateLead(id: string, lead: LeadUpdate): Promise<Lead> {
    return this.kommoInstance.put<Lead>(`/leads/${id}`, lead);
  }

  async deleteLead(id: string): Promise<void> {
    await this.kommoInstance.delete<void>(`/leads/${id}`);
  }
}
