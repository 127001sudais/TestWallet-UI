// Page Layout
import PageLayout from "../../containers/PageLayout/PageLayout";

// header
import Header from "../../components/Header/Header";

// children
import PinEntry from "../../components/PIN/PinEntry";
import Button from "../../components/FirstScreen/Button";

function FirstScreenIndex() {
  return (
    <PageLayout>
      <Header />
      <PinEntry />
      <Button />
    </PageLayout>
  );
}

export default FirstScreenIndex;
