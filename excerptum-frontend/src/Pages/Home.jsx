import { Helmet } from 'react-helmet';
// import { GiBookmark } from 'react-icons/gi';
import { Container } from '../ComponentUtils/BoxComponents/Container';
import StampCard from '../ComponentUtils/PageComponents/Home/StampCard';
import NotebookCard from '../ComponentUtils/PageComponents/Home/NotebookCard';

const Home = () => {
    return (
        <Container keyText='homeContainer' extraClass='bg-[#fdf8f2] px-0 pt-0'>
            <Helmet>
                <title>Excerptum | Home</title>
                <meta name='description' content='Excerptum | Home' />
            </Helmet>
            <section>
                <NotebookCard
                    length={5}
                    paragraphs={['Organize ideas into collections of your choice.', 'Share them with your friends.']}
                />
                <section className='flex flex-col gap-12 mx-4 my-10 md:gap-0'>
                    <div className='flex flex-col items-center text-right md:flex-row'>
                        <img src='/images/home/notebook.webp' className='object-cover w-full text-right rounded-lg shadow-lg md:w-1/2 h-80' alt='notebook illustration' />
                        <div className='relative w-full p-8 border-2 border-dotted rounded-md shadow-lg md:w-1/2 bg-soft_beige border-dark_brown'>
                            <h2 className='text-2xl font-bold md:text-3xl text-dark_brown'>Lorem Ipsum</h2>
                            <p className='mt-4 text-lg text-dark_brown'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                            <div className='absolute w-6 h-6 border-2 rounded-full -left-3 top-1/4 border-dark_brown bg-soft_beige'></div>
                            <div className='absolute w-6 h-6 border-2 rounded-full -left-3 top-1/2 border-dark_brown bg-soft_beige'></div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center text-left md:flex-row-reverse'>
                        <img src='/images/home/typewriter.webp' className='object-cover w-full rounded-lg shadow-lg md:w-1/2 h-80' alt='typewriter illustration' />
                        <div className='relative w-full p-8 border-2 border-dotted rounded-md shadow-lg md:w-1/2 bg-soft_beige border-dark_brown'>
                            <h2 className='text-2xl font-bold md:text-3xl text-dark_brown'>Lorem Ipsum</h2>
                            <p className='mt-4 text-lg text-dark_brown'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className='absolute w-6 h-6 border-2 rounded-full -right-3 top-1/4 border-dark_brown bg-soft_beige'></div>
                            <div className='absolute w-6 h-6 border-2 rounded-full -right-3 top-1/2 border-dark_brown bg-soft_beige'></div>
                        </div>
                    </div>
                </section>
                <div
                    className='flex flex-col mx-2 mb-8 text-center transition-all duration-700 md:mx-0'>
                    <h2 className='py-2 my-6 text-2xl font-bold text-dark_brown md:text-3xl'>
                        Why Excerptum?
                    </h2>
                    <div className='flex flex-col items-stretch justify-center gap-6 mx-4 text-white md:flex-row lg:flex-row md:gap-4 lg:gap-40'>
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
                </div>
            </section>
            {/* <section className='flex flex-col gap-12 my-8 md:gap-0'>
                <div className='flex flex-col items-center md:flex-row'>
                    <img src='/images/home/typewriter.jpg' className='object-cover w-full rounded-lg md:w-1/2 h-80' alt='Description' />
                    <div className='w-full p-6 md:w-1/2 md:p-10 bg-chestnut_brown text-soft_beige'>
                        <h2 className='text-2xl font-bold md:text-3xl'>Title Here</h2>
                        <p className='mt-4 text-lg'>Your supporting text goes here. Make it engaging and informative.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center md:flex-row-reverse'>
                    <img src='/images/home/typewriter.jpg' className='object-cover w-full rounded-lg md:w-1/2 h-80' alt='Description' />
                    <div className='w-full p-6 md:w-1/2 md:p-10 bg-dark_brown text-soft_beige'>
                        <h2 className='text-2xl font-bold md:text-3xl'>Title Here</h2>
                        <p className='mt-4 text-lg'>Another paragraph explaining your point.</p>
                    </div>
                </div>
            </section> */}
        </Container>
    );
};

export default Home;
