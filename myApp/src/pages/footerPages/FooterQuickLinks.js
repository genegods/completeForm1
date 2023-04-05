import React from "react";
import { QuickLinksData } from "../../data/FooterData";

const FooterQuickLinks = () => {
  return (
    <React.Fragment>
      <main>
        <div>
          <div>
            <p className="text-2xl font-semibold text-white mb-4 ">
              Quick Links
            </p>
          </div>

          {/* links section */}
          <div>
            {
                QuickLinksData.map((item) => {
                    return(
                        <div key={item.id}>
                            <div>
                            <a href={item.path}>{item.myLink}</a>
                            </div>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default FooterQuickLinks;
