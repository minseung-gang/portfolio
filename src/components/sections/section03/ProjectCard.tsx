import useModalStore from '@/stores/useModalStore';

import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
  };
  projectId: string;
}

const ProjectCard = ({ project, projectId }: ProjectCardProps) => {
  const { openModal } = useModalStore();

  return (
    <div
      className='card relative overflow-hidden rounded-md border-1 border-[#bebebe] shadow-[2px_2px_8px_2px_rgba(0,0,0,0.2)]'
      onClick={() => openModal({ type: 'projectDetail', props: { projectId } })}
    >
      <div className='grid grid-rows-[1fr_1.2fr]'>
        <img className='w-full' src={project.image} alt={project.title} width={329} height={185} />

        <div className='grid items-stretch px-6 pt-6 pb-4'>
          <div>
            <h3 className='mb-[10px] text-[clamp(16px,1.5vw,24px)] font-bold lg:text-[24px]'>
              {project.title}
            </h3>
            <p className='text-[clamp(12px,1vw,14px)] leading-4'>{project.description}</p>
          </div>
          <div className='flex items-center gap-x-[5px]'>
            {project.tags.map((tag) => (
              <div
                key={project.title + tag}
                className='rounded-md bg-[#4b4b4b] px-[8px] py-[7px] text-[clamp(11px,1vw,12px)] font-medium text-white'
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
