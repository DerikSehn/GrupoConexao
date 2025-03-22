import Image from "next/image";

interface FintechPartnershipsSectionProps {
  data: {
    title: string;
    description: string;
    logos: { src: string; alt: string }[];
  };
}

const FintechPartnershipsSection: React.FC<FintechPartnershipsSectionProps> = ({ data }) => {
  return (
    <section className="relative py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">{data.title}</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          {data.description}
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {data.logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FintechPartnershipsSection;
