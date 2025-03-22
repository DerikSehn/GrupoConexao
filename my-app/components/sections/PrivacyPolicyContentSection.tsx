interface PrivacyPolicyContentSectionProps {
  data: {
    companyName: string;
    cnpj: string;
    address: string;
    email: string;
    lastUpdate: string;
    sections: { title: string; content: string }[];
  };
}

const PrivacyPolicyContentSection: React.FC<PrivacyPolicyContentSectionProps> = ({ data }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <p className="mb-4">
          A {data.companyName}, inscrita no CNPJ sob o nº {data.cnpj}, com sede em {data.address}, leva a sua privacidade a sério e se compromete a proteger os dados pessoais que você nos fornece.
        </p>

        {data.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}

        <p>Data da última atualização: {data.lastUpdate}</p>
        <p>Se você tiver alguma dúvida, entre em contato conosco através do e-mail: {data.email}</p>
      </div>
    </section>
  );
};

export default PrivacyPolicyContentSection;
