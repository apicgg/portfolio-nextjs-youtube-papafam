import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20 p-5'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center'>
        {/* social icons */}
        <SocialIcon
          url='https://github.com/apicgg'
          target='_blank'
          rel='noopener noreferrer'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/anurag-pramanik-345843125/'
          target='_blank'
          rel='noopener noreferrer'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://twitter.com/titas_p'
          target='_blank'
          rel='noopener noreferrer'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://twitch.tv/apicgg'
          target='_blank'
          rel='noopener noreferrer'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center text-gray-400 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get In Touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header
