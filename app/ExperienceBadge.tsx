import Link from 'next/link'
import right from './right.svg'
import { experience } from './READexperience'
import Skill from './Skill'

interface IExperience {
    role: string,
    company: string,
    abstract: string,
    timeline: string,
    description: string,
    link: string,
    skills: string[]
}
// —
const ExperienceBadge: React.FC<IExperience> = ({ role, company, abstract, timeline, description, link, skills }) => {
    return (
        <div className='my-8 '>
            <Link href={link} target='_blank'>
                <div className='w-full px-8 py-8 hover:cursor-pointer ease-in-out duration-500 hover:bg-gray-100 hover:bg-opacity-50 group rounded-[13px] ease-in-out duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-2xl text-gray-700 pr-3 ease-in-out duration-500 group-hover:text-blue-800 group-hover:pr-4'>{role} · {company}</h1>
                        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#000000" />
                        </svg>
                    </div>

                    <h2 className='italic text-lg ease-in-out duration-500 group group-hover:text-blue-500'>{abstract}</h2>
                    <h3>{timeline}</h3>
                    <p className='pt-5'>{description}</p>
                    <div className='flex flex-wrap mt-4'>
                        {
                            skills.map((curr) => {
                                return <Skill key={curr} skill={curr} />
                            })
                        }
                    </div>

                </div>
            </Link>
        </div>

    )
}

export default ExperienceBadge