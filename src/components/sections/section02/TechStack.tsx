import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TECH_STACKS } from '@/constants/techStack';
import { cn } from '@/utils/cn';
import React from '@/components/icons/React';
const TechStack = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 40%'],
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.7, 1]);
  const stackScale = useTransform(scrollYProgress, [1 * 0.05, 0.3 + 0.2 * 0.05], [0.7, 1]); // 더 늦게
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const stackOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <div className='relative h-[100svh]' ref={sectionRef}>
      <div className='sticky top-0 left-0'>
        <div className='pt-50'>
          <motion.h1
            className={cn('orbitron mb-20 text-[clamp(20px,2vw,30px)] font-bold text-white')}
            style={{ scale: titleScale, opacity: titleOpacity }}
          >
            TECH STACK
          </motion.h1>

          <motion.div
            className='grid grid-cols-2 gap-y-9'
            style={{ scale: stackScale, opacity: stackOpacity }}
          >
            {TECH_STACKS.map(({ title, icons }, idx) => (
              <div key={idx}>
                <h3 className='orbitron mb-6 text-[clamp(16px,1.5vw,24px)] font-semibold text-white'>
                  {title}
                </h3>

                <div className='flex items-center gap-x-4'>
                  {icons.map(({ label, component: Icon }) => (
                    <div key={label} className='rounded-xl border-2 border-[#221f1f] p-2.5'>
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
