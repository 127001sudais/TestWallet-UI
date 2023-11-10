import React from "react";

import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="flex flex-col font-semibold ">
      <Link
        to="/my-12-words"
        className="bg-gray-200 rounded-md border px-2 py-1 my-1"
      >
        My 12 words
      </Link>

      <Link to="" className="bg-gray-200 rounded-md border px-2 py-1 my-1">
        Change PIN
      </Link>

      <Link
        to="/recover-account"
        className="bg-gray-200 rounded-md border px-2 py-1 my-1"
      >
        Recover old account
      </Link>

      <button className="bg-gray-200 rounded-md border px-2 py-1 my-1">
        Recieve from external wallet(pro)
      </button>

      <Link className="bg-gray-200 rounded-md border px-2 py-1 my-1">
        About
      </Link>
    </div>
  );
}

export default Content;
