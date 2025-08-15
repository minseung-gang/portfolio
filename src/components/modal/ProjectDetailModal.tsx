import React from 'react';
import Modal from './ui/Modal';
import ModalBackDrop from './ui/ModalBackDrop';
import ModalContent from './ui/ModalContent';
import {
  PROJECT_GEORIM_CONTENTS,
  PROJECT_HAPPYPILL_CONTENTS,
  PROJECT_PORTFOLIO_CONTENTS,
  PROJECT_PULBATTE_CONTENTS,
} from '@/constants/modal';
import { BaseProject, commonAction } from '@/types/project';
import useModal from '@/hooks/useModal';

type ProjectKey = keyof typeof PROJECT_MAP;

export const PROJECT_MAP: Record<string, BaseProject> = {
  happyPill: PROJECT_HAPPYPILL_CONTENTS,
  georim: PROJECT_GEORIM_CONTENTS,
  pulbatte: PROJECT_PULBATTE_CONTENTS,
  portfolio: PROJECT_PORTFOLIO_CONTENTS,
} as const;

interface ProjectDetailModalProps {
  projectId: ProjectKey;
}
const ProjectDetailModal = ({ projectId }: ProjectDetailModalProps) => {
  const project = PROJECT_MAP[projectId];

  const { openModal, closeModal } = useModal();
  if (!project) return null;
  const handleAction = (action: commonAction) => {
    if (action.type === 'close') closeModal();
    else if (!!action.url) window.open(action.url, '_blank');
  };

  return (
    <Modal>
      <ModalBackDrop />

      <ModalContent className='max-w-container pointer-events-auto top-[40px] flex w-full transform-none overflow-visible bg-transparent pb-[2vh]'>
        <div className='scrollbar-hidden relative max-h-[90vh] w-full overflow-y-auto bg-white px-[clamp(20px,10vw,50px)] py-[clamp(15px,10vw,35px)]'>
          <div className='flex flex-col items-center border-b-1 border-[#D8D8D8] pb-5'>
            <h3 className='text-[clamp(20px,2.5vw,40px)] font-bold'>{project.title}</h3>
            <div className='mt-1 mb-3 flex items-center gap-x-5'>
              <div className='rounded-2xl bg-[#DBEAFE] px-2 py-[3px] text-[clamp(11px,1vw,12px)] text-[#374151]'>
                {project.period}
              </div>
              {project.team && (
                <div className='rounded-2xl bg-[#DBEAFE] px-2 py-[3px] text-[clamp(11px,1vw,12px)] text-[#374151]'>
                  {project.team}
                </div>
              )}
            </div>
            <div className='flex gap-x-[5px]'>
              {project.teckStack.map((badge) => (
                <div
                  key={badge}
                  className='rounded-sm bg-[#F3F4F6] px-2 py-0.5 text-[11px] text-[#6B7280]'
                >
                  {badge}
                </div>
              ))}
            </div>
            <p className='mt-6 text-[clamp(11px,1vw,14px)]'>{project.description}</p>
          </div>
          <div>
            <div className='pt-[clamp(20px,10vw,40px)]'>
              <div className='flex items-center gap-x-1 text-[clamp(16px,2vw,22px)] font-bold'>
                <p>{project.features.icon}</p>
                <h3>{project.features.title}</h3>
              </div>
              <ul className='mt-3 grid gap-y-1.5 px-7'>
                {project.features.items.map((item, idx) => (
                  <li key={idx} className='list-disc text-[clamp(13px,1vw,16px)]'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='pt-[clamp(20px,10vw,40px)]'>
              <div className='flex items-center gap-x-1 text-[clamp(16px,2vw,22px)] font-bold'>
                <p>{project.contributions.icon}</p>
                <h3>{project.contributions.title}</h3>
              </div>
              <div className='grid gap-y-1'>
                {project.contributions.contents.map((contents, idx) => (
                  <div key={idx} className={`${idx !== 0 ? 'mt-[15px]' : 'mt-3'}`}>
                    <div className='flex w-fit items-center gap-x-1 rounded-md border-1 border-[#E5E7EB] px-4 py-2 text-[clamp(13px,1vw,16px)] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.07)]'>
                      <p>{contents.icon}</p>
                      <h4 className='text-[clamp(14px,0.5vw,17px)] font-semibold'>
                        {contents.section}
                      </h4>
                    </div>

                    <ul className='mt-3 grid gap-y-1.5 px-7'>
                      {contents.items.map((item, idx) => (
                        <li key={idx} className='list-disc text-[clamp(13px,1vw,16px)]'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {project.result && (
              <div className='pt-[clamp(20px,10vw,40px)]'>
                <div className='flex items-center gap-x-1 text-[clamp(16px,2vw,22px)] font-bold'>
                  <p>{project.result.icon}</p>
                  <h3>{project.result.title}</h3>
                </div>
                <ul className='mt-3 grid gap-y-1.5 px-7'>
                  {project.result.items.map((item, idx) => (
                    <li key={idx} className='list-disc text-[clamp(13px,1vw,16px)]'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.troubleShooting && (
              <div className='pt-[clamp(20px,10vw,40px)]'>
                <div className='flex items-center gap-x-1 text-[clamp(16px,2vw,22px)] font-bold'>
                  <p>{project.troubleShooting.icon}</p>
                  <h3>{project.troubleShooting.title}</h3>
                </div>
                <ul className='grid gap-y-1'>
                  {project.troubleShooting.contents.map((content, idx) => (
                    <li
                      key={idx}
                      className={`${idx !== 0 ? 'mt-[15px]' : 'mt-3'} text-[clamp(13px,1vw,16px)]`}
                    >
                      <div className='flex w-fit items-center gap-x-1 rounded-md border-1 border-[#E5E7EB] px-4 py-2 text-[clamp(13px,1vw,16px)] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.07)]'>
                        <p>{content.icon}</p>
                        <h4 className='text-[clamp(14px,1vw,17px)] font-semibold'>
                          {content.title}
                        </h4>
                      </div>
                      <ul className='mt-3 grid gap-y-1.5 px-7'>
                        {content.details.map((list, idx) => (
                          <li key={idx} className='list-disc text-[clamp(13px,1vw,16px)]'>
                            <p className='leading-6'>
                              <strong className='mr-1 font-semibold'>{list.type}</strong>
                              {list.content}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.screenShot && (
              <div className='pt-[clamp(20px,10vw,40px)]'>
                <div className='flex items-center gap-x-1 text-[clamp(16px,2vw,22px)] font-bold'>
                  <p> {project.screenShot.icon}</p>
                  <h3>{project.screenShot.title}</h3>
                </div>
                <div className='grid w-full grid-cols-3 grid-rows-[220px] gap-x-3 pt-[15px]'>
                  {project.screenShot.images.map((image, idx) => (
                    <div
                      key={image + idx}
                      className='cursor-pointer border-1 border-[#d4d4d4]'
                      onClick={() => openModal({ type: 'imagePreview', props: { src: image } })}
                    >
                      <img
                        className='h-full object-cover transition hover:opacity-80'
                        src={image}
                        width={390}
                        height={239}
                        loading='lazy'
                        alt={`스크린샷 이미지-${idx}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='z-50 flex flex-col gap-y-1.5'>
          <div className='grid gap-y-1.5'>
            {project.actions?.map((action) => (
              <div
                key={action.type}
                className='flex h-[70px] w-[50px] items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-white p-2.5 pl-0'
              >
                <button className='cursor-pointer' onClick={() => handleAction(action)}>
                  <action.icon size={40} className='text-[#333333] hover:text-[#72767a]' />
                </button>
              </div>
            ))}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ProjectDetailModal;
