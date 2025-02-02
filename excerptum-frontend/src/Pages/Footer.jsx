import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="w-full bg-chestnut_brown text-soft_beige shadow-lg py-6 px-6 md:px-32 items-center">
            <div className='flex justify-between items-center'>
                <div className="flex flex-col gap-2">
                    <Link className="hover:underline text-sm" to="/about">
                        About
                    </Link>
                    <Link className="hover:underline text-sm" to="/policies/terms-and-conditions">
                        Terms and Conditions
                    </Link>
                    <Link className="hover:underline text-sm" to="/policies/privacy">
                        Privacy
                    </Link>
                </div>

                <p className="text-sm text-wrap">
                    &copy; {new Date().getFullYear()} Excerptum | All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;