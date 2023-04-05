import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutLink from './AboutLink';
import ContactLink from './ContactLink';
import FAQLink from './FAQLink';
import HelpLink from './HelpLink';
import PrivacyLink from './PrivacyLink';
import TermsLink from './TermsLink';

const AllQuickLinks = () => {
  return (
    <React.Fragment>
    <main>
      <div className='bg-red-500 h-96 text-white text-3xl centered'>
        <Routes>
        <Route path="/about" element={<AboutLink />} />
        <Route path="/faq" element={<FAQLink />} />
        <Route path="/help" element={<HelpLink />} />
        <Route path="/privacy" element={<PrivacyLink />} />
        <Route path="/terms" element={<TermsLink />} />
        <Route path="/contact" element={<ContactLink />} />
        </Routes>
        
      </div>
    </main>
  </React.Fragment>
  )
}

export default AllQuickLinks