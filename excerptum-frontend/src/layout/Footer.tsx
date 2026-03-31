import { Link } from 'react-router-dom';
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill, RiTiktokFill } from 'react-icons/ri';

const Footer = () => {

    return (
        <footer className='items-center w-full py-6 shadow-lg bg-chestnut_brown text-soft_beige'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-start gap-2 px-4 md:px-36'>
                    <Link className='text-sm hover:underline' to='/about'>
                        About
                    </Link>
                    <Link className='text-sm hover:underline' to='/policies/terms-and-conditions'>
                        Terms and Conditions
                    </Link>
                    <Link className='text-sm hover:underline' to='/policies/privacy'>
                        Privacy Policy
                    </Link>
                    <Link className='text-sm hover:underline' to='/policies/cookies'>
                        Cookies Policy
                    </Link>
                </div>

                <div className='flex flex-col items-end gap-2 px-4 md:items-center md:px-24'>
                    <div className='flex gap-4'>
                        <a href='https://www.facebook.com' target='_blank'>
                            <RiFacebookBoxFill
                                size={34}
                            />
                        </a>
                        <a href='https://www.instagram.com' target='_blank'>
                            <RiInstagramFill
                                size={34}
                            />
                        </a>
                        <a href='https://www.linkedin.com' target='_blank'>
                            <RiLinkedinBoxFill
                                size={34}
                            />
                        </a>
                        <a href='https://www.tiktok.com' target='_blank'>
                            <RiTiktokFill
                                size={34}
                            />
                        </a>
                    </div>
                    <p className='text-sm text-right text-wrap'>
                        &copy; {new Date().getFullYear()} Excerptum | All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;