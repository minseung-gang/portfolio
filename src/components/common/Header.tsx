'use client';

import { useScrollStore } from '@/stores/useScrollStore';
import { cn } from '@/utils/cn';
import React from 'react';

const Header = () => {
  const { scrollY, isDarkSection } = useScrollStore();
  return (
    <header
      className={cn(
        'max-w-container bg-opacity-40 fixed top-0 left-1/2 z-10 w-full -translate-x-1/2 px-5',
        isDarkSection && 'mix-blend-difference',
      )}
    >
      <div className='relative z-6 pt-3'>
        <h1 className='text-[clamp(11px,1vw,14px)] font-medium text-white'>프론트엔드 - 강민승</h1>
      </div>
      <div className='relative mt-1.5 h-[1px] w-full bg-[#727272]'>
        <div
          style={{ width: `${scrollY * 100}%` }}
          className='absolute top-0 left-0 h-1.5 w-full rounded-md bg-[#3B82F6] shadow-[0_0_5px_5px_rgba(63,137,255,0.25)] transition-all duration-0'
        />
      </div>
    </header>
  );
};

export default Header;
