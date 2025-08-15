import React from 'react';
import { motion } from 'framer-motion';
import { DECORATE_STARS } from '@/constants/hero';

const Hero = () => {
  return (
    <div className='relative flex justify-center pt-[30vh]'>
      {DECORATE_STARS.map((star, idx) => (
        <motion.img
          key={idx}
          className='absolute w-[clamp(80px,10vw,100px)]'
          animate={star.animation}
          transition={star.transition}
          style={star.position}
          src={star.src}
          alt={star.id}
        />
      ))}
      <h1 className='text-center text-[clamp(25px,5vw,65px)] leading-[clamp(10px,7vw,80px)] font-bold text-white'>
        안녕하세요
        <br />
        프론트엔드 개발자
        <br />
        강민승입니다.
      </h1>
    </div>
  );
};

export default Hero;
