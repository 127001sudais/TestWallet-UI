import React, { useState } from "react";

// notice
import Notice from "../Notice/Notice";

// pin entry
import PinEntry from "../PIN/PinEntry";

// Header
import Header from "../Header/Header";

function EnterNewPin({ nextStep, prevStep }) {
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
    if (pin.length === 6) {
      nextStep({ pin });
    } else {
      setError("Please enter a 6-digit PIN");
      // setTimeout(() => {
      //   document.querySelector(".error-message").classList.add("show");
      // }, 0);
    }
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <p className="font-semibold">Enter new PIN</p>
          <PinEntry
            onClick={handleButtonClick}
            onBackSpaceClick={handleBackSpaceClick}
          />

          {/* error message display */}
          {error && (
            <div className="error-message">
              {" "}
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

export default EnterNewPin;