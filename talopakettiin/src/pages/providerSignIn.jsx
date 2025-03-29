import React, { useState } from "react";

export const ProvderSignIn = () => {
  const [isRegister, setIsRegister] = useState(false);

  const containerClass =
    "min-h-screen flex items-center justify-center bg-gray-100";
  const cardClass = "w-full max-w-md p-6 bg-white rounded-xl shadow-md";
  const titleClass = "text-2xl font-semibold mb-6 text-center";
  const labelClass = "block text-gray-700";
  const inputClass =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
  const buttonClass =
    "w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition";
  const toggleClass =
    "mt-4 text-center text-blue-500 hover:underline cursor-pointer";

  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <h1 className={titleClass}>
          {isRegister ? "Register" : "Provider Sign In"}
        </h1>
        <form className="space-y-4">
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              className={inputClass}
              placeholder="Enter your email"
            />
          </div>
          {isRegister && (
            <div>
              <label className={labelClass}>Username</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Choose a username"
              />
            </div>
          )}
          <div>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              className={inputClass}
              placeholder="Enter your password"
            />
          </div>
          {isRegister && (
            <div>
              <label className={labelClass}>Confirm Password</label>
              <input
                type="password"
                className={inputClass}
                placeholder="Confirm your password"
              />
            </div>
          )}
          <button type="submit" className={buttonClass}>
            {isRegister ? "Register" : "Sign In"}
          </button>
        </form>
        <div className={toggleClass} onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Already have an account? Sign in here"
            : "Not a user? Register here"}
        </div>
      </div>
    </div>
  );
};
