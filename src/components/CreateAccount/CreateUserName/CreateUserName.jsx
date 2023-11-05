import React, { useState } from "react";

// Header
import Header from "../../Header/Header";

function CreateUserName({ nextStep }) {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ userName });
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={handleChange}
          placeholder="Enter user name"
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default CreateUserName;
