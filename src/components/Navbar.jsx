import { GoogleAuthProvider } from 'firebase/auth'
import React, { useContext, useState} from 'react'
import { Link, NavLink} from 'react-router'
import { toast } from 'react-toastify';
import { AuthContext } from './../context/AuthContext';
import { FaRegMoon } from 'react-icons/fa';
import { PiSunBold } from "react-icons/pi";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [isLight, setIsLight] = useState(true);

 const handletheme = () => {
  const html = document.querySelector("html");
  const newTheme = isLight ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
  setIsLight(!isLight);
};


  const handleGoogleSignOut =() => {
    signOutUser()
    .then( ()=> {
      toast.success('sign out successfully')
    })
    .catch(error => {
      toast.error(error.message);
    })
  }

  return (
   <div  className="navbar sticky z-50 backdrop-blur-md top-0  bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-md dropdown-content bg-base-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listings'>Pets & Supplies</NavLink></li>
        {
          user &&
          <div>
            <li><NavLink to='/addListing'>Add Listing</NavLink></li>
            <li><NavLink to='/mylistings'>My Listings</NavLink></li>
            <li><NavLink to='/myOrders'>My Orders</NavLink></li>
          </div>
        }
        </ul>
    </div>
    <div className='flex items-center justify-center gap-2'>
      <img src="https://i.ibb.co.com/ZRxFkpTv/dog-13748949.png" className='w-6 h-6 ml-2' alt="" />
      <Link to='/' className="text-3xl font-semibold  ml-2 animate__animated animate__rollIn">
       <span className='text-orange-400 text-3xl font-semibold'>pawmart</span>
      </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex animate__animated animate__fadeInLeft" >
    <ul data-aos="fade-left" className="flex justify-center items-center gap-6   font-semibold text-xl px-1">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/listings'>Pets & Supplies</NavLink></li>
      {
          user &&
          <div className='flex gap-6'>
            <li><NavLink to='/addListing'>Add Listing</NavLink></li>
            <li><NavLink to='/mylistings'>My Listings</NavLink></li>
            <li><NavLink to='/myOrders'>My Orders</NavLink></li>
          </div>
        }
    </ul>
  </div>

  <div className="navbar-end  flex items-center gap-3 animate__animated animate__fadeInRight">
   <button onClick={handletheme}>
    {
      isLight? <FaRegMoon className='text-xl'></FaRegMoon> : <PiSunBold className='text-xl'></PiSunBold>
    }
   </button>
   {user && (
    <div className="tooltip tooltip-left" data-tip={user.displayName || "User"}>
      <img
        src={user.photoURL || "https://i.ibb.co.com/LzzpgV0z/icons8-person-94.png"}
        alt="User Avatar"
        className="h-9 w-9 rounded-full border bo cursor-pointer"
      />
    </div>
  )}

  {user ? (
    <button
      onClick={handleGoogleSignOut}
      className="btn btn-sm bg-red-400 hover:bg-red-300  border-none transition-all duration-300"
    >
      Logout
    </button>
  ) :
    <div className='flex gap-4'>
    <NavLink
      to="/login"
      className="btn btn-sm btn-accent  border-none transition-all duration-300"
    >
      Login
    </NavLink>
    <NavLink
      to="/register"
      className="btn btn-sm btn-info  border-none transition-all duration-300"
    >
      Register
    </NavLink>
   </div>
  }
</div>


</div>
  )
}

export default Navbar