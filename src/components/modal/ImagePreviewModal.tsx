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
      <ModalContent className='top-1/2 w-[70vw] -translate-y-1/2'>
        <button
          onClick={closeModal}
          className='transform-x-1/2 absolute -top-[7vh] left-1/2 cursor-pointer'
        >
          <Close size={50} className='text-[#949494] hover:text-[#72767a]' />
        </button>
        <img src={src} alt='상세이미지' className='w-full object-contain' />
      </ModalContent>
    </Modal>
  );
};

export default ImagePreviewModal;
