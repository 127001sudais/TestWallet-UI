import React, { useEffect, useState } from "react";

// Header
import Header from "../../Header/Header";

// utils function to check the validity of username
import { isValidUserName } from "../../../utils/CreateAccount/validUtils";

// Error message display
import Notice from "../../Notice/Notice";

// Styles
import "../../../styles/CreateAccount/CreateUserName.css";

function CreateUserName({ nextStep }) {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidUserName(userName)) {
      nextStep({ userName });
    } else {
      setError("Username can only contain letter,numbers and full stops");
      setTimeout(() => {
        document.querySelector(".error-message").classList.add("show");
      }, 0);
    }
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <Header />
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mt-3 flex flex-col items-center">
          {/* userName input area begins here */}
          <div>
            <input
              className="border-2 rounded-xl text-center "
              type="text"
              value={userName}
              onChange={handleChange}
              placeholder="Enter user name"
            />
          </div>
          {/* Error message begins here */}
          {error && (
            <div className="p-2 error-message">
              <Notice text={error} />
            </div>
          )}
          {/* Error message ends here */}
          {/* userName input ends here */}

          {/* submit button begins here */}
          <div className="submit-button">
            <input
              className="rounded-md border text-center bg-gray-200"
              type="submit"
              value="submit"
            />
          </div>
          {/* submit button ends here */}
        </div>
      </form>
    </>
  );
}

export default CreateUserName;
