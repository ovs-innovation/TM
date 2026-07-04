import React, { useState } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import PrintingKnowledge from '../components/PrintingKnowledge';
import BrandStory from '../components/BrandStory';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState('ceramic-mug');

  return (
    <>
      <main id="home">
        <Hero />
        <Stats />
        <PrintingKnowledge />
        <Testimonials />
        <BrandStory />
      </main>
      <Footer />
    </>
  );
}
