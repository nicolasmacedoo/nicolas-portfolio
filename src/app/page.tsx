import { DownloadButton } from '@/components/DownloadButton'
import { Photo } from '@/components/Photo'
import { Social } from '@/components/Social'
import { Stats } from '@/components/Stats'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          {/* text */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              {/* Hello I&apos;m <br />{' '} */}
              Olá, eu sou <br />
              <span className="text-accent">Nicolas Macedo</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              {/* I excel at crafiting elegant digital experiences and I am
              proficient in various programming languages and technologies. */}
              Eternamente curioso e em constante evolução, dedico-me a
              transformar desafios complexos em soluções elegantes, uma linha de
              código por vez.
            </p>
            {/* button and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <DownloadButton />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="size-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}
