import { Link } from 'react-router-dom';

const HomeHeader = () => {

    return (
        <header className='relative bg-center bg-cover bg-home_hero_img_1 md:bg-none md:bg-chestnut_brown'>
            {/* Overlay for small screens */}
            <div className='absolute inset-0 bg-chestnut_brown opacity-80 md:hidden'></div>
            <div className='flex justify-between'>
                {/* Text Section */}
                <div className='relative z-10 max-w-lg p-6 mx-auto text-soft_beige md:flex md:flex-col md:justify-evenly md:h-96 md:mx-20 md:p-6 md:pt-0 animate-fadeIn'>
                    <Link to='/' className='text-3xl md:text-4xl font-satisfy ml-2 pt-1.5'>
                        Excerptum
                    </Link>
                    <p className='pl-2 mt-6 text-lg md:text-xl md:mt-10'>
                        Your wealth of knowledge, elegantly arranged in a single place.
                    </p>
                    <div className='flex md:flex-col lg:flex-row'>
                        <Link
                            to='/sign-up'
                            className='w-1/3 md:w-1/2 lg:w-fit mt-4 ml-2 p-0.5 md:p-2 text-lg text-center text-nowrap rounded-md text-soft_beige bg-magenta hover:bg-dark_magenta transition-transform duration-300 hover:scale-110 shadow-lg cursor-pointer'
                        >
                            Sign Up
                        </Link>
                        <Link
                            to='/sign-in'
                            className='mt-4 ml-2 p-0.5 md:p-2 text-lg text-nowrap rounded-md text-soft_beige underline cursor-pointer hover:scale-110 transition-transform duration-300'
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
                {/* Image for larger screens */}
                <img
                    src='public/images/home/hero_img_1.webp'
                    alt='Open Book'
                    className='hidden md:block animate-slideIn'
                    height={500}
                    width={800}
                />
            </div>
        </header>
    )
}
export default HomeHeader;