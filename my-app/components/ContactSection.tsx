'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../data/teamMembers';
import ContactForm from './ContactForm';

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
    <section id="contact" className="pt-12 bg-primary/5">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6 text-primary">Entre em Contato</h2>
        <p className="text-lg text-gray-700 mb-8">
          Nossa equipe está pronta para ajudar. Entre em contato com um de nossos especialistas.
        </p>
        <Slider {...settings} className="flex-grow">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </Slider>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;