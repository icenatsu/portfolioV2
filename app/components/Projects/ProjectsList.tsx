'use client'
import { useEffect, useCallback, useRef } from 'react';
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./../../../app/page";

type ProjectCardProps = {
  projectsData: ProjectData[];
};

const ProjectsList = ({ projectsData }: ProjectCardProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          entry.target.classList.add('test');
        }
      });
    });

    const currentRefs = cardRefs.current.slice();

    currentRefs.forEach(card => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      currentRefs.forEach(card => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.id}
          ref={setCardRef(index)}
          title={project.title}
          description={project.description}
          preview={project.preview}
          code={project.code}
          cover={project.cover}
          stacks={project.stacks}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
