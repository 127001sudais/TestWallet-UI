import PageLayout from "../../containers/PageLayout/PageLayout";

import Header from "../../components/Header/Header";

// children
import UserBalance from "../../components/Home/Balance";
function HomeIndex() {
  return (
    <PageLayout>
      <Header />
      <UserBalance />
    </PageLayout>
  );
}

export default HomeIndex;
