;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

import Career from './components/Careers';
import Traffic from './components/Traffics';
import Policys from './components/Policy';
import Media from './components/Media';
import Contacts from './components/Contacts';
import MultiModel from './pages/MultiModel';
import TerminalManagement from './pages/TerminalManagement';
import CustomClearance from './pages/CustomClearance';
import Warehousing from './pages/Warehousing';
import AboutDetails from './components/AboutDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import Faq from './pages/Faq';
import ServiceSection from './components/Services';
import MainOverview from './components/MainOverview';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path = "/services" element={<ServiceSection/>}/>
        <Route path="/traffic-overview" element={<Traffic/>}/>
        <Route path="/careers" element={<Career/>} /> 
        <Route path="/environmental-policy" element={<Policys/>} /> 
        <Route path="/media-releases" element={<Media/>} /> 
        <Route path="/contact-us" element={<Contacts/>} />
        <Route path="/multi-model-transportation" element={ <MultiModel/>}/>
        <Route path="/terminal-management" element={<TerminalManagement/>}/>
        <Route path="/custom-clearance" element={<CustomClearance/>}/>
        <Route path="/Warehouse" element={<Warehousing/>}/>
        <Route path="/about" element={<AboutDetails/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-&-condition" element={<TermsAndCondition/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/overview" element={<MainOverview/>}/>
      </Routes>
     
      
    </Router>
    
  );
}

export default App;
