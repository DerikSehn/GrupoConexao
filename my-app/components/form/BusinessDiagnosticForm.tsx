"use client";
 import React from 'react';
import CTAButton from '../button/CTAButton';
import CTACard from '../cards/CTACard';
import Section from '../sections/Section';
import Title from '../text/Title';
 

const BusinessDiagnosticForm: React.FC = () => {
    
    return (
       <Section>   <Title >
                Diagnóstico Empresarial
            </Title>
            <CTACard
            className='container'
                title="Preencha o formulário para um diagnóstico empresarial completo" 
                content={
                    <CTAButton
                       text='Preencher formulário'
                       variant='primary'
                       href={"https://forms.kommo.com/rddwzrw"}
                       />  
                }
            >
            </CTACard>
    </Section>
    );
};

export default BusinessDiagnosticForm;
