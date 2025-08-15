'use client';

import React, { useEffect, useRef } from 'react';

import { useScrollStore } from '@/stores/useScrollStore';
import { useScroll } from 'framer-motion';
import { Section01, Section02, Section03 } from '@/components/sections';
import LayoutContainer from '@/components/common/LayoutContainer';

const Home = () => {
  const pageRef = useRef(null);
  const { setScrollY } = useScrollStore();
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollY(latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress, setScrollY]);

  return (
    <LayoutContainer>
      <div ref={pageRef}>
        <Section01 />
        <Section02 />
        <Section03 />
      </div>
    </LayoutContainer>
  );
};

export default Home;
