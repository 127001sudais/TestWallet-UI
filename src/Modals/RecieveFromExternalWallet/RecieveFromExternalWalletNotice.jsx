import React from "react";

// Notice
import Notice from "../../components/Notice/Notice";

const text1 =
  "Use your full cocoa account alphanumeric bitcoin wallet address to receive funds from external wallets.";
const text2 =
  " If you feel unsure about this process, get someone you trust to help you";
const text3 = "Please copy the address.";

function RecieveFromExternalWalletNotice() {
  return (
    <>
      <Notice text={text1} />
      <Notice text={text2} />
      <Notice text={text3} />
    </>
  );
}

export default RecieveFromExternalWalletNotice;
