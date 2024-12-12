'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3, FaReact, FaNode, FaJava, FaAws } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'

import {
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
} from 'react-icons/si'

const about = {
  title: 'Sobre mim',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluiptates quibusdam, sunt explicabo inventore.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Nicolas Macedo',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+55 11 99999-9999',
    },
    {
      fieldName: 'Experience',
      fieldValue: '2+ Years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'nicolas.01',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Brazilian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'nicolas.conceicao01@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Portuguese, English',
    },
  ],
}

const experience = {
  icon: '/assets/resume/basge.svg',
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluiptates quibusdam, sunt explicabo inventore.',
  items: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2021',
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
    },
    {
      company: 'Tech Academy',
      position: 'Teaching Assistante',
      duration: '2019 - 2020',
    },
    {
      company: 'Digital Agency',
      position: 'UI/UX Designer',
      duration: '2018 - 2019',
    },
    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2017 - 2018',
    },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluiptates quibusdam, sunt explicabo inventore.',
  items: [
    {
      institution: 'FIAP',
      degree: 'Analise e Desenvolvimento de Sistemas',
      duration: '2021-2023',
    },
    {
      institution: 'ETEC de Sao Paulo (ETESP)',
      degree: 'Tecnico em informatica',
      duration: '2012-2014',
    },
    {
      institution: 'Online Course',
      degree: 'Programming Course',
      duration: '2020 - 2021',
    },
    {
      institution: 'Tech Institute',
      degree: 'Certified Web Developer',
      duration: '2019',
    },
    {
      institution: 'Design School',
      degree: 'Diploma in Graphic Design',
      duration: '2016 - 2018',
    },
    {
      institution: 'Community College',
      degree: 'Associate Degree in Computer Science',
      duration: '2014 - 2016',
    },
  ],
}

const skills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluiptates quibusdam, sunt explicabo inventore.',
  skillList: [
    {
      name: 'html 5',
      icon: <FaHtml5 />,
    },
    {
      name: 'css 3',
      icon: <FaCss3 />,
    },
    {
      name: 'typescript',
      icon: <SiTypescript />,
    },
    {
      name: 'react.js',
      icon: <FaReact />,
    },
    {
      name: 'next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'tailwind.css',
      icon: <SiTailwindcss />,
    },
    {
      name: 'node.js',
      icon: <FaNode />,
    },
    {
      name: 'nest.js',
      icon: <SiNestjs />,
    },
    {
      name: 'java',
      icon: <FaJava />,
    },
    {
      name: 'postgres',
      icon: <SiPostgresql />,
    },
    {
      name: 'golang',
      icon: <FaGolang />,
    },
    {
      name: 'aws',
      icon: <FaAws />,
    },
  ],
}

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-1.5 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        // <li
                        //   key={index}
                        //   className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        // >
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-1.5 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {skills.description}
                  </p>
                  <div>
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                                  <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
