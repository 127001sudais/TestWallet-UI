import React from "react";

// page layout
import PageLayout from "../../containers/PageLayout/PageLayout";

// children
import About from "../../components/About/About";

//Header
import Header from "../../components/Header/Header";

function AboutIndex() {
  return (
    <PageLayout>
      <Header />
      <About />
    </PageLayout>
  );
}

export default AboutIndex;
