import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import ExperienceBlock from './ExperienceBlock';
import { EXPERIENCE_DATA } from '@/constants/experience';

const Experience = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress: sectionScroll } = useScroll({
    target: sectionRef,
    offset: ['start 50%', 'end 20%'],
  });

  const careerTitleScale = useTransform(sectionScroll, [0, 0.2], [0.7, 1]);
  const careerContentScale = useTransform(sectionScroll, [0.05, 0.25], [0.6, 1]);
  const careerTitleOpacity = useTransform(sectionScroll, [0, 0.25], [0, 1]);
  const careerContentOpacity = useTransform(sectionScroll, [0.1, 0.35], [0, 1]);

  const educationTitleScale = useTransform(sectionScroll, [0.15, 0.25], [0.7, 1]);
  const educationContentsScale = useTransform(sectionScroll, [0.2, 0.3], [0.7, 1]);
  const educationTitleOpacity = useTransform(sectionScroll, [0.15, 0.35], [0, 1]);
  const educationContentOpacity = useTransform(sectionScroll, [0.2, 0.35], [0, 1]);

  return (
    <div className='relative h-[140svh]' ref={sectionRef}>
      <div className='sticky top-0 left-0 mt-90'>
        <div className='pt-30'>
          <ExperienceBlock
            title='Career'
            data={EXPERIENCE_DATA.career}
            titleScale={careerTitleScale}
            titleOpacity={careerTitleOpacity}
            contentScale={careerContentScale}
            contentOpacity={careerContentOpacity}
          />
        </div>
        <div className='mt-[clamp(40px,10px,78px)]'>
          <ExperienceBlock
            title='Education'
            data={EXPERIENCE_DATA.education}
            titleScale={educationTitleScale}
            titleOpacity={educationTitleOpacity}
            contentScale={educationContentsScale}
            contentOpacity={educationContentOpacity}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
