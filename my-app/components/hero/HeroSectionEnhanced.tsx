"use client";

import CTAButton from "@/components/button/CTAButton";
import Image from "next/image";
import React from "react";
import CTACard from "../cards/CTACard";
import ClipPathWrapper from "../ClipPathWrapper";
import { clipPaths } from "@/data/clip-paths/clipPaths";

export interface HeroSectionEnhancedProps {
  // Background properties
  backgroundImage?: string;
  backgroundImageAlt?: string;
  
  // Content properties
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  
  // Optional card properties
  card?: {
    title: string;
    content: string;
  };
  
  // Optional hero image
  heroImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  
  // CTA button
  cta?: {
    text: string;
    href: string;
    variant?: "primary" | "secondary" | "gradient";
  };
  
  // Optional height class
  heightClass?: string;
}

const HeroSectionEnhanced: React.FC<HeroSectionEnhancedProps> = ({
  backgroundImage,
  backgroundImageAlt = "Background",
  title,
  subtitle,
  card,
  heroImage,
  cta,
  heightClass = "xl:max-h-[1200px] 2xl:h-screen"
}) => {
  return (
    <section className={`w-full relative ${heightClass} flex items-center  border-primary  shadow-sm shadow-primary py-16 pt-40 md:py-24 xl:pt-40 overflow-hidden bg-black`}>
      {/* Background Image with blur effect */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <Image 
          src={backgroundImage} 
          alt={backgroundImageAlt} 
          fill 
          priority
          quality={80}
          sizes="100vw"
          className="object-cover blur-md brightness-50" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black from-30% to-black/20 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-20% z-0"></div>
        {/* Optional Hero Image */}
        {heroImage && (
          <ClipPathWrapper 
            className="absolute w-1/2 aspect-square z-10 right-0 overflow-hidden"
            id="hero-image"  
            filterId="goo">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill  
              className="object-cover shadow-lg rounded-3xl"
              style={{ clipPath: clipPaths.custom.hero }}
              priority
            />
          </ClipPathWrapper>
        )}
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:pr-6 lg:pr-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className={`w-full ${heroImage ? 'lg:w-1/2' : 'lg:w-3/4 mx-auto text-center'} mb-8 lg:mb-0`}>
            <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-secondary text-white mb-4 drop-shadow-md bg-gradient-to-tr from-primary-400 to-primary-700 bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-100 mb-6 drop-shadow">
              {subtitle}
            </p>
            )}
            
            {/* Optional Card */}
            {card && (
              <CTACard {...card} />
            )}
            
            {/* CTA Button */}
            {cta && (
              <CTAButton 
                text={cta.text}
                href={cta.href}
                className="*:data-button:invisible mt-6"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionEnhanced;
