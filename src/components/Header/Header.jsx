import React from "react";

// custom hooks for handling modal
import useModal from "../../hooks/useModal";

// Icon
import SettingsIcon from "@mui/icons-material/Settings";

// CogBox
import CogBox from "../../Modals/CogBox/CogBox";

function Header() {
  const { isOpen, openModal, closeModal, toggleModal } = useModal();
  return (
    <>
      <div className="flex justify-between">
        <p className="flex-grow text-center text-2xl italic font-bold">
          PAY-RAIL
        </p>
        <button onClick={openModal}>
          <SettingsIcon />
        </button>

        {/* CogBox modal */}
        {isOpen && <CogBox isOpen={isOpen} toggleModal={toggleModal} />}
      </div>
    </>
  );
}

export default Header;
