import React from "react";
import FooterAboutUs from "../pages/footerPages/FooterAboutUs";
import FooterQuickLinks from "../pages/footerPages/FooterQuickLinks";
import FooterContactUs from "../pages/footerPages/FooterContactUs";
import FooterCopyright from "../pages/footerPages/FooterCopyright";

const Footer = () => {
  return (
    <React.Fragment>
      <main>
        <div className="bg-black text-gray-400 px-4 py-4 ">
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:space-x-20 md:pl-14">
            <FooterAboutUs />
            <FooterQuickLinks/>
            <FooterContactUs/>
           
          </div>
          <div>
          <FooterCopyright/>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Footer;
