import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES_ROUTE } from '@/constants/common';
import { ABOUT_ME } from '@/constants/profile';

interface AboutProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

const About = ({ containerRef }: AboutProps) => {
  const aboutContentRef = useRef(null);

  const { scrollYProgress: mainVisualScrollY } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: aboutSectionScrollY } = useScroll({
    target: aboutContentRef,
    offset: ['start 40%', 'end end'],
  });

  // aboutContent가 화면에 들어올 때의 스크롤 진행도
  const { scrollYProgress: aboutDetailScrollY } = useScroll({
    target: aboutContentRef,
    offset: ['start -20%', 'end -100%'],
  });

  // 사람 이미지 스크롤 기반 스타일 제어
  const mainCharacterX = useTransform(mainVisualScrollY, [0, 0.15], [280, -50]);
  const mainCharacterY = useTransform(mainVisualScrollY, [0, 0.15], [-270, 0]);
  const mainCharacterScale = useTransform(mainVisualScrollY, [0, 0.15], [0.7, 1.1]);

  // 큰 별 이미지 스크롤 기반 스타일 제어
  const mainStarX = useTransform(mainVisualScrollY, [0, 0.15], [-260, 80]);
  const mainStarY = useTransform(mainVisualScrollY, [0, 0.15], [-270, 0]);
  const mainStarScale = useTransform(mainVisualScrollY, [0, 0.15], [0.8, 1.1]);

  // About Intro 타이틀 스타일 제어
  const sectionTitleOpacity = useTransform(aboutSectionScrollY, [0, 0.15], [0, 1]);

  // aboutContent의 애니메이션 (오른쪽에서 중앙으로)
  const y = useTransform(aboutDetailScrollY, [0, 0.1, 0.4], [0, 0, 100]);
  const x = useTransform(aboutDetailScrollY, [0, 0.1, 0.5], [100, 100, 0]);
  const aboutIntroY = useTransform(y, (value) => `-${value}vh`);
  const aboutContentX = useTransform(x, (value) => `${value}vw`);

  // 자기소개 부분을 위로 올려보내는 애니메이션
  const exitY = useTransform(aboutDetailScrollY, [0, 0.8, 1], [0, 0, 100]);
  const aboutDetailExitY = useTransform(exitY, (value) => `-${value}vh`);
  const aboutDetailOpacity = useTransform(aboutDetailScrollY, [0, 0.8, 1], [1, 1, 0]);

  return (
    <div className='relative h-[370svh] pt-40' ref={aboutContentRef}>
      <motion.div className='sticky top-0 left-0 h-[100svh]'>
        <motion.div
          className='absolute top-0 left-0 z-5 mx-auto h-full w-full'
          style={{
            y: aboutIntroY,
          }}
        >
          <motion.div
            className='h-full pt-80 text-center text-white'
            style={{
              opacity: sectionTitleOpacity,
            }}
          >
            <h2 className='orbitron mb-7 text-[84px] font-bold'>About me</h2>
            <p className='text-[34px] font-bold'>끊임없이 고민하고, 성장하는 프론트엔드 개발자</p>
          </motion.div>
          <div className='absolute top-0 left-0 h-full w-full'>
            <motion.div
              className='absolute -left-[100px] z-3 h-[495px] w-[392px] translate-y-1/2'
              style={{
                x: mainCharacterX,
                y: mainCharacterY,
                scale: mainCharacterScale,
                transformOrigin: 'center center',
              }}
            >
              <img src={IMAGES_ROUTE.mainCharacter} alt='사람 이미지' width={392} height={495} />
            </motion.div>
            <motion.div
              className='absolute -right-[100px] z-3 h-[469px] w-[473px] translate-y-1/2'
              style={{
                x: mainStarX,
                y: mainStarY,
                scale: mainStarScale,
                transformOrigin: 'center center',
              }}
            >
              <img
                src={IMAGES_ROUTE.mainStar}
                className='h-full w-full object-contain'
                alt='별 이미지'
                width={473}
                height={469}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className='text-80 absolute top-0 right-1/2 z-3 grid h-full w-full max-w-[950px] translate-x-1/2 grid-cols-[1.5fr_1fr] items-center justify-center gap-x-[clamp(40px,5vw,80px)] overflow-hidden text-white'
          style={{ x: aboutContentX, y: aboutDetailExitY, opacity: aboutDetailOpacity }}
        >
          <div className='grid gap-y-12'>
            {ABOUT_ME.map(({ title, description }, idx) => {
              return (
                <div className='grid gap-y-4' key={idx}>
                  <h3 className='text-[clamp(16px,2vw,24px)] font-medium'>
                    [ <strong className='text-primary'>{title}</strong> ]
                  </h3>
                  <p className='break- text-[clamp(12px,1vw,17px)] whitespace-break-spaces'>
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <img
              src={IMAGES_ROUTE.profile}
              alt='프로필 이미지'
              width={362}
              height={483}
              className='rounded-md'
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
