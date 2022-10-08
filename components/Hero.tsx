import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import avatar from '../public/assets/home-right.png'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Anurag", 'nerd-who-loves-coffee.tsx', '<AndCodes />'],
    loop: true,
    delaySpeed: 1000,
  })

  return (
    <div className='flex flex-col h-screen space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <div className='relative rounded-full h-32 w-32 mx-auto object-cover'>
        <Image src={avatar} alt='Anurag avatar' />
      </div>

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>
          Software Enginner
        </h2>
        <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='flex items-center justify-center pt-5'>
          <Link href='#about'>
            <div className='heroButton'>About</div>
          </Link>
          <Link href='#skills'>
            <div className='heroButton'>Skills</div>
          </Link>
          <Link href='#experience'>
            <div className='heroButton'>Experience</div>
          </Link>
          <Link href='#resume'>
            <div className='heroButton'>Resume</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
