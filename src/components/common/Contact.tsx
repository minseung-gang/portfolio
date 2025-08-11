import { CONTACT_BUTTONS } from '@/constants/contact';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section className='fixed bottom-2.5 left-1/2 z-3 -translate-1/2'>
      <div className='grid grid-cols-2 overflow-hidden rounded-md border-1 border-[#494949] bg-[rgba(0,1,8,0.7)] mix-blend-difference'>
        {CONTACT_BUTTONS.map((button, idx) => (
          <Link key={idx} href={button.herf} className={button.className} target='_blank'>
            {button.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
