import React, { useState } from "react";

import PinEntry from "../../PIN/PinEntry";

// Header
import Header from "../../Header/Header";

// Notice
import Notice from "../../Notice/Notice";

// css
import "../../../styles/CreateAccount/ConfirmPin.css";

function ConfirmPin({ nextStep, prevStep, pin: originalPin }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = (value) => {
    if (pin.length < 6) {
      setPin(pin + value);
    }
  };

  const handleBackSpaceClick = () => {
    setPin(pin.slice(0, -1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === originalPin) {
      nextStep();
    } else {
      setError("The PIN do not match.Please try again");
      setPin("");
      setTimeout(() => {
        document.querySelector(".error-message").classList.add("show");
      }, 0);
    }
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <p className="font-semibold">Confirm PIN</p>
          <PinEntry
            onClick={handleButtonClick}
            onBackSpaceClick={handleBackSpaceClick}
          />
          {error && (
            <div className="error-message">
              <Notice text={error} />
            </div>
          )}
          {/* button begins here */}
          <div className="flex mt-2 font-semibold justify-between w-full md:w-1/2 lg:w-1/3">
            {/* previous button begins here */}
            <button
              className="bg-gray-200 px-2 rounded-xl  hover:bg-gray-400"
              type="button"
              onClick={prevStep}
            >
              Back
            </button>
            {/* previous button ends here */}

            {/* next button begins here */}
            <button
              className="bg-gray-200 px-2 rounded-xl hover:bg-gray-400"
              type="submit"
            >
              Next
            </button>
            {/* next button ends here */}
          </div>
          {/* button ends here */}
        </div>
      </form>
    </>
  );
}

export default ConfirmPin;
