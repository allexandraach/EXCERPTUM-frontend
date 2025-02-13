import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { AiOutlineProfile } from 'react-icons/ai';
// import { AiFillProfile } from 'react-icons/ai';
import { FaBookOpen } from 'react-icons/fa6';
import { BiSolidBookAlt } from 'react-icons/bi';
// import { useAuth } from '../../app/context/Auth.context';

export function Navbar({ children, navLinks }) {

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
          `hover:bg-magenta trasition duration-300 px-4 py-2 ${isActive ? 'bg-magenta' : ''}`}
        key={index}
        to={element.link}
        onClick={closeMenu}
      >
        {element.page}
      </NavLink>
    );
  });

  return (
    <header className='sticky'>
      <div className={`
          flex
          flex-row
          justify-between
          md:px-32 
          
          px-4
          z-30
          items-center
          bg-chestnut_brown
          text-soft_beige
          shadow-lg
          `}>

        <Link to='/' className='py-2 text-3xl font-satisfy ml-2 mt-1.5'>
          Excerptum
        </Link>

        <nav className='sm:hidden md:block'>
          {navElement}
        </nav>

        <div
          className='
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
             '
          onClick={handleState}>
          {navLinks ? (
            menuState ? (
              <FaBookOpen
                size={25}
                className='transition-transform duration-300 transform rotate-0'
              />
            ) : (
              <BiSolidBookAlt
                size={25}
                className='transition-transform duration-300 transform rotate-180'
              />
            )
          ) : null}
        </div>
      </div>

      {/* Dropdown navigation */}
      <nav
        className={`
          dropDownWrapper 
          transition-all duration-500
          flex flex-col
          z-10
          absolute
          rounded
          top-14
          text-center
          right-0
          ${menuState ? 'opacity-1 translate-y-0' : 'opacity-0 invisible -translate-y-full'} 
          text-soft_beige
          w-1/3
          bg-chestnut_brown
          `}>
        {navElement}
      </nav>

      <div className='childrenContainer w-full'>{children}</div>
    </header>
  );
}
