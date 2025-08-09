import { GiBookmarklet } from 'react-icons/gi';

export default function StampCard({ title, text }) {
    return (
        <div className='relative flex flex-col items-center flex-grow w-full md:w-1/3 lg:w-1/3 p-4 p-6 pb-12 text-soft_beige bg-magenta border-[10px] border-dark_magenta outline-[5px] outline-dashed outline-dark_magenta rounded-lg'>
            <div className='flex items-center gap-2'>
                <p className='mt-4 mb-2 text-lg font-semibold uppercase'>{title}</p>
                <GiBookmarklet
                    size={40}
                />
            </div>
            <p className='px-4 text-center'>
                {text}
            </p>
        </div>
    );
}