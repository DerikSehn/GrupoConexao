"use server"
import { LeadService } from "@/modules/kommo/services/lead.service";

// Inicialização do serviço do Kommo
const leadService = new LeadService();

// Lista de campos que serão enviados para o Kommo
const fields = [
    "recomendante",
    "cnpj",
    "email",
    "responsavel",
    "celular",
    "endereco",
    "faturamento_anual",
    "faturamento_mensal",
    "despesa_mensal",
    "interesse_credito",
    "opcoes_credito",
    "funcionarios",
    "interesses_beneficios",
] as const;



// Tipagem para os dados do formulário
type FormData = Record<typeof fields[number], string>;

export  async function createLeadAndMoveStage(data: FormData) {
    try {
        const leadData = {
            name: data.recomendante,
            email: data.email,
            phone: data.celular,
            custom_fields: Object.entries(data).map(([key, value]) => ({
                field_id: key,
                values: [{ value }],
            })
            ),
            // Mapeie outros campos conforme necessário
        };
        
        const response = await leadService.createLead(leadData);
        return response;
    } catch (error) {
        console.error('Erro ao criar lead:', error);
        throw new Error('Falha ao enviar formulário. Por favor, verifique os dados.');
    }
}

