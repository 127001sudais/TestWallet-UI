import React, { useState } from "react";
import PinEntry from "../../PIN/PinEntry";

function CreatePin({ nextStep, prevStep }) {
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
    nextStep({ pin });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PinEntry
          onClick={handleButtonClick}
          onBackSpaceClick={handleBackSpaceClick}
        />
        <button className="bg-gray-200 p-4 rounded-2xl" type="submit">
          Next
        </button>
        <button type="button" onClick={prevStep}>
          back
        </button>
      </form>
    </div>
  );
}

export default CreatePin;
