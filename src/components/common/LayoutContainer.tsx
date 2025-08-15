import { cn } from '@/utils/cn';
import React from 'react';

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutContainer = ({ children, className }: LayoutContainerProps) => {
  const baseStyles = 'mx-auto max-w-container';
  return <div className={cn(baseStyles, className)}>{children}</div>;
};

export default LayoutContainer;
