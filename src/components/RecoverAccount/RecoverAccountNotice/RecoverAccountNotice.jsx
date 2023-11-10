import React from "react";
import Notice from "../../Notice/Notice";

const text1 =
  " recovering an old account on this device kicks you out of your current account";
const text2 =
  " you will need your 12 words from your current account to get back in";

function RecoverAccountNotice() {
  return (
    <>
      <Notice text={text1} />
      <Notice text={text2} />
    </>
  );
}

export default RecoverAccountNotice;
