import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

import { Navbar } from './ComponentUtils/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Pages/Footer';

import SignUp from './Pages/Auth/SignUp';
import SignIn from './Pages/Auth/SignIn';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import HomeHeader from './ComponentUtils/PageComponents/Home/HomeHeader';

function App() {

  const navLinks = [
    { page: 'Home', link: '/' },
    { page: 'Discover', link: '/discover' },
    { page: 'Sign up', link: '/sign-up' },
    { page: 'Sign in', link: '/sign-in' }
  ];

  const NavbarWrapper = () => {

    const location = useLocation();

    const showNavbar = location.pathname !== '/'; // Don't show navbar on the Home page

    return showNavbar ? <Navbar navLinks={navLinks} /> : <HomeHeader />;
  };

  return (
    <BrowserRouter>
      <div className='min-h-screen relative grid grid-rows-[auto,auto,8rem]'>
        <NavbarWrapper />
        <main>
          <Routes>
            {/* Public routes */}
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/sign-in'
              element={<SignIn />}
            />
            <Route
              path='/sign-up'
              element={<SignUp />}
            />
            <Route
              path='/forgot-password'
              element={<ForgotPassword />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
