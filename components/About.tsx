import Image from 'next/image'
import aboutRight from '../public/assets/about-right.svg'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col items-center justify-evenly px-10 mx-auto relative text-center md:text-left md:flex-row'>
      <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <div>
        <Image
          src={aboutRight}
          alt='About page image'
          className='rounded-full w-56 h-56 object-cover flex-shrink-0 mb-20 md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
      </div>
    </div>
  )
}

export default About
