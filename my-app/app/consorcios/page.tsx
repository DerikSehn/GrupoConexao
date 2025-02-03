import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import WaveTransition from '@/components/WaveTransition';
import { Car, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const banks = [
  {
    name: 'Banco A',
    image: '/bg/placeholder.svg',
    info: [
      'Taxa de administração competitiva',
      'Parcelas acessíveis',
      'Atendimento personalizado',
    ],
    whatsappLink: 'https://api.whatsapp.com/send?phone=5551999300707&text=Olá,%20tenho%20interesse%20no%20consórcio%20do%20Banco%20A',
  },
  {
    name: 'Banco B',
    image: '/bg/placeholder.svg',
    info: [
      'Sem taxa de adesão',
      'Parcelas fixas',
      'Sorteios mensais',
    ],
    whatsappLink: 'https://api.whatsapp.com/send?phone=5551999300707&text=Olá,%20tenho%20interesse%20no%20consórcio%20do%20Banco%20B',
  },
  {
    name: 'Banco C',
    image: '/bg/placeholder.svg',
    info: [
      'Taxa de administração reduzida',
      'Flexibilidade de pagamento',
      'Consultoria financeira gratuita',
    ],
    whatsappLink: 'https://api.whatsapp.com/send?phone=5551999300707&text=Olá,%20tenho%20interesse%20no%20consórcio%20do%20Banco%20C',
  },
];

const Consorcios: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <Header />

      <section className="py-12 px-4 bg-primary text-white">
        <div className="container mx-auto text-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Consórcios</h1>
          <p className="text-xl mb-8 max-w-prose mx-auto">
            Nossos consórcios oferecem uma forma inteligente e planejada de adquirir bens e serviços, com condições especiais e flexibilidade.
          </p>
        </div>
      </section>
      <WaveTransition />

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Vantagens de Adquirir um Carro com Consórcio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Car className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sem Juros</h3>
              <p className="text-gray-700">Adquira seu carro sem pagar juros, apenas uma taxa de administração.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-700">Seu dinheiro é protegido por uma administradora de consórcios autorizada pelo Banco Central.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Valorização</h3>
              <p className="text-gray-700">Seu investimento pode valorizar ao longo do tempo, garantindo um bom negócio.</p>
            </div>
          </div>
        </div>
      </section>

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
                src="/images/consorcio-car.jpg"
                alt="Consórcio de Carro"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Escolha seu Banco</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {banks.map((bank, index) => (
              <div key={index} className="bg-white  rounded-lg shadow-lg flex flex-col md:flex-row items-center text-center md:text-left">
                <div className="md:w-1/3 flex justify-center md:justify-start relative h-full ">
                  <Image
                    src={bank.image}
                    alt={bank.name}
                    fill
                    className="object-cover"
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

      <Footer />
    </div>
  );
};

export default Consorcios;