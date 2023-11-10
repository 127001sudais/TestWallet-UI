import React from "react";

import ModalLayout from "../../containers/ModalLayout/ModalLayout";

function PayBox({ isOpen, toggleModal }) {
  return (
    <ModalLayout title="Pay Box" isOpen={isOpen} toggleModal={toggleModal}>
      this is paybox
    </ModalLayout>
  );
}

export default PayBox;
