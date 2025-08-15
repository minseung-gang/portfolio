'use client';

import React, { useEffect, useState } from 'react';
import Modal from '../modal/ui/Modal';

const OrientationGuide = () => {
  const [shouldShow, setShouldShow] = useState(false);
  console.log(shouldShow, '뭐니');
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 768; // 또는 다른 기준점
      const isPortrait = window.innerHeight > window.innerWidth;

      // 모바일이면서 세로 모드일 때만 표시
      setShouldShow(isMobile && isPortrait);
    };

    // 초기 체크
    checkOrientation();

    // 이벤트 리스너
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  if (!shouldShow) return null;
  return (
    <Modal>
      <Modal.Content className='fixed inset-0 top-0 left-0 z-100 flex translate-none flex-col items-center justify-center bg-black'>
        <h2 className='mb-4 text-xl font-bold text-white'>가로 모드로 전환해주세요</h2>

        <p className='leading-relaxed text-white/80'>
          이 화면은 가로 모드에서 최적화되어 있습니다.
          <br />
          기기를 가로로 돌려서 더 나은 경험을 즐겨보세요.
        </p>
      </Modal.Content>
    </Modal>
  );
};

export default OrientationGuide;
