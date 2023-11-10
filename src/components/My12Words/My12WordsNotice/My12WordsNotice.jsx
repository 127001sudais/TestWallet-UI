import React from "react";

import Notice from "../../Notice/Notice";

function My12WordsNotice() {
  let text1 =
    "if something happens to your device these words recover your account";

  let text2 =
    "if anyone sees your 12 words create a new account and move your funds immediately";

  let text3 = "record securely, offline, in order:";
  return (
    <>
      <Notice text={text1} />
      <Notice text={text2} />
      <Notice text={text3} />
    </>
  );
}

export default My12WordsNotice;
