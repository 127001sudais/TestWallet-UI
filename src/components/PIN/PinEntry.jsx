import { useState } from "react";

import PinDisplay from "./PinDisplay";
import PinPad from "./PinPad";

function PinEntry({ onClick, onBackSpaceClick }) {
  const [pin, setPin] = useState("");

  const handleButtonClick = (value) => {
    if (pin.length < 6) {
      setPin(pin + value);
      onClick(value);
    }
  };

  const handleBackSpaceClick = () => {
    setPin(pin.slice(0, -1));
    onBackSpaceClick();
  };

  return (
    <div data-testid="PinEntry" className="mt-2">
      <PinDisplay pin={pin} />
      <PinPad
        onClick={handleButtonClick}
        onBackSpaceClick={handleBackSpaceClick}
      />
    </div>
  );
}

export default PinEntry;
