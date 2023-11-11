import React, { useState } from "react";

// icon
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

// Header
import Header from "../../Header/Header";

// Notice
import Notice from "../../Notice/Notice";

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
    }
  };
  return (
    <>
      <Header />

      {/* Error message begins here */}
      <div
        className={
          error
            ? "p-2 transition ease-in-out duration-500 transform translate-y-0"
            : "p-2 transition ease-in-out duration-500 transform -translate-y-full"
        }
      >
        {error && <Notice text={error} />}
      </div>
      {/* Error message ends here */}

      <form className="mt-4 flex flex-col items-center" onSubmit={handleSubmit}>
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
