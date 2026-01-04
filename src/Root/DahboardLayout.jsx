import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FaHome, FaUser, FaUserCircle } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { TbDatabaseCog } from "react-icons/tb";
import { GiPodiumWinner } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa6";
import { BsClipboardPlusFill } from "react-icons/bs";
import { HiOutlineTrophy } from "react-icons/hi2";

const DashBoardLayout = () => {
  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto bg-base-200 ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-teal-600">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-6"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 text-xl flex justify-center items-center gap-4">
            <h2 className="">DashBoard Panel</h2>
          </div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow bg-base-300 backdrop-blur-d pt-12">
            <li>
              <NavLink
                className="is-drawer-close:tooltip
                    is-drawer-close:tooltip-right"
                data-tip="Home Page"
                to="/"
              >
                <FaHome className="w-6 h-6 mt-4 text-teal-600"></FaHome>
                <span className="is-drawer-close:hidden mt-4">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="is-drawer-close:tooltip
                    is-drawer-close:tooltip-right"
                data-tip="Add Listing"
                to="/dashboard/addListing"
              >
                <FaClipboardList className="w-6 h-6 mt-4 text-teal-600"></FaClipboardList>
                <span className="is-drawer-close:hidden mt-4">Add Listing</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="is-drawer-close:tooltip
                    is-drawer-close:tooltip-right"
                data-tip="My Listings"
                to="/dashboard/mylistings"
              >
                <GiPodiumWinner className="w-6 h-6 mt-4 text-teal-600"></GiPodiumWinner>
                <span className="is-drawer-close:hidden mt-4">My Listings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="is-drawer-close:tooltip
                    is-drawer-close:tooltip-right"
                data-tip="My Orders"
                to="/dashboard/myOrders"
              >
                <FaUserCircle className="w-6 h-6 mt-4 text-teal-600"></FaUserCircle>
                <span className="is-drawer-close:hidden mt-4">My Orders</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                className="is-drawer-close:tooltip
                    is-drawer-close:tooltip-right"
                data-tip="Leaderboard"
                to="/dashboard/leaderboard"
              >
                <HiOutlineTrophy className="w-6 h-6 mt-4 text-teal-600"></HiOutlineTrophy>
                <span className="is-drawer-close:hidden mt-4 text-teal-600">
                  Leaderboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="is-drawer-close:tooltip
                    is-drawer-close:tooltip-right"
                data-tip="My Profile"
                to="/dashboard/my-profile"
              >
                <FaUser className="w-6 h-6 mt-4 text-teal-600"></FaUser>
                <span className="is-drawer-close:hidden mt-4 text-teal-600">
                  My Profile
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
