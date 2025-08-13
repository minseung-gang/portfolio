'use client';

import ReactDOM from 'react-dom';

import type { ModalItem, ModalPropsMap, ModalType } from '@/types/modal';

import useModalStore from '@/stores/useModalStore';
import ProjectDetailModal from './ProjectDetailModal';

const MODAL_COMPONENTS = {
  projectDetail: ProjectDetailModal,
} as const;

const renderModal = <T extends ModalType>(modal: ModalItem<T>, index: number) => {
  const Component = MODAL_COMPONENTS[modal.type] as React.FC<ModalPropsMap[T]>;
  return ReactDOM.createPortal(
    <Component key={index} {...(modal.props as ModalPropsMap[T])} />,
    document.body,
  );
};

const GlobalContainer = () => {
  const modals = useModalStore((state) => state.modals);

  return (
    <>
      {modals.map((modal: ModalItem, index) => {
        return renderModal(modal, index);
      })}
    </>
  );
};

export default GlobalContainer;
