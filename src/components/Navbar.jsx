import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "./../context/AuthContext";
import { FaRegMoon, FaChevronDown } from "react-icons/fa";
import { PiSunBold } from "react-icons/pi";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleGoogleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Common links for the "Pages" dropdown
  const extraLinks = (
    <>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/privacy">Privacy/Terms</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky z-50 backdrop-blur-md top-0 bg-base-200 shadow-sm transition-all duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-md dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/listings">Pets & Supplies</NavLink>
            </li>
            <li className="menu-title">Explore</li>
            {extraLinks}

            {user && (
              <>
                <li>
                  <NavLink to="/addListing">Add Listing</NavLink>
                </li>
                <li>
                  <NavLink to="/mylistings">My Listings</NavLink>
                </li>
                <li>
                  <NavLink to="/myOrders">My Orders</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://i.ibb.co.com/ZRxFkpTv/dog-13748949.png"
            className="w-6 h-6 ml-2"
            alt=""
          />
          <Link to="/" className="text-3xl font-semibold ml-2">
            <span className="text-teal-600 font-bold">Pawmart</span>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center items-center gap-6 font-semibold text-xl px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/listings">Pets & Supplies</NavLink>
          </li>
          <li>
            <NavLink to="/pet-care">Pet Care</NavLink>
          </li>

{/* Hover Dropdown Menu */}
          <li className="dropdown dropdown-hover group">
            <div tabIndex={0} role="button"
            className="flex items-center gap-1 group-hover:text-teal-600
            transition-colors">
              Pages <FaChevronDown className="text-[10px] mt-1 group-hover:rotate-180 transition-transform" />
            </div>
            <ul tabIndex={0}
            className="dropdown-content menu bg-base-100
            rounded-box z-1 w-52 p-2 shadow-xl border border-teal-600/10">
              {extraLinks}
            </ul>
          </li>

          {user && (
            <div className="flex gap-6">
              <li>
                <NavLink to="/addListing">Add Listing</NavLink>
              </li>
              <li>
                <NavLink to="/mylistings">My Listings</NavLink>
              </li>
              <li>
                <NavLink to="/myOrders">My Orders</NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* --- Theme Toggle Button --- */}
        <button
          onClick={handleTheme}
          className="btn btn-ghost btn-circle text-xl"
        >
          {theme === "light" ? (
            <FaRegMoon />
          ) : (
            <PiSunBold className="text-teal-600" />
          )}
        </button>

        {user && (
          <div
            className="tooltip tooltip-left"
            data-tip={user.displayName || "User"}
          >
            <img
              src={
                user.photoURL ||
                "https://i.ibb.co.com/LzzpgV0z/icons8-person-94.png"
              }
              alt="User Avatar"
              className="h-9 w-9 rounded-full border cursor-pointer"
            />
          </div>
        )}

        {user ? (
          <button
            onClick={handleGoogleSignOut}
            className="btn btn-sm bg-red-400 hover:bg-red-300 border-none text-white"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-2">
            <NavLink to="/login" className="btn btn-sm btn-accent">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-sm btn-info">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
