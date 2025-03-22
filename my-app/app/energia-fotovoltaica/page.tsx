"use client"
import HeroSectionEnhanced from '@/components/hero/HeroSectionEnhanced';
import ContactSection from '@/components/sections/ContactSection';
import ElectricBillSection from '@/components/sections/ElectricBillSection';
import fadeInUp from '@/data/framer-variants/fadeInUp';
import { Chart, registerables } from 'chart.js';
import { motion } from 'framer-motion';
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

Chart.register(...registerables);

const EnergiaFotovoltaica: React.FC = () => {

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


  return (
    <motion.div 
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    className="min-h-screen bg-gray-100 pt-20">
      <HeroSectionEnhanced
      backgroundImage="/images/products/energia.jpg"
        backgroundImageAlt="Background"
        card={{
          content: "Oferecemos soluções de energia fotovoltaica com aquisição imediata e sem custo algum para o contratante, promovendo sustentabilidade e economia.",
          title: "",
         }}
        title="Energia Fotovoltaica"
         cta={{
          text: "Orçamento",
          href: "#",
          variant: "primary",
         }}
         heroImage={{
          src: "/images/products/energia.jpg",
          alt: "Energia Fotovoltaica",
         }}
      />

        <ElectricBillSection   />

      <motion.section
        className="py-12 px-4 bg-gray-200"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
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
      </motion.section>

      <motion.section
        className="py-12 px-4 bg-gray-200"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
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
      </motion.section>

      <motion.section
        className="py-12 px-4 bg-gray-200"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
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
      </motion.section>

      <ContactSection />
    </motion.div>
  );
};

export default EnergiaFotovoltaica;