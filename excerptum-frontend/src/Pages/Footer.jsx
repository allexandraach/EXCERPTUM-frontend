import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="px-6 md:px-32 w-full bg-navbar_bg flex shadow-lg items-center justify-between text-navbar_font_color opacity-90 h-32 absolute bottom-0">
            <div className="flex flex-col">
                <Link
                    className="pb-2 hover:underline"
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className="pb-2 hover:underline"
                    to="/policies/terms-and-conditions"
                >
                    Terms and Conditions
                </Link>
                <Link
                    className="pb-2 hover:underline"
                    to="/policies/privacy"
                >
                    Privacy
                </Link>
            </div>
            <p> &copy; Excerptum 2024 | All rights reserved </p>
        </footer>
    )
}

export default Footer;