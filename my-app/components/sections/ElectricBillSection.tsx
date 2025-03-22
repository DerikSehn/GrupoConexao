import { useState } from "react";
import fadeInUp from "@/data/framer-variants/fadeInUp";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ElectricBillSection( ) {

    const [rangeValue, setRangeValue] = useState(100);
    
    const handleWhatsAppLink = () => {
        const message = `Olá, minha conta de luz atualmente está na faixa de R$ ${rangeValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Gostaria de saber mais sobre as soluções de energia fotovoltaica.`;
        const url = `https://api.whatsapp.com/send?phone=5551981728039&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return ( <motion.section
        className="relative py-12 bg-black min-h-[600px] flex flex-col justify-center"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <Image src="/images/products/capital-giro.jpg" alt="Background" layout="fill" objectFit="cover" className="blur-sm z-0 brightness-50" />
        <span className="absolute inset-0 -inset-y-2 bg-gradient-to-t from-gray-200 from-5% via-transparent to-black to-90% z-[10]" />
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
      </motion.section>)
}