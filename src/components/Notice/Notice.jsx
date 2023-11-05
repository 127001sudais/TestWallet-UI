import React from "react";

// Icon
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function Notice({ text }) {
  return (
    <>
      <div className="flex bg-gray-200 rounded-md text-sm mt-2">
        <ExclamationTriangleIcon className="h-5 w-5 m-auto" />
        <p className="flex-1">{text}</p>
      </div>
    </>
  );
}

export default Notice;
