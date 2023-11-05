import React from "react";
import PropTypes from "prop-types";

//icon
import { KeyboardBackspace } from "@mui/icons-material";

function PinPad({ onClick, onBackSpaceClick }) {
  const handleButtonClick = (value) => {
    onClick(value);
    console.log(`${value} button is clicked`);
  };

  const handleBackSpaceButtonClick = () => {
    onBackSpaceClick();
    console.log(`backSpace button is clicked`);
  };

  return (
    <div className="grid grid-cols-3 gap-3 mt-8">
      {Array.from({ length: 9 }, (_, i) => (
        <button
          key={i + 1}
          type="button"
          className="bg-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => handleButtonClick(String(i + 1))}
        >
          {i + 1}
        </button>
      ))}

      <button
        type="button"
        className=" col-start-2 bg-gray-200 font-bold py-2 px-4 rounded"
        onClick={() => handleButtonClick("0")}
      >
        0
      </button>

      <button
        type="button"
        data-testid="backspace"
        className=" bg-gray-200 font-bold py-2 px-4 rounded"
        onClick={handleBackSpaceButtonClick}
      >
        <KeyboardBackspace />
      </button>
    </div>
  );
}

PinPad.propTypes = {
  onClick: PropTypes.func.isRequired,
  onBackspaceClick: PropTypes.func.isRequired,
};

export default PinPad;
