import React, { useEffect, useState } from "react";

// CreateAccount components
// arranged according to the account creation steps
import CreateUserName from "../../components/CreateAccount/CreateUserName/CreateUserName";
import CreatePin from "../../components/CreateAccount/CreatePin/CreatePin";
import ConfirmPin from "../../components/CreateAccount/ConfirmPin/ConfirmPin";
import RecoveryPhrase from "../../components/CreateAccount/RecoveryPhrase/RecoveryPhrase";
import Agreement from "../../components/CreateAccount/Agreement/Agreement";

// Error page
import ErrorIndex from "../Error/ErrorIndex";

// custom hook
import useIndexedDB from "../../hooks/useIndexedDB";

function AccountCreationIndex() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const saveUserData = useIndexedDB();

  useEffect(() => {
    if (step === 5) {
      saveUserData(userData);
    }
  }, [step, userData]);

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
      return <CreateUserName nextStep={nextStep} />;
    case 2:
      return <CreatePin nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return (
        <ConfirmPin
          nextStep={nextStep}
          prevStep={prevStep}
          pin={userData.pin}
        />
      );
    case 4:
      return <RecoveryPhrase nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <Agreement nextStep={nextStep} prevStep={prevStep} />;
    default:
      return <ErrorIndex />;
  }
}

export default AccountCreationIndex;
