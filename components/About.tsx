import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col items-center justify-evenly px-10 mx-auto relative text-center md:text-left md:flex-row gap-y-4'>
      <h3 className='uppercase md:absolute top-24 tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      {/* TODO: Fix the image layout */}
      <Image
        src='/assets/my-avatar.svg'
        alt='About page avatar'
        width='300'
        height='300'
      />
      <div>
        <h1 className='text-2xl md:text-4xl font-medium md:font-semibold text-center py-2 pt-6'>
          LET ME <span className='text-[#f7ab0a]'>INTRODUCE</span> MYSELF
        </h1>
        <p className='text-base md:text-lg '>
          I have over 4 years of experience as a Software Engineer. I fell in
          love with programming especially with web development after my
          graduation.
          <br />
          <br />I am fluent in
          <i>
            <b className='text-[#f7ab0a]'> HTML, CSS and JavaScript. </b>
          </i>
          <br />
          <br />
          My field of interest is to build web applications. And also in areas
          related to modern web technologies like &nbsp;
          <i>
            <b className='text-[#f7ab0a]'>Deno, Server-side render etc. </b>
          </i>
          <br />
          <br />
          Whenever possible, I also apply my passion for open-source software
          development with <b className='text-[#f7ab0a]'>Node.js</b> and Modern
          Javascript Library and Frameworks like
          <i>
            <b className='text-[#f7ab0a]'> React.js and Next.js.</b>
          </i>
        </p>
      </div>
    </div>
  )
}

export default About
