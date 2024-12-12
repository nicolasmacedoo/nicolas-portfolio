'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+55 11 99999-9999',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'nicolas.conceicao01@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'São Paulo, SP - Brazil',
  },
]

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                nihil sapiente pariatur id totam.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web development</SelectItem>
                    <SelectItem value="mobile">Mobile development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type you message here."
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex size-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:size-[72px]">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
