import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer
      className="footer sm:footer-horizontal bg-base-100 shadow-2xl  p-10"
    >
      <aside>
        <Link to="/" className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold">PawMart</span>
        </Link>
        <p className="max-w-xs text-sm">
          PawMart connects local pet owners and buyers for adoption and pet care products.
        </p>
        <p className="mt-4 text-sm opacity-90">
          © {new Date().getFullYear()} PawMart. All rights reserved.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Useful Links</h6>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/terms" className="link link-hover">Terms & Conditions</Link>
      </nav>

      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Adoption</a>
        <a className="link link-hover">Pet Supplies</a>
        <a className="link link-hover">Grooming</a>
        <a className="link link-hover">Vet Consultation</a>
      </nav>

      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex gap-4 mt-2 text-info">
          <Link to="/" aria-label="Facebook"><FaFacebook className="w-6 h-6 hover:text-blue-400" /></Link>
          <Link to="/" aria-label="GitHub"><FaGithub className="w-6 h-6 hover:text-gray-300" /></Link>
          <Link to="/" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6 hover:text-blue-300" /></Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
