import React from 'react';
import { motion } from 'framer-motion';
import { DECORATE_STARS } from '@/constants/hero';

const Hero = () => {
  return (
    <div className='relative flex justify-center pt-72'>
      {DECORATE_STARS.map((star, idx) => (
        <motion.img
          key={idx}
          className='absolute'
          animate={star.animation}
          transition={star.transition}
          width={100}
          style={star.position}
          src={star.src}
          alt={star.id}
        />
      ))}
      <h1 className='text-center text-[clamp(22px,4vw,85px)] leading-24 font-bold text-white'>
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
