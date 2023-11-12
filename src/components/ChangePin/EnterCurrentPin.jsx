import React, { useState } from "react";
import { Link } from "react-router-dom";

// Notice
import Notice from "../Notice/Notice";

// Header
import Header from "../Header/Header";

// pinentry
import PinEntry from "../PIN/PinEntry";

function EnterCurrentPin({ nextStep }) {
  // State variable for pin and error
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  // Function to handle numpad click, adds value to pin if length is less than 6
  const handleButtonClick = (value) => {
    if (pin.length < 6) {
      setPin(pin + value);
    }
  };

  // Function to handle backspace click, removes last characted from pin
  const handleBackSpaceClick = () => {
    setPin(pin.slice(0, -1));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.length === 6) {
      nextStep({ pin });
    } else {
      setError("Please enter a 6-digit PIN");
    }
  };
  return (
    <>
      <Header />

      {/* Error message begins here */}
      <div
        className={
          error
            ? "p-1 transition ease-in-out duration-500 transform translate-y-0"
            : "p-1 transition ease-in-out duration-500 transform -translate-y-full"
        }
      >
        {error && <Notice text={error} />}
      </div>
      {/* Error message ends here */}

      {/* Form begins here */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <p className="font-semibold">Enter current PIN</p>
          <PinEntry
            data-testid="PinEntry"
            onClick={handleButtonClick}
            onBackSpaceClick={handleBackSpaceClick}
          />

          {/* Navigation buttons */}
          <div className="flex mt-2 font-semibold justify-between w-full md:w-1/2 lg:w-1/3">
            {/* previous button begins here */}
            <Link
              data-testid="Link"
              to="/"
              className="bg-gray-200 px-2 rounded-xl  hover:bg-gray-400"
            >
              Back
            </Link>

            {/* previous button ends here */}

            {/* next button begins here */}
            <button
              data-testid="Button"
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
      {/* Form ends here */}
    </>
  );
}

export default EnterCurrentPin;
