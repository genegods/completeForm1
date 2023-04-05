import React from 'react'
import { ContactUsData } from "../../data/FooterData";

const FooterContactUs = () => {
  return (
    <React.Fragment>
    <main>
      <div>
        <div>
        <p className="text-2xl font-semibold text-white mb-4">Contact Us</p>
        </div>

        {/* contact items */}
        <div>
          {
            ContactUsData.map((item) => {
              return(
                <div key={item.id}>
                  <div className='flex items-center space-x-2'>
                  <p className="text-white">{item.icon}</p>
                  <p>{item.info}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default FooterContactUs