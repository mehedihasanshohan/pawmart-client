import React from 'react'
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (

<footer class="max-w-7xl mx-auto bg-base-100 text-base-content py-16 px-8 border-t">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

    <div>
      <h3 class="text-xl font-bold tracking-widest mb-8 uppercase">Our Gallery</h3>
      <div class="grid grid-cols-3 gap-2">
        <img src="https://via.placeholder.com/100" alt="Pet" class="w-full h-24 object-cover rounded"/>
        <img src="https://via.placeholder.com/100" alt="Pet" class="w-full h-24 object-cover rounded"/>
        <img src="https://via.placeholder.com/100" alt="Pet" class="w-full h-24 object-cover rounded"/>
        <img src="https://via.placeholder.com/100" alt="Pet" class="w-full h-24 object-cover rounded"/>
        <img src="https://via.placeholder.com/100" alt="Pet" class="w-full h-24 object-cover rounded"/>
        <img src="https://via.placeholder.com/100" alt="Pet" class="w-full h-24 object-cover rounded"/>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-bold tracking-widest mb-8 uppercase">Quick Links</h3>
      <div class="grid grid-cols-2 gap-y-4">
        <ul class="space-y-3 font-semibold">
          <li class="flex items-center hover:text-teal-600 cursor-pointer">
            <span class="mr-2">—</span> About Us
          </li>
          <li class="flex items-center hover:text-teal-600 cursor-pointer">
            <span class="mr-2">—</span> Our Services
          </li>
          <li class="flex items-center hover:text-teal-600 cursor-pointer">
            <span class="mr-2">—</span> Shop
          </li>
          <li class="flex items-center hover:text-teal-600 cursor-pointer">
            <span class="mr-2">—</span> Testimonials
          </li>
        </ul>
        <ul class="space-y-3 font-semibold">
          <li class="flex items-center hover:text-teal-600 cursor-pointer">
            <span class="mr-2">—</span> Accessories
          </li>
          <li class="flex items-center hover:text-teal-600 cursor-pointer">
            <span class="mr-2">—</span> Care
          </li>
          <li class="flex items-center hover:text-teal-600 cursor-pointer">
            <span class="mr-2">—</span> Clothing
          </li>
          <li class="flex items-center hover:text-teal-600 cursor-pointer">
            <span class="mr-2">—</span> Decor
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-bold tracking-widest mb-8 uppercase">Get In Touch</h3>
      <ul class="space-y-5">
        <li class="flex items-start">
          <span class="text-teal-400 mr-4 text-xl mt-4"><FaLocationArrow></FaLocationArrow> </span>
          <span class="">Goalundo, Rajbari<br/>Dhaka, Bangladesh</span>
        </li>
        <li class="flex items-center">
          <span class="text-teal-400 mr-4 text-xl"><FaPhoneAlt></FaPhoneAlt></span>
          <span class="font-medium">+880177476798</span>
        </li>
      </ul>

      <div class="flex gap-3 mt-8">
        <div class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-yellow-500 hover:text-white transition cursor-pointer">f</div>
        <div class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-yellow-500 hover:text-white transition cursor-pointer">t</div>
        <div class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-yellow-500 hover:text-white transition cursor-pointer">i</div>
        <div class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-yellow-500 hover:text-white transition cursor-pointer">g</div>
      </div>
    </div>

  </div>
</footer>
  )
}

export default Footer