import React from "react";
import gmail from "/gmail.png";
import linkedin from "/linkedin.png";
import facebook from "/facebook.png";
import github from "/github1.png";
import location from "/map.png";
import phone from "/mobile.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-base-100 text-base-content py-16 px-8 border-t mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold tracking-widest mb-8 uppercase">
            Our Gallery
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://i.ibb.co.com/gbHhSy5s/petscategory.jpg"
              alt="Pet"
              className="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/Psz9LCTp/petfoodcategory.webp"
              alt="Pet"
              className="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/wr7vBxBX/petAcces.jpg"
              alt="Pet"
              className="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/TMBtcttf/petcare.jpg"
              alt="Pet"
              className="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/gbHhSy5s/petscategory.jpg"
              alt="Pet"
              className="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/TMBtcttf/petcare.jpg"
              alt="Pet"
              className="w-full h-24 object-cover rounded"
            />
          </div>
        </div>

        <div className="md:pl-24">
          <h3 className="text-xl font-bold tracking-widest mb-8 uppercase">
            Quick Links
          </h3>
          <div className="">
            <ul className="space-y-3 font-semibold">
              <Link className="flex" to="/">
                <span className="mr-2 mt-1">—</span> Home
              </Link>
              <Link className="flex" to="/addListing">
                <span className="mr-2 mt-1">— </span> Add Listing
              </Link>
              <Link className="flex" to="/listings">
                <span className="mr-2 mt-1">— </span> ALL Listings
              </Link>
               <Link className="flex" to="/donate">
                <span className="mr-2 mt-1">—</span> Donate
              </Link>
              <Link className="flex" to="/pet-care">
                <span className="mr-2 mt-1">—</span> Care Centers
              </Link>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold tracking-widest mb-8 uppercase">
            Get In Touch
          </h3>
          <ul className="space-y-5">
            <Link className="flex items-start">
              <span className="text-teal-400 mr-4 text-xl">
                <img src={location} alt="Gmail" className="w-12 h-12" />
              </span>
              <span className="font-semibold">
                Goalundo, Rajbari
                <br />
                Dhaka, Bangladesh
              </span>
            </Link>
            <Link className="flex items-center">
              <span className="text-teal-400 mr-4 text-xl">
                <img src={phone} alt="Gmail" className="w-12 h-12" />
              </span>
              <span className="font-medium">+880177476798</span>
            </Link>
          </ul>

          <div className="flex gap-3 mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=100007820023284"
              target="_blank"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-10 h-10 cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mehedihasanshohan/"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-10 h-10 cursor-pointer"
              />
            </a>
            <a href="" target="_blank">
              <img
                src={gmail}
                alt="Gmail"
                className="w-10 h-10 cursor-pointer"
              />
            </a>
            <a href='https://github.com/mehedihasanshohan' target='_blank'>
              <img
                src={github}
                alt="Github"
                className="w-10 h-10 cursor-pointer"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
