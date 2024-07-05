import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-16 bg-gray-200 border flex gap-10 items-center mb-1">
      <Link to={"/"} href="">
        Home
      </Link>
    </div>
  );
}

export default Navbar;
