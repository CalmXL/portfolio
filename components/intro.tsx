'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[200rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}>
            <Image
              src="https://pic.616pic.com/bg_w1180/00/04/36/vXneBaclRy.jpg"
              alt="zsmc"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            💗
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row gap-2 justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}>
        <Link
          href="#contact"
          className="group bg-gray-900 p-4 text-white flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer">
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          className="group bg-white p-4 text-gray-700 flex items-center rounded-full gap-2 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          download>
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="bg-white text-gray-900 flex items-center rounded-full px-7 p-4 gap-2 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15]active:scale-105 transition cursor-pointer border border-black/10">
          <BsLinkedin className="opacity-70" />
        </a>

        <a
          href="https://github.com/CalmXL/portfolio"
          target="_blank"
          className="bg-white text-gray-900 flex items-center rounded-full px-7 p-4 gap-2 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15]active:scale-105 transition cursor-pointer border border-black/10">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
