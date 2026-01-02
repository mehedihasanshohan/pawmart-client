import React from "react";
import gmail from "/gmail.png";
import linkedin from "/linkedin.png";
import facebook from "/facebook.png";
import github from "/github1.png";
import location from "/map.png";
import phone from "/mobile.png";

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
              <li class="flex">
                <span class="mr-2">—</span> About Us
              </li>
              <li class="flex">
                <span class="mr-2">—</span> Our Services
              </li>
              <li class="flex">
                <span class="mr-2">—</span> Shop
              </li>
              <li class="flex">
                <span class="mr-2">—</span> Testimonials
              </li>
            </ul>
            <ul class="space-y-3 font-semibold">
              <li class="flex">
                <span class="mr-2">—</span> Accessories
              </li>
              <li class="flex">
                <span class="mr-2">—</span> Care
              </li>
              <li class="flex">
                <span class="mr-2">—</span> Clothing
              </li>
              <li class="flex">
                <span class="mr-2">—</span> Decor
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold tracking-widest mb-8 uppercase">
            Get In Touch
          </h3>
          <ul class="space-y-5">
            <li class="flex items-start">
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
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-4 text-xl">
                 <img
              src={phone}
              alt="Gmail"
              className="w-12 h-12"
            />
              </span>
              <span class="font-medium">+880177476798</span>
            </li>
          </ul>

          <div class="flex gap-3 mt-8">
            <img
              src={facebook}
              alt="Facebook"
              className="w-12 h-12 cursor-pointer"
            />
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-12 h-12 cursor-pointer"
            />
            <img
              src={gmail}
              alt="Gmail"
              className="w-12 h-12 cursor-pointer"
            />
            <img
              src={github}
              alt="Github"
              className="w-12 h-12 cursor-pointer"
            />{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
