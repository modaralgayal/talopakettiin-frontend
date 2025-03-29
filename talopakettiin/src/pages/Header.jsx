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
              className="text-white text-xl transition-colors py-2 px-4 block group-hover:bg-blue-300"
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              to="/about"
              className="text-white text-xl transition-colors py-2 px-4 block group-hover:bg-blue-300"
            >
              About
            </Link>
          </li>
          <li className="group">
            <Link
              to="/contact"
              className="text-white text-xl transition-colors py-2 px-4 block group-hover:bg-blue-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
