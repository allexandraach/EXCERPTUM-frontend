import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, BrowserRouter, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './layout/Navbar.js';
import Home from './features/home/Home.js';
import Footer from './layout/Footer.js';
import SignUp from './features/auth/components/SignUp.js';
import SignIn from './features/auth/components/SignIn.jsx';
import ForgotPassword from './features/auth/components//ForgotPassword.js';
import HomeHeader from './features/home/components/HomeHeader.js';
import User from './features/user/User.js';

import { useAuth } from './app/context/Auth.context.js';

function App() {

  const { isLoggedIn } = useAuth();

  const navLinks = [
    { page: 'Home', link: '/' },
    { page: 'Discover', link: '/discover' },
    { page: 'Sign up', link: '/sign-up' },
    { page: 'Sign in', link: '/sign-in' }
  ];

  const loggedUserNavLinks = [
    { page: 'Discover', link: '/discover' },
    { page: 'My profile', link: '/user/profile' },
  ];

  const NavbarWrapper = () => {
    const location = useLocation();
    const showNavbar = location.pathname !== '/'; // Don't show navbar on the Home page
    return showNavbar ? <Navbar navLinks={navLinks} /> : <HomeHeader />;
  };


  function PrivateRoute({ isLoggedIn, children }: { isLoggedIn: boolean, children: React.ReactNode }) {
    return isLoggedIn ? children : <Navigate to='/login' />;
  }


  return (
    <HelmetProvider>
      <Helmet>
        <link rel='preconnect' />
      </Helmet>
      <ToastContainer />
      <BrowserRouter>
        <div className='min-h-screen relative grid grid-rows-[auto,auto,10rem]'>
          <header>
            <NavbarWrapper />
          </header>
          <Routes>
            {/* public routes */}
            <Route
              path='/'
              element={
                <main>
                  <Home />
                </main>}
            />
            <Route
              path='/sign-in'
              element={
                <main>
                  <SignIn />
                </main>}
            />
            <Route
              path='/sign-up'
              element={
                <main>
                  <SignUp />
                </main>}
            />
            <Route
              path='/forgot-password'
              element={
                <main>
                  <ForgotPassword />
                </main>}
            />
            {/* private routes */}
            <Route
              path='/user'
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <main>
                    <User />
                  </main>
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider >
  );
}

export default App;
