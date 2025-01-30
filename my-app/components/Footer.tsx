'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const teamMembers = [
  {
    name: 'Sandro Marques',
    image: '/images/sandro.jpeg',
    email: 'sandro.marques@conexao-suc.com.br',
    phone: '(51) 8172-7999',
    description: 'Diretor Executivo com vasta experiência em liderança e gestão de equipes.',
  },
  {
    name: 'Dérik Sehn',
    image: '/images/derik.jpeg',
    email: 'derikbosing@gmail.com',
    phone: '(51) 99930-0707',
    description: 'Desenvolvedor Especialista em TI.',
  },
  {
    name: 'Leandro Duarte',
    image: '/images/leandro.jpeg',
    email: 'leandro.duarte@conexao-suc.com.br',
    phone: '(51) 984840902',
    description: 'Diretor comercial e estrategista, com vasta experiência em técnicas de vendas inovadoras e negociação de parcerias sólidas',
  },
];

const ContactSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="contact" className="py-12 px-4 bg-primary/5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Entre em Contato</h2>
        <p className="text-lg text-gray-700 mb-8">
          Nossa equipe está pronta para ajudar. Entre em contato com um de nossos especialistas.
        </p>
        <Slider  {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex  flex-col items-center text-center ">
                <div className="w-full flex justify-center mb-4 rounded-4xl translate-y-">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full aspect-square object-cover"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-4">{member.description}</p>
                  <div className="flex items-center justify-center gap-2 text-gray-700 mb-2">
                    <Mail className="w-5 h-5 text-secondary" />
                    <a href={`mailto:${member.email}`} className="hover:text-secondary">{member.email}</a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <Phone className="w-5 h-5 text-secondary" />
                    <a href={`tel:${member.phone}`} className="hover:text-secondary">{member.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ContactSection;