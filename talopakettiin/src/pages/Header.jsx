import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-600 py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-6">
        <ul className="flex justify-center space-x-8">
          <li className="group">
            <Link
              to="/"
              className="text-white text-xl transition-colors py-2 px-2 block group-hover:bg-blue-300 rounded-2xl"
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              to="/about"
              className="text-white text-xl transition-colors py-2 px-2 block group-hover:bg-blue-300 rounded-2xl"
            >
              About
            </Link>
          </li>
          <li className="group">
            <Link
              to="/contact"
              className="text-white text-xl transition-colors py-2 px-2 block group-hover:bg-blue-300 rounded-2xl"
            >
              Contact Us
            </Link>
          </li>
          <li className="group">
            <Link
              to="/customersignin"
              className="text-white text-xl transition-colors py-2 px-2 block group-hover:bg-blue-300 rounded-2xl"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
