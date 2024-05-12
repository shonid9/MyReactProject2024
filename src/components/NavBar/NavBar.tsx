import { FaHome } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import "./NavBar.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, []);

  return (
    <nav className="site-navbar">
      <div className="nav-left">
        <NavLink to="/" className="brand">
          Home
          <FaHome />
        </NavLink>
      </div>

      <div className="nav-right">
        <div className="search-bar">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            value={search}
            placeholder="Search..."
          />
        </div>

        {!isLoggedIn && (
          <>
            <NavLink to="/register">register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/about">About</NavLink>
          </>
        )}

        {isLoggedIn && user && user.role === "regular" && (
          <>
            <NavLink to="/regular">Regular Section</NavLink>
            <NavLink to="/profile">Profile</NavLink>
               <NavLink to="/favorites">Favorite Cards</NavLink> {/* Add Favorite Cards link */}
               <button onClick={() => {
          logout()
        }}>logout</button>
          </>
        )}

        {isLoggedIn && user && user.role === "business" && (
          <>
            <NavLink to="/business">Business Section</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={() => {
          logout()
        }}>logout</button>
          </>
        )}

        <DarkModeToggle />
        
      </div>
    </nav>
  );
};

export default Navbar;
