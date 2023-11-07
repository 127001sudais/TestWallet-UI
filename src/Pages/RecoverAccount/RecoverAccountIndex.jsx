import PageLayout from "../../containers/PageLayout/PageLayout";

import Header from "../../components/Header/Header";

// children
import RecoverAccount from "../../components/RecoverAccount/RecoverAccount";

function RecoverAccountIndex() {
  return (
    <PageLayout>
      <Header />
      <RecoverAccount />
    </PageLayout>
  );
}

export default RecoverAccountIndex;
