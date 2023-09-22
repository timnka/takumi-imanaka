import Image from 'next/image'
import Link from 'next/link'
import ExperienceBadge from './ExperienceBadge'
import { experience } from './READexperience'
import ProjectBadge from './ProjectBadge'
export default function Home() {
  return (
    <main className='w-full flex flex-col lg:flex-row px-8 lg:px-0 bg-gray-300 text-gray-600'>
      { /* Profile */}
      <div className='lg:sticky lg:top-0 w-full lg:w-1/2 lg:max-h-screen flex flex-col items-center'>
        <div className='flex flex-col'>
          <div className='pt-48'>
            <h1 className='text-5xl font-bold text-blue-800'>Takumi Imanaka</h1>
            <h2 className='text-3xl font-bold text-blue-500 pt-2'>Software Engineer</h2>
            <h3 className='text-2xl text-gray-500 pt-4'>An energetic, self starting, and ambitious engineer.</h3>

            {/* Socials Links */}
            <div className='flex items-center mt-4'>
              {/* Linkedin */}
              <Link href='https://www.linkedin.com/in/takumi-imanaka/' target="_blank" className='mr-8'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" className="bi bi-linkedin hover:fill-sky-700 hover:cursor-pointer hover:scale-105 transition ease-in" viewBox="0 0 17 17">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>

              {/* Github Link */}
              <Link href='https://github.com/timnka' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="35" height="35" fill='gray' className="bi bi-linkedin hover:fill-black hover:cursor-pointer hover:scale-105 transition ease-in"><path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z" /></svg>
              </Link>

            </div>

          </div>

          {/* Navigation Links */}
          <div className='text-gray-700 pt-24'>
            <div className='flex flex-col'>
              {/* ABOUT Link */}
              <Link href='#about' className='flex py-2 group max-w-fit'>
                <div className='flex items-center'>
                  <div className='border-t-2 border-gray-500 w-8 ease-in-out duration-300 group-hover:w-16 group-hover:border-blue-500 group-hover:cursor-pointer'></div>
                </div>
                <h1 className='pl-3 group-hover:cursor-pointer'>about</h1>
              </Link>

              {/* EXPERIENCE Link */}
              <Link href='#experience' className='flex py-2 group max-w-fit'>
                <div className='flex items-center'>
                  <div className='border-t-2 border-gray-500 w-8 ease-in-out duration-300 group-hover:w-16 group-hover:border-blue-500 group-hover:cursor-pointer'></div>
                </div>
                <h1 className='pl-3 group-hover:cursor-pointer'>experience</h1>
              </Link>

              {/* projects Link */}
              <Link href='#projects' className='flex py-2 group max-w-fit'>
                <div className='flex items-center'>
                  <div className='border-t-2 border-gray-500 w-8 ease-in-out duration-300 group-hover:w-16 group-hover:border-blue-500 group-hover:cursor-pointer'></div>
                </div>
                <h1 className='pl-3 group-hover:cursor-pointer'>projects</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='lg:w-1/2 bg-gray-300 lg:pr-36 lg:h-full flex flex-col'>

        <h1 id='about' className='text-3xl text-blue-500 font-bold pt-48 '>About.</h1>
        <div>
          {/* About  */}
          <div  className='text-lg px-5 py-16 flex flex-col'>
            
            <p className='pb-4'>Back in 2010, my 11 year old self decided the default iPod touch theme was too boring. (Yes, an iTouch. Not even an iPhone). Using a process called Jailbreaking, I was able to make tweaks to the core UI. This sounds more impressive than it actually was, as all I really did was blindly follow a YouTube tutorial. I remember feeling like the next Zuckerburg seeing the terminal feed scroll through the screen as the modules were downloading. Although trivial, this was my catalyst into the world of software.</p>
            <p>Fast forward to today, I have completed my B.S. in Computer Science from UC Davis, and worked as a Software Engineer at DocuSign. I have experience as a Full Stack Engineer, working on both frontend and backend systems. I am proficient with modern technologies such as React.js, Next.js, Node.js, TypeScript, C#, and Tailwind CSS. I am dedicated to delivering lasting impacts through my work, and am looking for Full-time Software Engineering opportunities.</p>
          </div>

          {/* Experience Component */}
          <div id='experience'>
            <h1 className='text-3xl text-blue-500 font-bold'>Experience.</h1>
            {
              experience.map((curr) => {
                return (
                  <ExperienceBadge
                    key={curr.company}
                    role={curr.role}
                    company={curr.company}
                    abstract={curr.abstract}
                    timeline={curr.timeline}
                    description={curr.description}
                    link={curr.link}
                    skills={curr.skills} />
                )
              })
            }
          </div>

          <div id='projects'>
            <h1 className='text-3xl text-blue-500 font-bold'>Projects.</h1>
            <ProjectBadge
              name='ClickClack'
              description='ClickClack is a web app that allows users to measure their typing speeds. It is built using React and Javascript on the front-end, where users are timed on a 30 second interval to type as many words as they  can, as fast as they can. After the timer is up, the user input is sent to a Node.js server to compute the average words per minute typed, as well as the user’s accuracy.'
              link='https://github.com/timnka/ClickClack'
              skills={['React', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'Git']}
            ></ProjectBadge>
          </div>
        </div>


      </div>
    </main>
  )
}
