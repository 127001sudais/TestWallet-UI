import React from "react";

function PageLayout({ children }) {
  return (
    <>
      <div className="flex flex-col lg:p-16 md:p-8 p-4">{children}</div>
    </>
  );
}

export default PageLayout;
