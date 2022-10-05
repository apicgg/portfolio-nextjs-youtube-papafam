import Image from 'next/image'
import myAvatar from '../public/assets/my-avatar.svg'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col items-center justify-evenly px-10 mx-auto relative text-center md:text-left md:flex-row'>
      <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <Image src={myAvatar} alt='About page avatar' width='220' height='220' />
    </div>
  )
}

export default About
