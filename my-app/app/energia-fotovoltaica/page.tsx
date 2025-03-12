"use client"
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/hero/HeroSection';
import { Button } from '@/components/ui/button';
import { Chart, registerables } from 'chart.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

gsap.registerPlugin(ScrollTrigger);
Chart.register(...registerables);

const EnergiaFotovoltaica: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [rangeValue, setRangeValue] = useState(100);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    });
  }, []);

  const barData = {
    labels: ['Mar 2022', 'Feb 2023'],
    datasets: [
      {
        label: 'Capacidade Autorizada (GW)',
        data: [42.4, 86],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Crescimento do Mercado (MW)',
        data: [1000, 2000, 3000, 4000, 5000, 6000],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const pieData = {
    labels: ['Ambiente Regulado', 'Mercado Livre'],
    datasets: [
      {
        label: 'Distribuição de Energia',
        data: [39, 61],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleWhatsAppLink = () => {
    const message = `Olá, minha conta de luz atualmente está na faixa de R$ ${rangeValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Gostaria de saber mais sobre as soluções de energia fotovoltaica.`;
    const url = `https://api.whatsapp.com/send?phone=5551981728039&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
     <HeroSection
      sectionRef={sectionRefs.current[0] }
     imageSrc="/images/products/energia.jpg" title="Energia Fotovoltaica" description="Oferecemos soluções de energia fotovoltaica com aquisição imediata e sem custo algum para o contratante, promovendo sustentabilidade e economia." />
      

  <section ref={(el) => {sectionRefs.current[1] = el}} className="relative py-12 bg-black min-h-[600px] flex flex-col justify-center">
    <Image src="/images/products/capital-giro.jpg" alt="Background" layout="fill" objectFit="cover" className="blur-sm z-0 brightness-50" />
    <span className="absolute inset-0 bg-gradient-to-t from-gray-200  z-[10]"/>

        <div className="relative z-10 container mx-auto max-w-prose text-center bg-gray-100 rounded-[42px] px-0">
          <div className="p-4 lg:p-12 ">
          <h2 className="text-3xl font-bold mb-6 text-primary">Em que faixa de valor está a sua conta de luz atualmente?</h2>
          <p className="text-lg mb-4 text-gray-700">
            Selecione a faixa de valor da sua conta de luz para que possamos oferecer a melhor solução de energia fotovoltaica para você.
          </p>
          <div className="flex justify-center items-center mb-6">
          <input 
            type="range" 
            min="100" 
            max="2000" 
            step="100" 
            value={rangeValue} 
            onChange={(e) => setRangeValue(Number(e.target.value))} 
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #4caf50 ${((rangeValue - 100) / 1900) * 100}%, #d3d3d3 ${((rangeValue - 100) / 1900) * 100}%)`
            }}
          />
            <span className="ml-4 text-lg text-gray-700">{rangeValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
          <div className="flex justify-between w-full px-2 text-gray-700">
            <span>R$ 100</span>
            <span>R$ 500</span>
            <span>R$ 1000</span>
            <span>R$ 1500</span>
            <span>R$ 2000+</span>
          </div>
          </div>
          <Button onClick={handleWhatsAppLink} className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3 w-full h-20 rounded-b-[42px]">
            Enviar
          </Button>
        </div>
      </section>

      <section ref={(el) => {sectionRefs.current[2] = el}} className="py-12 px-4 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Visão Geral do Mercado</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4 text-gray-700">
                Houve um aumento significativo na autorização de projetos de PV solar entre março de 2022 e fevereiro de 2023, com um total de 42,4 GW autorizados, levando a uma capacidade total de 86 GW. Isso representa um crescimento notável de 97%.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                O Mercado de Usinas registrou um crescimento de 58,6% (2.835MW) em 2022 em comparação com o ano anterior, impulsionado principalmente pelo Mercado Livre, que representa 61% da capacidade instalada até fevereiro de 2023.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                O volume de Contratos de Compra de Energia (PPAs) solares mapeados alcançou 11,9 GWp, ampliando seu alcance para novos setores de negócios, como saúde, produção de alimentos e tecnologia.
              </p>
            </div>
            <div className="mt-8">
              <Bar data={barData} options={options} />
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => {sectionRefs.current[3] = el}} className="py-12 px-4 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Crescimento do Mercado</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="mt-8">
              <Line data={lineData} options={options} />
            </div>
            <div>
              <p className="text-lg mb-4 text-gray-700">
                O Projeto de Lei 414/2021 propõe a abertura gradual do mercado em até 42 meses da sua publicação para todas as UCs, inclusive as atendidas em baixa tensão. A Portaria Normativa 50/2022 já permite que consumidores do Grupo A, independentemente do consumo, possam comprar energia elétrica de qualquer supridor a partir de janeiro de 2024.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Com a abertura gradual do Mercado Livre de energia, um maior número de consumidores necessariamente estará habilitado para migração. Atualmente, 31,5% dos consumidores habilitados estão no ambiente livre, ou seja, 68,5% podem migrar e não migraram ainda.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                O mercado potencial de atuação é de 202 mil unidades consumidoras em todo o Brasil, o que equivale a um volume de aproximadamente 2.6 GW. Como já ocorre em outros países, a tendência é de que no Brasil a abertura total do ACL se dê em 2028 para todos os consumidores, incluindo os residenciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => {sectionRefs.current[4] = el}} className="py-12 px-4 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Distribuição de Energia</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="mt-8">
              <Pie data={pieData} options={options} />
            </div>
            <div>
              <p className="text-lg mb-4 text-gray-700">
                O Projeto de Lei 414/2021 propõe a abertura gradual do mercado em até 42 meses da sua publicação para todas as UCs, inclusive as atendidas em baixa tensão. A Portaria Normativa 50/2022 já permite que consumidores do Grupo A, independentemente do consumo, possam comprar energia elétrica de qualquer supridor a partir de janeiro de 2024.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Com a abertura gradual do Mercado Livre de energia, um maior número de consumidores necessariamente estará habilitado para migração. Atualmente, 31,5% dos consumidores habilitados estão no ambiente livre, ou seja, 68,5% podem migrar e não migraram ainda.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                O mercado potencial de atuação é de 202 mil unidades consumidoras em todo o Brasil, o que equivale a um volume de aproximadamente 2.6 GW. Como já ocorre em outros países, a tendência é de que no Brasil a abertura total do ACL se dê em 2028 para todos os consumidores, incluindo os residenciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default EnergiaFotovoltaica;