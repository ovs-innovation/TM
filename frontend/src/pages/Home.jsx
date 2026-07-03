import React, { useState } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProductCatalog from '../components/ProductCatalog';
import PrintingKnowledge from '../components/PrintingKnowledge';
import BrandStory from '../components/BrandStory';
import Footer from '../components/Footer';

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState('ceramic-mug');

  return (
    <>
      <main id="home">
        <Hero />
        <Stats />
        <ProductCatalog onSelectProduct={setSelectedProductId} />
        <PrintingKnowledge />
        <BrandStory />
      </main>
      <Footer />
    </>
  );
}
