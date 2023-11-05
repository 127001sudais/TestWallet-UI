import React, { useState } from "react";
import PinEntry from "../../PIN/PinEntry";

function ConfirmPin({ nextStep, prevStep, pin: originalPin }) {
  const [pin, setPin] = useState("");

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
      alert("The PIN do not match. Please try again");
      setPin("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PinEntry
          onClick={handleButtonClick}
          onBackSpaceClick={handleBackSpaceClick}
        />

        <button type="submit">Next</button>
        <button type="button" onClick={prevStep}>
          Back
        </button>
      </form>
    </div>
  );
}

export default ConfirmPin;
