import React, { useState } from "react";

// icon
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

// Header
import Header from "../../Header/Header";

// Notice
import Notice from "../../Notice/Notice";

// css
import "../../../styles/CreateAccount/Agreement.css";

function Agreement({ nextStep, prevStep }) {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleAgreeChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      nextStep();
    } else {
      setError("You must agree to the terms and conditions to proceed");
      setTimeout(() => {
        document.querySelector(".error-message").classList.add("show");
      }, 0);
    }
  };
  return (
    <>
      <Header />
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="bg-gray-200 rounded-md p-1">
          <h1 className="font-bold text-center">Terms and conditions</h1>
          <div className="flex">
            <div className="m-auto">
              <HandshakeRoundedIcon />
            </div>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              optio?
            </p>
          </div>
          <label className="text-xs">
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleAgreeChange}
            />
            I agree to the terms and conditions
          </label>
        </div>
        {error && (
          <div className="error-message">
            <Notice text={error} />
          </div>
        )}
        {/* button begins here */}
        <div className="flex mt-12 font-semibold justify-between w-full md:w-1/2 lg:w-1/3">
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
      </form>
    </>
  );
}

export default Agreement;
