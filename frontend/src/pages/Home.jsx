import React, { useState } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import PrintingKnowledge from '../components/PrintingKnowledge';
import OurWorkShowcase from '../components/OurWorkShowcase';
import BrandStory from '../components/BrandStory';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ValuedClients from '../components/ValuedClients';

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState('ceramic-mug');

  return (
    <>
      <main id="home">
        <Hero />
        <Stats />
        <PrintingKnowledge />
        <OurWorkShowcase />
        <Testimonials />
        <BrandStory />
        <ValuedClients />
      </main>
      <Footer />
    </>
  );
}
