import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';

function NavElement(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div
        className="flex justify-between items-center h-16 px-4 md:px-8"
      >
        {/* Logo */}
        <h1 className="text-2xl">
          TWARIKI{' '}
          <span className="text-blue-500">ABDALAZIZI</span>
        </h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden block text-blue-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-gray-900 md:static md:flex md:gap-4 md:items-center md:w-auto ${
            isMenuOpen ? 'flex flex-col gap-4 py-4' : 'hidden'
          }`}
        >
          <Link to={routes.home}>
          <li
            className="px-4 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 md:border-none"
          >
            Home
          </li>
          </Link>
          <Link to={routes.about}>
          <li
            className="px-4 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 md:border-none"
          >
            About
          </li>
          </Link>
          <Link to={routes.project}>
          <li
            className="px-4 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 md:border-none"
          >
            Projects
          </li>
          </Link>
          <Link to={routes.contact}>
          <li
            className="px-4 py-2 border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-gray-900 relative flex justify-center items-center"
          >
            <span className="absolute h-full w-16 justify-center items-center flex">
              <span className="animate-ping absolute inline-flex h-5 w-full rounded-full bg-sky-400 opacity-75"></span>
            </span>
            Download Resume
          </li>
          </Link>
          
        </ul>
      </div>
    </nav>
  );
}

export default NavElement;
