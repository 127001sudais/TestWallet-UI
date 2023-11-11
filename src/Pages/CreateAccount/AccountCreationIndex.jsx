import React, { useEffect, useState } from "react";

// CreateAccount components
// arranged according to the account creation steps
import CreateUserName from "../../components/CreateAccount/CreateUserName/CreateUserName";
import CreatePin from "../../components/CreateAccount/CreatePin/CreatePin";
import ConfirmPin from "../../components/CreateAccount/ConfirmPin/ConfirmPin";
import RecoveryPhrase from "../../components/CreateAccount/RecoveryPhrase/RecoveryPhrase";
import Agreement from "../../components/CreateAccount/Agreement/Agreement";

// custom hook
import useIndexedDB from "../../hooks/useIndexedDB";

// Layout
import PageLayout from "../../containers/PageLayout/PageLayout";
import FirstScreenIndex from "../FirstScreen/FirstScreenIndex";

function AccountCreationIndex() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const saveUserData = useIndexedDB();

  const nextStep = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);

    if (step === 5) {
      saveUserData(userData);
    }
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
          <CreateUserName nextStep={nextStep} />
        </PageLayout>
      );
    case 2:
      return (
        <PageLayout>
          <CreatePin nextStep={nextStep} prevStep={prevStep} />
        </PageLayout>
      );
    case 3:
      return (
        <PageLayout>
          <ConfirmPin
            nextStep={nextStep}
            prevStep={prevStep}
            pin={userData.pin}
          />
        </PageLayout>
      );
    case 4:
      return (
        <PageLayout>
          <RecoveryPhrase nextStep={nextStep} prevStep={prevStep} />
        </PageLayout>
      );
    case 5:
      return (
        <PageLayout>
          <Agreement nextStep={nextStep} prevStep={prevStep} />
        </PageLayout>
      );
    default:
      return <FirstScreenIndex />;
  }
}

export default AccountCreationIndex;
