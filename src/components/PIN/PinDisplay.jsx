import PropTypes from "prop-types";
import { Radio } from "@mui/material";

function PinDisplay({ pin = "" }) {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: 6 }, (_, i) => (
        <Radio key={i} className="w-7" checked={i < pin.length} disabled />
      ))}
    </div>
  );
}

PinDisplay.propTypes = {
  pin: PropTypes.string.isRequired,
};

export default PinDisplay;
