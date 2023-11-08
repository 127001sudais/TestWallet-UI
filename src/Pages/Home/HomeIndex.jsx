import PageLayout from "../../containers/PageLayout/PageLayout";

import Header from "../../components/Header/Header";

// children
import UserBalance from "../../components/Home/Balance";
import SearchBar from "../../components/Home/SearchUser";

function HomeIndex() {
  return (
    <PageLayout>
      <Header />
      <UserBalance />
      <SearchBar />
    </PageLayout>
  );
}

export default HomeIndex;
