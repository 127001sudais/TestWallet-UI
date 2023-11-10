import React from "react";

// page layout
import PageLayout from "../../containers/PageLayout/PageLayout";

// header
import Header from "../../components/Header/Header";

// Children
import My12WordsNotice from "../../components/My12Words/My12WordsNotice/My12WordsNotice";
import SecretPhrases from "../../components/My12Words/SecretPhrases/SecretPhrases";

function My12WordsIndex() {
  return (
    <PageLayout>
      <Header />
      <My12WordsNotice />
      <SecretPhrases />
    </PageLayout>
  );
}

export default My12WordsIndex;
