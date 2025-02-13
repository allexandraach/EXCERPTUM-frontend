import { Helmet } from 'react-helmet';
import { GiBookmark } from "react-icons/gi";
import { Container } from '../ComponentUtils/BoxComponents/Container';
import StampCard from '../ComponentUtils/PageComponents/Home/StampCard';

const Home = () => {
    return (
        <Container keyText='homeContainer' extraClass='bg-[#fdf8f2] px-0 py-0'>
            <Helmet>
                <title>Excerptum | Home</title>
                <meta name='description' content='Excerptum | Home' />
            </Helmet>

            <section className="relative rounded-se-3xl p-8 bg-[#fdf8f2] shadow-lg">
                {/* Notebook lines */}
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="absolute left-0 right-0 h-px bg-gray-300"
                        style={{ top: `${index * 1.8}rem` }}
                    ></div>
                ))}
                <p className="text-lg md:text-xl text-left relative z-10 pl-4">
                    Organize ideas into collections of your choice.
                </p>
                <p className="text-lg md:text-xl text-left relative z-10 pl-4">
                    Share them with your friends.
                </p>
            </section>
            {/* ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}  */}
            <section
                // ref={sectionRef}
                className={`flex flex-col text-center mb-8 mx-2 md:mx-0 
                    transition-all duration-700`}>

                <h2 className='text-2xl md:text-3xl py-2 my-6 font-bold'>
                    Why Excerptum?
                </h2>
                <div className="mx-4 flex flex-col md:flex-row lg:flex-row items-stretch justify-center gap-6 md:gap-4 lg:gap-40 text-white">
                    <StampCard
                        title='Lorem ipsum dolor'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, doloremque.'
                    />
                    <StampCard
                        title='Lorem ipsum dolor'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, doloremque.'
                    />
                    <StampCard
                        title='Lorem ipsum dolor'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, doloremque.'
                    />
                </div>
            </section>
        </Container>
    );
};

export default Home;
