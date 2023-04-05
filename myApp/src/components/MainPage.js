import React from "react";
import Footer from "./Footer";
import AllQuickLinks from "../pages/footerQuickLinksPages/AllQuickLinks";

const MainPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="px-2 md:w-10/12 md:mx-auto">
          <AllQuickLinks />

          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
