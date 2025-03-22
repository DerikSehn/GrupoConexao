"use client"
import ContactSection from '@/components/sections/ContactSection';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { banks } from '@/data/banks';
import HeroSection from '@/components/hero/HeroSection';


const Consorcios: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <HeroSection
        imageSrc="/images/products/consorcios.jpg"
        title="Consórcios"
        description="Adquira seu bem sem pagar juros abusivos. Conheça nossas opções de consórcio e faça uma simulação."
        
      />
      <section className="py-12 px-4 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Como Funciona</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4 text-gray-700">
                O consórcio é uma modalidade de compra baseada na união de pessoas físicas ou jurídicas em um grupo, promovida por uma administradora, com a finalidade de formar uma poupança comum destinada à aquisição de bens móveis, imóveis ou serviços.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">Você escolhe o plano que melhor se adapta ao seu orçamento.</li>
                <li className="mb-2">Mensalmente, você paga uma parcela referente ao valor do bem ou serviço desejado.</li>
                <li className="mb-2">A cada mês, um ou mais participantes do grupo são contemplados por sorteio ou lance.</li>
                <li className="mb-2">Ao ser contemplado, você pode adquirir o bem ou serviço desejado.</li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/products/consorcios.jpg"
                alt="Consórcio de Carro"
                layout="responsive"
                width={800}
                height={500}
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Escolha seu Consórcio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {banks.map((bank, index) => (
              <div key={index} className="bg-white  rounded-lg shadow-lg flex flex-col md:flex-row items-center text-center md:text-left">
                <div className="md:w-1/3 flex justify-center md:justify-start relative h-full ">
                  <Image
                    src={bank.image}
                    alt={bank.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="md:w-2/3 md:ml-6 p-6">
                  <h3 className="text-xl font-semibold mb-2">{bank.name}</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {bank.info.map((info, idx) => (
                      <li key={idx} className="mb-2">{info}</li>
                    ))}
                  </ul>
                  <Link href={bank.whatsappLink} passHref>
                    <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3">Fale Conosco</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Depoimentos de Clientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "Adquiri meu carro através do consórcio e foi a melhor decisão que tomei. Sem juros e com muita segurança!"
                </p>
              <p className="text-primary font-semibold">- João Silva</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "O consórcio me permitiu planejar a compra do meu carro de forma tranquila e sem surpresas."
                </p>
              <p className="text-primary font-semibold">- Maria Oliveira</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "Recomendo o consórcio para todos que querem adquirir um bem sem pagar juros abusivos."
                </p>
              <p className="text-primary font-semibold">- Carlos Santos</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Consorcios;