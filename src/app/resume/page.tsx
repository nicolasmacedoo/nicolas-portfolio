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
    'Sou um desenvolvedor backend apaixonado por criar soluções eficientes e escaláveis. Sempre em busca de evolução, mantenho-me atualizado com as tendências do setor e aprimoro constantemente minhas habilidades. Destaco-me pela comunicação clara, capacidade de resolução de problemas e comprometimento com resultados de alta qualidade.',
  info: [
    {
      fieldName: 'Nome',
      fieldValue: 'Nicolas Macedo',
    },
    {
      fieldName: 'Telefone',
      fieldValue: '+55 11 91355-7997',
    },
    {
      fieldName: 'Experiência',
      fieldValue: '2+ Anos',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'nicolas.01',
    },
    {
      fieldName: 'Nacionalidade',
      fieldValue: 'Brasileiro',
    },
    {
      fieldName: 'Email',
      fieldValue: 'nicolas.conceicao01@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Disponível',
    },
    {
      fieldName: 'Idiomas',
      fieldValue: 'Português, Inglês',
    },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Minhas experiências',
  description:
    'Com experiência sólida em desenvolvimento de software, concentro meus esforços na criação de soluções inovadoras e eficientes para atender às necessidades de negócios.',
  items: [
    {
      company: 'TOTVS',
      position: 'Analista Suporte Técnico',
      duration: 'Mar 2022 - Presente',
    },
    {
      company: 'TOTVS',
      position: 'Desenvolvedor de Software',
      duration: 'Fev 2023 - Abr 2024',
    },
    {
      company: 'Eco Services',
      position: 'Desenvolvedor de Software',
      duration: 'Jan 2021 - Fev 2022',
    },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Minha educação',
  description:
    'Construí uma base sólida para atuar na área de desenvolvimento por meio da faculdade e ensino técnico, busco continuamente novos conhecimentos e me manter atualizado.',
  items: [
    {
      institution: 'FIAP',
      degree: 'Análise e Desenvolvimento de Sistemas',
      duration: '2021-2023',
    },
    {
      institution: 'ETEC de Sao Paulo (ETESP)',
      degree: 'Técnico em Informática',
      duration: '2012-2014',
    },
    {
      institution: 'Codecademy',
      degree: 'Javascript Course',
      duration: '2021',
    },
    {
      institution: 'Codecademy',
      degree: 'SQL Course',
      duration: '2021',
    },
  ],
}

const skills = {
  title: 'Minhas habilidades',
  description:
    'Especializado em desenvolvimento backend, tenho experiência na criação de APIs robustas e escaláveis, integrando bancos de dados e soluções de cloud. ',
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
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
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
