import React from "react";

function Button() {
  return (
    <div className="grid grid-cols text-center mt-2 font-semibold">
      <button className="bg-gray-200 shadow-lg mt-2 p-1 rounded-sm">
        Create New Account
      </button>
      <button className="bg-gray-200 shadow-lg mt-2 p-1 rounded-sm">
        Recover Old Account
      </button>
    </div>
  );
}

export default Button;
