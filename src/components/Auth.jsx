import React, { useState } from "react";
import { Button } from "./ui/button"; // Assuming you have a Button component as referenced
import { useLocation, useNavigate } from "react-router-dom";

function AuthForm({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login
    console.log("Logging in with:", formValues);
    localStorage.setItem("admin", true);
    navigate(from, { replace: true });
  };

  return (
    <div className="back-image bg-opacity-50  fixed inset-0 flex justify-center items-center z-50">
      <form
        className="bg-white  p-6 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-500"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-4">
          <Button type="submit" className="w-full">
            Login
          </Button>
          {/* <Button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-500 text-white hover:bg-gray-600"
            variant="secondary"
          >
            Cancel
          </Button> */}
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
