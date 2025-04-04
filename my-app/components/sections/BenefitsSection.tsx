import CTACard from "@/components/cards/CTACard";
import Section from "./Section";

interface BenefitsSectionProps {
  data: {
    title: string;
    products: { title: string; description: string; icon: string }[];
  };
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ data }) => {
  return (
    <Section>

        <h2 className="text-5xl lg:text-7xl font-secondary text-primary mb-4 text-center bg-black/50 border-l-4 border-primary p-4  shadow-sm shadow-primary   backdrop-blur-sm bg-opacity-95">
          {data.title}
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {data.products.map((product) => (
            <CTACard
              content={<span className="mb-10 text-2xl">{product.description}</span>}
              title={product.title}
              key={product.title}
            />
          ))}
        </div>
    </Section>
  );
};

export default BenefitsSection;
