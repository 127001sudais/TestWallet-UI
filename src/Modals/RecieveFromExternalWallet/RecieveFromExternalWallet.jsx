import React from "react";

// icon
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// notice
import RecieveFromExternalWalletNotice from "./RecieveFromExternalWalletNotice";

// modal layout
import ModalLayout from "../../containers/ModalLayout/ModalLayout";

// dummy data
import { walletAddress } from "../../data/address";

function RecieveFromExternalWallet({ isOpen, toggleModal }) {
  // function to COPY_TO_CLIPBOARD
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(walletAddress)
      .then(() => console.log("Copied"))
      .catch(() => console.log("Failed to copy text"));
  };
  return (
    <ModalLayout
      title="Recieve From External Wallet"
      isOpen={isOpen}
      toggleModal={toggleModal}
    >
      <div>
        <RecieveFromExternalWalletNotice />
        {/* Wallet Address */}
        <div className="mt-2 bg-black text-white">
          <p className="text-xs truncate">{walletAddress}</p>{" "}
        </div>
        <button className="mt-2" onClick={copyToClipboard}>
          <ContentCopyIcon />
        </button>
      </div>
    </ModalLayout>
  );
}

export default RecieveFromExternalWallet;
