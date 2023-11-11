import React, { useEffect, useState } from "react";

// Header
import Header from "../../Header/Header";

// utils function to check the validity of username
import { isValidUserName } from "../../../utils/CreateAccount/validUtils";

// Error message display
import Notice from "../../Notice/Notice";

function CreateUserName({ nextStep }) {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidUserName(userName)) {
      nextStep({ userName });
    } else {
      setError("Username can only contain letter,numbers and full stops");
    }
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
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

      <form className="" onSubmit={handleSubmit}>
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
          {/* userName input ends here */}

          {/* submit button begins here */}
          <div className="mt-3">
            <input
              className="rounded-md border text-center  bg-gray-200 p-1"
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
