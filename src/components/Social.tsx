import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'

interface SocialProps {
  containerStyles: string
  iconStyles: string
}

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/nicolasmacedoo' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/nicolas-macedo' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/nicolasconce/' },
  { icon: <FaYoutube />, path: '' },
]

export function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}
