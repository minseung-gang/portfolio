import React from 'react';
import Modal from './ui/Modal';
import ModalBackDrop from './ui/ModalBackDrop';
import ModalContent from './ui/ModalContent';
import Close from '../icons/Close';
import useModal from '@/hooks/useModal';

interface ImagePreviewModalProps {
  src: string;
}

const ImagePreviewModal = ({ src }: ImagePreviewModalProps) => {
  const { closeModal } = useModal();
  return (
    <Modal className='flex items-center justify-center backdrop-blur-sm'>
      <ModalBackDrop />
      <ModalContent className='top-1/2 w-[min(92vw,1200px)] max-w-[1200px] -translate-y-1/2 overflow-visible rounded-md bg-[#F9FAFB]'>
        <button
          onClick={closeModal}
          className='transform-x-1/2 absolute -top-[7vh] left-1/2 cursor-pointer'
        >
          <Close size={50} className='text-[#949494] hover:text-[#72767a]' />
        </button>
        <div className='flex h-[82vh] w-full items-center justify-center p-4 md:p-6'>
          <img src={src} alt='상세이미지' className='h-full w-full object-contain' />
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ImagePreviewModal;
