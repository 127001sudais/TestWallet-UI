import React, { useState } from "react";

function Agreement({ nextStep, prevStep }) {
  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      nextStep();
    } else {
      alert("You must agree to the terms and conditions to proceed");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Terms and conditions</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          optio?
        </p>
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={handleAgreeChange}
          />
          I agree to the terms and conditions
        </label>
        <button type="submit">Next</button>
        <button type="button" onClick={prevStep}>
          Back
        </button>
      </form>
    </div>
  );
}

export default Agreement;
