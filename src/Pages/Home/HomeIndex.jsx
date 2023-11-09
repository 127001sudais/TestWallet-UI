import PageLayout from "../../containers/PageLayout/PageLayout";

import Header from "../../components/Header/Header";

// children
import UserBalance from "../../components/Home/Balance";
import SearchBar from "../../components/Home/SearchUser";
import ContactList from "../../components/Home/ContactList";
import { useState } from "react";

function HomeIndex() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <PageLayout>
      <Header />
      <UserBalance />
      <SearchBar setSelectedPerson={setSelectedPerson} />
      <ContactList selectedPerson={selectedPerson} />
    </PageLayout>
  );
}

export default HomeIndex;
