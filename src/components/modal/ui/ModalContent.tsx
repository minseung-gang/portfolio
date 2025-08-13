import { cn } from '@/utils/cn';

interface ModalContentProps {
  className?: string;
  children: React.ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ className, children }) => {
  const modalContentCls = `absolute left-1/2 transform -translate-x-1/2 bg-white pointer-events-auto rounded-md shadow-md`;
  return <div className={cn(modalContentCls, className)}>{children}</div>;
};

export default ModalContent;
