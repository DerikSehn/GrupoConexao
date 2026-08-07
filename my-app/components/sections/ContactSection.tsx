'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamMemberCard from '../cards/TeamMemberCard';
import { teamMembers } from '../../data/teamMembers';
import ContactForm from '../form/ContactForm';
import { motion, useReducedMotion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
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
    <motion.section
      id="contact"
      initial={prefersReducedMotion ? false : { opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pt-12 bg-primary/5"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6 text-primary">Entre em Contato</h2>
        <p className="text-lg text-gray-700 mb-8">
          Nossa equipe está pronta para ajudar. Entre em contato com um de nossos especialistas.
        </p>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
        <Slider {...settings} className="flex-grow">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </Slider>
        </motion.div>
      </div>
      <ContactForm />
    </motion.section>
  );
};

export default ContactSection;