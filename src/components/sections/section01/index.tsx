import React, { useRef } from 'react';

import Hero from './Hero';
import About from './About';

const Index = () => {
  const containerRef = useRef(null);

  return (
    <section className='relative z-2' ref={containerRef}>
      <Hero />
      <About containerRef={containerRef} />
    </section>
  );
};

export default Index;
