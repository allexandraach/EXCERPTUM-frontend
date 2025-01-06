import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className='pl-6 md:px-32 w-full bg-chestnut_brown flex shadow-lg items-center justify-between text-soft_beige opacity-90 h-32 absolute bottom-0'>
            <div className='flex flex-col'>
                <Link
                    className='pb-2 hover:underline text-sm'
                    to='/about'
                >
                    About
                </Link>
                <Link
                    className='pb-2 hover:underline text-sm'
                    to='/policies/terms-and-conditions'
                >
                    Terms and Conditions
                </Link>
                <Link
                    className='pb-2 hover:underline text-sm'
                    to='/policies/privacy'
                >
                    Privacy
                </Link>
            </div>
            <p className='ml-8 md:ml-0 text-sm text-wrap'> &copy; Excerptum 2024 | All rights reserved </p>
        </footer>
    )
}

export default Footer;