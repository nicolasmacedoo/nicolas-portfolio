'use client'

import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

export function MobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mb-40 mt-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Nicolas<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${link.path === pathname && 'border-b-2 border-accent text-accent'} text-xl capitalize transition-all hover:text-accent`}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
