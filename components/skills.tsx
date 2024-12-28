'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionView } from '@/lib/hooks';
import { motion, Variants } from 'framer-motion';

const fadeInAnimationsVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionView('Skills');

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28">
      <SectionHeading title="My Skills" />
      <div className="flex items-center justify-center gap-2 text-lg flex-wrap">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="px-5 py-4 bg-white rounded-xl text-gray-500 font-semibold border border-gray-200"
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}>
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
