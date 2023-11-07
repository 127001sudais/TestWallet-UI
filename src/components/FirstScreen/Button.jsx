import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="grid grid-cols text-center mt-2 font-semibold">
      <Link
        to="/create-account"
        className="bg-gray-200 shadow-lg mt-2 p-1 rounded-sm"
      >
        Create New Account
      </Link>
      <Link
        to="/recover-account"
        className="bg-gray-200 shadow-lg mt-2 p-1 rounded-sm"
      >
        Recover Old Account
      </Link>
    </div>
  );
}

export default Button;
