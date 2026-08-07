import { WhatsAppLeadForm } from "@/components/form/WhatsAppLeadForm"
import Section from "../sections/Section"
import Title from "../text/Title"

const BusinessDiagnosticForm = () => (
    <Section>
        <Title>Diagnóstico Empresarial</Title>
        <div className="mx-auto max-w-lg rounded-md border border-primary/15 bg-white p-7 shadow-sm">
            <WhatsAppLeadForm
                context="um diagnóstico empresarial"
                title="Conte sobre a sua empresa"
                description="Nossa equipe recebe as informações pelo WhatsApp para entender o momento do seu negócio."
            />
        </div>
    </Section>
)

export default BusinessDiagnosticForm
