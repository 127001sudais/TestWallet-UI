import React, { useState } from "react";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function UserBalance() {
  const [showBalance, setShowBalance] = useState(true);
  const balance = 819;

  const toggleVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className=" flex justify-evenly mt-1 ">
      {/* dummy div to balance out  */}
      <div></div>

      {/* Total balance of user */}
      <div className="">
        {showBalance ? (
          <p className="w-28 text-black">{balance} sats</p>
        ) : (
          <p className="w-28 text-black">**** sats</p>
        )}
      </div>

      {/* Button to change visibility of the users balance */}
      <div className="text-black ">
        <button onClick={toggleVisibility}>
          {showBalance ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      </div>
    </div>
  );
}

export default UserBalance;
