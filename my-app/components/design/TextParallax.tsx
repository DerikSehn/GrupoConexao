'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface SlideProps {
  images: { src: string }[];
  direction: 'left' | 'right';
}

const Slide: React.FC<SlideProps> = ({ images, direction }) => {
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = slideRef.current;
    const directionMultiplier = direction === 'left' ? -1 : 1;

    gsap.fromTo(
      element,
      { x: 150 * directionMultiplier },
      {
        x: -350 * directionMultiplier,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, [direction]);

  return (
    <div ref={slideRef} className="relative flex whitespace-nowrap">
      {images.map((image, index) => (
        <Item key={index} src={image.src} />
      ))}
      {images.map((image, index) => (
        <Item key={index + images.length} src={image.src} />
      ))}
    </div>
  );
};

const Item: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
    </div>
  );
};

const TextParallax: React.FC<{ className?: string, images: { src: string }[] }> = ({ images, className }) => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <main className={cn("overflow-hidden", className)}>
      <div ref={container}>
        <div className="relative">
          <Slide images={images} direction="right" />
        </div>
        <div className="relative">
          <Slide images={images} direction="left" />
        </div>
      </div>
    </main>
  );
};

export default TextParallax;
