import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { TopNavbar } from './ComponentUtils/Navbar/TopNavbar';
import Home from './Pages/Home';

function App() {

  const navLinks = [{ page: "Home", link: "/" }, { page: "Discover", link: "/discover" }, { page: "Sign up", link: "/sign-up" }, { page: "Login", link: "/login" }];

  return (
    <div className="App min-h-screen relative">
      <BrowserRouter>
        <TopNavbar navLinks={navLinks} />
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
