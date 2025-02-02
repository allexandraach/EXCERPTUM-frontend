import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaMapPin } from "react-icons/fa6";
import { isMobile } from 'react-device-detect';
import { Container } from '../ComponentUtils/BoxComponents/Container';

const Home = () => {

    return (
        <Container extraClass='mx-0 px-0 md:px-0 md:mx-0'>
            <Helmet>
                <title>Excerptum | Home</title>
                <meta name='description' content='Excerptum | Home' />
            </Helmet>

            {isMobile ? <section className="relative bg-home_hero_img_1 bg-cover bg-center">
                {/* Brownish overlay */}
                <div className="absolute inset-0 bg-chestnut_brown opacity-80"></div>

                <div className="relative z-10 p-6 text-soft_beige shadow-lg max-w-lg mx-auto">
                    <Link to="/" className="text-3xl md:text-4xl font-satisfy ml-2 pt-1.5">
                        Excerptum
                    </Link>
                    <p className="mt-6 pl-2 text-lg md:text-xl">
                        Your wealth of knowledge, elegantly arranged in a single place.
                    </p>
                    <div className='flex'>
                        <Link
                            to='/sign-up'
                            className="mt-4 ml-2 p-0.5 text-center md:p-2 w-1/3 text-lg rounded-md text-soft_beige bg-magenta hover:bg-dark_magenta transition duration-300 border-dark_magenta shadow-lg cursor-pointer">
                            Sign Up
                        </Link>
                        <Link
                            to='/sign-in'
                            className="mt-4 ml-2 p-0.5 md:p-2 w-1/3 text-lg rounded-md text-soft_beige underline cursor-pointer"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </section> :
                <section className='flex bg-chestnut_brown'>
                    <div className="flex flex-col justify-evenly relative z-10 h-96 mx-20 p-6 pt-0 text-soft_beige mx-auto">
                        <Link to="/" className="text-3xl md:text-4xl font-satisfy ml-2">
                            Excerptum
                        </Link>
                        <p className="mt-10 pl-2 text-lg md:text-xl">
                            Your wealth of knowledge, elegantly arranged in a single place.
                        </p>
                        <div className='flex'>
                            <Link
                                to='/sign-up'
                                className="mt-4 ml-2 p-0.5 text-center md:p-2 w-1/6 text-lg rounded-md text-soft_beige bg-magenta hover:bg-dark_magenta transition duration-300 border-dark_magenta shadow-lg cursor-pointer">
                                Sign Up
                            </Link>
                            <Link
                                to='/sign-in'
                                className="mt-4 ml-2 p-0.5 md:p-2 text-lg rounded-md text-soft_beige underline cursor-pointer"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                    <img src="src/images/home/hero_img_1.png" alt="Open Book" height={500} width={500} />
                </section>}

            <section className="relative p-6 mx-auto bg-[#fdf8f2] rounded-lg shadow-lg">
                {/* Notebook lines */}
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="absolute left-0 right-0 h-px bg-gray-300"
                        style={{ top: `${index * 2}rem` }} // Adjust the spacing between lines
                    ></div>
                ))}
                <p className="text-lg md:text-xl mb-4 text-left relative z-10 pl-4" style={{ top: "1rem" }}>Organize ideas into collections of your choice.</p>
                <p className="text-lg md:text-xl text-left relative z-10 pl-4" style={{ top: "0.5rem" }}>Share them with your friends.</p>
            </section>

            {/* <section className="relative bg-home_hero_img_2 bg-cover bg-center text-center">
                <div className="absolute inset-0 bg-soft_beige opacity-80"></div>
                <p className="mt-6 p-2 text-lg md:text-xl h-32">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </section> */}


            {/* <section className="relative p-6 flex flex-col justify-center items-center max-w-lg mx-auto bg-[#fffae5] shadow-2xl"> */}
            {/* Pin icons */}
            {/* <div className="absolute -top-4 flex w-full justify-between">
                    <FaMapPin size={28} className="text-red-500 rotate-12" />
                    <FaMapPin size={28} className="text-red-500 -rotate-12" />
                </div>
            </section> */}
            {/* Sticky note content */}
            {/* <p className="text-lg md:text-xl mb-4 text-center">Organize ideas into collections of your choice.</p>
            <p className="text-lg md:text-xl text-center">Share them with your friends.</p> */}
        </Container>
    )
}

export default Home;