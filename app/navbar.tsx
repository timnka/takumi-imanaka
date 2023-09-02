import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="w-full flex justify-center absolute">
            <div className='w-96 text-xl py-6 bg-slate-200 flex justify-around'>
                <p>about</p>
                <p>experience</p>
                <p>projects</p>
            </div>
        </div>
    )
}