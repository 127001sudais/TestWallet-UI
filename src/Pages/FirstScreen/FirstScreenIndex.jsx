// Page Layout
import PageLayout from "../../containers/PageLayout/PageLayout";

// header
import Header from "../../components/Header/Header";

// children
import PinEntry from "../../components/PIN/PinEntry";
import Button from "../../components/FirstScreen/Button";

// custom hook
import { useState } from "react";

function FirstScreenIndex() {
  const [pin, setPin] = useState("");
  const handleButtonClick = (value) => {
    if (pin.length < 6) {
      setPin(pin + value);
    }
  };

  const handleBackSpaceClick = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <PageLayout>
      <Header />
      <PinEntry
        onClick={handleButtonClick}
        onBackSpaceClick={handleBackSpaceClick}
      />
      <Button />
    </PageLayout>
  );
}

export default FirstScreenIndex;
