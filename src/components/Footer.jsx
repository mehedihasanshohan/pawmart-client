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
    <footer class="max-w-7xl mx-auto bg-base-100 text-base-content py-16 px-8 border-t">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 class="text-xl font-bold tracking-widest mb-8 uppercase">
            Our Gallery
          </h3>
          <div class="grid grid-cols-3 gap-2">
            <img
              src="https://i.ibb.co.com/gbHhSy5s/petscategory.jpg"
              alt="Pet"
              class="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/Psz9LCTp/petfoodcategory.webp"
              alt="Pet"
              class="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/wr7vBxBX/petAcces.jpg"
              alt="Pet"
              class="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/TMBtcttf/petcare.jpg"
              alt="Pet"
              class="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/gbHhSy5s/petscategory.jpg"
              alt="Pet"
              class="w-full h-24 object-cover rounded"
            />
            <img
              src="https://i.ibb.co.com/TMBtcttf/petcare.jpg"
              alt="Pet"
              class="w-full h-24 object-cover rounded"
            />
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold tracking-widest mb-8 uppercase">
            Quick Links
          </h3>
          <div class="grid grid-cols-2 gap-y-4">
            <ul class="space-y-3 font-semibold">
              <Link class="flex">
                <span class="mr-2">—</span> Pet & Supplies
              </Link>
              <Link class="flex">
                <span class="mr-2">— </span> Add Listing
              </Link>
              <Link class="flex">
                <span class="mr-2">— </span> My Listings
              </Link>
              <Link class="flex">
                <span class="mr-2">—</span> My Orders
              </Link>
            </ul>
            <ul class="space-y-3 font-semibold">
              <Link class="flex">
                <span class="mr-2">—</span> Donate
              </Link>
              <Link class="flex">
                <span class="mr-2">—</span> Care Centers
              </Link>
              <Link class="flex">
                <span class="mr-2">—</span> Dashboard
              </Link>
              <Link class="flex">
                <span class="mr-2">—</span> Decor
              </Link>
            </ul>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold tracking-widest mb-8 uppercase">
            Get In Touch
          </h3>
          <ul class="space-y-5">
            <Link class="flex items-start">
              <span class="text-teal-400 mr-4 text-xl">
                 <img
              src={location}
              alt="Gmail"
              className="w-12 h-12"
            />
              </span>
              <span class="font-semibold">
                Goalundo, Rajbari
                <br />
                Dhaka, Bangladesh
              </span>
            </Link>
            <Link class="flex items-center">
              <span class="text-teal-400 mr-4 text-xl">
                 <img
              src={phone}
              alt="Gmail"
              className="w-12 h-12"
            />
              </span>
              <span class="font-medium">+880177476798</span>
            </Link>
          </ul>

          <div class="flex gap-3 mt-8">
            <img
              src={facebook}
              alt="Facebook"
              className="w-10 h-10 cursor-pointer"
            />
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-10 h-10 cursor-pointer"
            />
            <img
              src={gmail}
              alt="Gmail"
              className="w-10 h-10 cursor-pointer"
            />
            <img
              src={github}
              alt="Github"
              className="w-10 h-10 cursor-pointer"
            />{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
