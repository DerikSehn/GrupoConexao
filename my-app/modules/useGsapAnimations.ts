import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGsapAnimations = (sectionRefs: { current: React.RefObject<HTMLElement>[] }) => {
  useEffect(() => {
    // Certifique-se de que o array existe
    if (sectionRefs.current) {
      // Iterar pelos refs e animar cada elemento
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }
  }, [sectionRefs]);
};