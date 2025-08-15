import { CONTACT_BUTTONS } from '@/constants/contact';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  const baseButtonStyles =
    'px-[clamp(10px,2vw,32px)] text-[clamp(11px,1vw,16px)] py-[clamp(10px,2vw,20px)] text-white transition-colors hover:bg-[#121314]';
  return (
    <section className='fixed bottom-[clamp(10px,2vw,20px)] left-1/2 z-3 -translate-x-1/2'>
      <div className='grid grid-cols-2 overflow-hidden rounded-md border-1 border-[#494949] bg-[rgba(0,1,8,0.7)] mix-blend-difference'>
        {CONTACT_BUTTONS.map((button, idx) => (
          <Link key={idx} href={button.herf} className={baseButtonStyles} target='_blank'>
            {button.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
