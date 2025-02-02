import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

import { Navbar } from './ComponentUtils/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Pages/Footer';

import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

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

    return showNavbar ? <Navbar navLinks={navLinks} /> : null;
  };

  return (
    <BrowserRouter>
      <div className='min-h-screen relative grid grid-rows-[3.5rem,1fr,auto]'>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
