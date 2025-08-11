import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { cn } from '@/utils/cn';
import { ExperienceItem } from '@/types/experience';

const ExperienceBlock = ({
  title,
  data,
  titleScale,
  titleOpacity,
  contentScale,
  contentOpacity,
}: {
  title: string;
  data: ExperienceItem[];
  titleScale: MotionValue<number>;
  titleOpacity: MotionValue<number>;
  contentScale: MotionValue<number>;
  contentOpacity: MotionValue<number>;
}) => (
  <div>
    <motion.h1
      className={cn('orbitron mb-6 text-[clamp(20px,2vw,30px)] font-bold text-white')}
      style={{ scale: titleScale, opacity: titleOpacity }}
    >
      {title}
    </motion.h1>
    <motion.div
      className='grid grid-cols-2 gap-x-5 gap-y-9'
      style={{ scale: contentScale, opacity: contentOpacity }}
    >
      {data.map(({ company, period, description, role }, idx) => (
        <div className='w-fit' key={idx}>
          <div className='mb-2'>
            <div className='flex items-center gap-x-3'>
              <h3 className='orbitron text-primary text-[clamp(16px,1.5vw,24px)] font-semibold'>
                {company}
              </h3>
              <p className='text-[clamp(12px,1vw,14px)] font-medium text-[#D5D5D5]'>- {role}</p>
            </div>
            <p className='text-[clamp(11px,1vw,12px)] text-[#D5D5D5]'>{period}</p>
          </div>
          <div className='mt-4 flex flex-col'>
            {description.map((content, index) => (
              <p key={index} className='text-[clamp(13px,1vw,16px)] text-[#CFCFCF]'>
                • {content}
              </p>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

export default ExperienceBlock;
