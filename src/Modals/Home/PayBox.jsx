import React, { useState } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Button from "@mui/material/Button";

import ModalLayout from "../../containers/ModalLayout/ModalLayout";

function PayBox({ isOpen, toggleModal }) {
  const [userName, setUserName] = useState("");
  const [amount, setAmount] = useState(0);
  const gasCost = 0.01;

  const totalCost = amount + gasCost;
  const handleSend = () => {
    console.log("send button is clicked");
  };
  return (
    <ModalLayout title="Pay Box" isOpen={isOpen} toggleModal={toggleModal}>
      <div className="flex flex-col items-center">
        {/* Input for UserName/Address */}
        <div>
          <label>
            Username/Address:
            <input
              className="border-2 border-black rounded-md w-40 text-center"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
        </div>

        {/* Input for Amount */}
        <div className="mt-2">
          <label>
            Amount:
            <input
              className="border-2 border-black rounded-md w-40 text-center"
              type="number"
              value={amount}
              placeholder="0.00"
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        {/* gas cost */}
        <div className="mt-3">
          <p>
            Transaction Fee: <p className="font-semibold">{gasCost}</p>
          </p>
        </div>

        {/* total cost */}
        <div>
          <p>
            Total Cost: <p className="font-semibold">{totalCost}</p>
          </p>
        </div>

        {/* sen button */}
        <div className="mt-4 rounded-md bg-black ">
          {" "}
          <Button
            style={{ color: "white" }}
            endIcon={<SendRoundedIcon />}
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
      </div>
    </ModalLayout>
  );
}

export default PayBox;
