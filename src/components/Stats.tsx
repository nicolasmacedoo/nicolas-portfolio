'use client'

import CountUp from 'react-countup'

// const stats = [
//   {
//     num: 12,
//     text: 'Years of Experience',
//   },
//   {
//     num: 26,
//     text: 'Projects completed',
//   },
//   {
//     num: 8,
//     text: 'Techonologies mastered',
//   },
//   {
//     num: 500,
//     text: 'Code commits',
//   },
// ]

const stats = [
  {
    num: 3,
    text: 'Anos de experiência',
  },
  {
    num: 5,
    text: 'Projetos concluídos',
  },
  {
    num: 8,
    text: 'Tecnologias dominadas',
  },
  {
    num: 297,
    text: 'Code commits',
  },
]

export function Stats() {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
                <p
                  className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
