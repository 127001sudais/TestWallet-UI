import React, { useState } from "react";
import PageLayout from "../../containers/PageLayout/PageLayout";

// Change Pin components
// Arranged according to steps
import EnterCurrentPin from "../../components/ChangePin/EnterCurrentPin";
import EnterNewPin from "../../components/ChangePin/EnterNewPin";
import ConfirmPin from "../../components/ChangePin/ConfirmPin";
import FirstScreenIndex from "../FirstScreen/FirstScreenIndex";

function ChangePinIndex() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const nextStep = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  switch (step) {
    case 1:
      return (
        <PageLayout>
          <EnterCurrentPin nextStep={nextStep} />
        </PageLayout>
      );
    case 2:
      return (
        <PageLayout>
          <EnterNewPin nextStep={nextStep} prevStep={prevStep} />
        </PageLayout>
      );
    case 3:
      return (
        <PageLayout>
          <ConfirmPin nextStep={nextStep} prevStep={prevStep} />
        </PageLayout>
      );
    default:
      return (
        <>
          <FirstScreenIndex />
        </>
      );
  }
}

export default ChangePinIndex;
