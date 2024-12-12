'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import Link from 'next/link'
import Image from 'next/image'
import type { Swiper as SwipeType } from 'swiper/types'
import { WorkSliderBtns } from '@/components/WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate magnam modi.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: '/assets/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate magnam modi.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
    image: '/assets/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'backend',
    title: 'project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate magnam modi.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }],
    image: '/assets/thumb3.png',
    live: '',
    github: '',
  },
]

export default function Work() {
  const [project, setProject] = useState(projects[0])

  function handleSlideChange(swiper: SwipeType) {
    // get current slide index
    const currentIndex = swiper.activeIndex
    // update project state base on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index < project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex size-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github pproject button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex size-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute bottom-0 top-0 z-10 size-full bg-black/10"></div>
                      {/* image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-[22px] size-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-pri"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
