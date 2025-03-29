import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-600 py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-6">
        <ul className="flex justify-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact Us", path: "/contact" },
            { name: "Sign In", path: "/customersignin" },
            { name: "For Providers", path: "/providersignin" },
            { name: "Form page", path: "/formpage"}
          ].map((item) => (
            <li key={item.name} className="group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-white text-xl transition-colors py-2 px-2 block rounded-2xl 
                  group-hover:bg-blue-300 ${isActive ? "underline underline-offset-8" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
