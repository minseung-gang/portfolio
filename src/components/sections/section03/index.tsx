import { useScrollStore } from '@/stores/useScrollStore';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECT_DATA } from '@/constants/project';

const Index = () => {
  const sectionRef = useRef(null);
  const { setIsDarkSection } = useScrollStore();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start -50%', 'end end'],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['circle(0.5 at 50% 50%)', 'circle(75% at 50% 50%)'],
  );

  const circleScale = useTransform(scrollYProgress, [0, 1], [0.01, 1.15]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setIsDarkSection(v > 0.3);
    });

    return () => unsubscribe();
  }, [scrollYProgress, setIsDarkSection]);

  return (
    <div className='relative h-[350svh] pt-60' ref={sectionRef}>
      <div className='sticky top-0 left-0 h-[100svh]'>
        <div className='flex h-full w-full flex-col items-center gap-y-[10vh] bg-[#000108] pt-[20%]'>
          <h1 className='orbitron text-[clamp(25px,10vw,45px)] font-bold text-white'>Project</h1>
          <motion.div
            className='absolute top-1/2 left-1/2 aspect-square w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_6vw_1.5vw_rgba(43,19,231,0.65),0_0_3vw_0.5vw_#A358EB,0_0_8vw_4vw_rgba(58,40,198,0.65)]'
            style={{
              scale: circleScale,
            }}
          />
          <motion.div
            className='absolute top-1/2 left-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-white'
            style={{
              clipPath: clipPath,
            }}
          >
            <div className='max-w-container mx-auto h-full w-full py-[25vh]'>
              <h2 className='mb-15 text-[clamp(22px,2vw,34px)] font-bold'>프로젝트</h2>
              <div className='grid grid-cols-4 gap-x-5'>
                {PROJECT_DATA.map((project) => {
                  return (
                    <ProjectCard key={project.title} project={project} projectId={project.id} />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
