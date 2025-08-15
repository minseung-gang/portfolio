import { useModalContext } from './Modal';

import { cn } from '@/utils/cn';

interface ModalBackdropProps {
  className?: string;
}

const ModalBackDrop: React.FC<ModalBackdropProps> = ({ className }) => {
  const { closeModal } = useModalContext();
  const modalBackdropCls = `fixed inset-0 bg-black opacity-80`;
  return (
    <div
      role='presentation'
      aria-hidden='true'
      className={cn(modalBackdropCls, className)}
      onClick={closeModal}
    />
  );
};

export default ModalBackDrop;
