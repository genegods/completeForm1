import React from 'react'
import { MediaData } from "../../data/FooterData";

const FooterAboutUs = () => {
  return (
    <React.Fragment>
    <main>
      <div>
        <div>
        <p className="text-2xl font-semibold mb-4 text-white">About Us</p>
        <p>
              This error occurred during the build time and cannot be
              dismissed.This error occurred during the build time and cannot be
              dismissed.This error occurred during the build time and cannot be
              dismissed.
            </p>
       
        </div>
        {/* media icons */}
        <div className='flex mt-4'>
            {
                MediaData.map((item) => {
                    return(
                        <div key={item.id}>
                            <div>
                                <a href={item.href} target="_blank">
                                <img src={item.img} alt="media" className="h-8" />
                                </a>
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

export default FooterAboutUs