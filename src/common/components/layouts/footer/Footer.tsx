import React from 'react';
import Container from '../Container';
import IntroSection from './components/IntroSection';
import QuickLinksSection from './components/QuickLinksSection';
import LegalSection from './components/LegalSection';
import ContactSection from './components/ContactSection';
import CopyrightSection from './components/CopyrightSection';

const Footer = () => {
  return (
    <div className='min-h-[451px] w-full bg-[#007DFC] py-[52px] text-white'>
      <Container className='!px-[44px] md:!px-[88px] 2xl:max-w-full'>
        <div className='flex flex-col justify-between md:flex-row'>
          <IntroSection />
          <QuickLinksSection />
          <LegalSection />
          <ContactSection />
        </div>
        <CopyrightSection />
      </Container>
    </div>
  );
};

export default Footer;
