import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { AiOutlineProfile } from "react-icons/ai";
// import { AiFillProfile } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa6";
import { BiSolidBookAlt } from "react-icons/bi";
// import { useAuth } from '../../app/context/Auth.context';

export function TopNavbar({ children, navLinks }) {

  // const { isLoggedIn } = useAuth();

  const [menuState, setMenuState] = useState(false);

  function handleState() {
    setMenuState(() => !menuState);
  }

  const closeMenu = () => {
    setMenuState(false);
  };

  const navElement = navLinks?.map((element, index) => {
    return (
      <NavLink
        className={({ isActive }) =>
          `flex items-center justify-center self-stretch hover:bg-primary px-4 ${isActive ? 'bg-primary' : ''}`}
        key={index}
        to={element.link}
        onClick={closeMenu}
      >
        {element.page}
      </NavLink>
    );
  });

  return (
    <div className="pageContainer sticky top-0 z-50">
      <div
        className={`
            flex
            flex-row
            justify-between
            md:px-32 
            px-4
            relative
            z-30
            items-center
            bg-navbar_bg
            text-navbar_font_color
            w-screen 
            shadow-lg
            h-14
            `}>

        <Link to="/" className="text-3xl font-['Satisfy'] ml-2 mt-1.5">
          Excerptum
        </Link>

        <nav className={`linkWrapper flex h-full items-center max-md:hidden`}>
          {navElement}
        </nav>

        <div
          className="
               iconMenuWrapper
               md:hidden
               cursor-pointer
               rounded
               absolute
               right-2
               p-1
               hover:bg-[#ffffff18]
               transition-colors
               duration-300
               "
          onClick={handleState}>
          {navLinks ? (
            menuState ? (
              <FaBookOpen size={25} className="transition-transform duration-300 transform rotate-0" />
            ) : (
              <BiSolidBookAlt size={25} className="transition-transform duration-300 transform rotate-180" />
            )
          ) : null}
        </div>
      </div>

      <nav
        className={`
            dropDownWrapper 
            transition-all duration-500
            flex flex-col
            z-10
            absolute
            rounded
            border-t-2
            right-0
            shadow-md
            ${menuState ? 'opacity-1 translate-y-0' : 'opacity-0 invisible -translate-y-full'} 
            text-white
            w-1/3
            bg-navbar_bg
            `}>
        {navElement}
      </nav>

      <div className="childrenContainer">{children}</div>
    </div>
  );
}
