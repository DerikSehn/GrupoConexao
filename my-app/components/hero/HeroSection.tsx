import Image from "next/image";
import { RefObject } from "react";

interface SectionProps {
  imageSrc: string;
  title: string;
  description: string;
  sectionRef?: RefObject<HTMLElement>;
}

export default function HeroSection({ imageSrc, title, description, sectionRef }: SectionProps) {
  return (
    <section ref={sectionRef} className="relative py-12 px-4 text-white bg-black">
      <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="blur-sm z-0 brightness-50" />
      <div className="relative z-10 container mx-auto text-center justify-center min-h-[500px] content-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8 max-w-prose mx-auto font-secondary">
          {description}
        </p>
      </div>
    </section>
  );
};
