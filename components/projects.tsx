'use client';
import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveAction } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      console.log(3);

      setActiveAction('Projects');
    }
  }, [inView, setActiveAction]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading title="My Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
