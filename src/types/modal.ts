import { ProjectRoute } from './project';

// 모달별 props 타입 정의
export type ModalPropsMap = {
  projectDetail: ProjectRoute;
};

// 모달 타입을 자동 추론 하게 설정
export type ModalType = keyof ModalPropsMap;

export type ModalItem<T extends ModalType = ModalType> = {
  [K in T]: {
    type: K;
    props?: ModalPropsMap[K];
  };
}[T];
