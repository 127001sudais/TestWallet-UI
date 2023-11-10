import React from "react";

import SrpInput from "./SrpInput";
import RecoverAccountNotice from "./RecoverAccountNotice/RecoverAccountNotice";

function RecoverAccount() {
  return (
    <>
      <RecoverAccountNotice />
      <SrpInput />
    </>
  );
}

export default RecoverAccount;
