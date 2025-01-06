import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { TopNavbar } from './ComponentUtils/Navbar/TopNavbar';
import Home from './Pages/Home';
import Footer from './Pages/Footer';

import SignUp from './Pages/SignUp';

function App() {

  const navLinks = [
    { page: 'Home', link: '/' },
    { page: 'Discover', link: '/discover' },
    { page: 'Sign up', link: '/sign-up' },
    { page: 'Login', link: '/login' }
  ];

  return (
    <div className='App min-h-screen relative'>
      <BrowserRouter>
        <TopNavbar
          navLinks={navLinks}
        />
        <main>
          <Routes>
            {/* Public routes */}
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/sign-up'
              element={<SignUp />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
