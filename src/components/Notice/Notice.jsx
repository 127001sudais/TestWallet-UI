import React from "react";

// Icon
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

function Notice({ text }) {
  return (
    <>
      <div className="flex bg-gray-200 rounded-md text-xs mt-2">
        <WarningAmberRoundedIcon className="h-5 w-5 m-auto" />
        <p className="flex-1 text-center font-semibold">{text}</p>
      </div>
    </>
  );
}

export default Notice;
