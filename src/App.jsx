// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import LandingPage from './components/LandingPage';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <LandingPage/>
//       <Routes>
        
      
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

import Career from './components/Careers';
import Traffic from './components/Traffics';
import Policys from './components/Policy';
import Media from './components/Media';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/tariffs" element={<Traffic/>}/>
        <Route path="/careers" element={<Career/>} /> 
        <Route path="/policy" element={<Policys/>} /> 
        <Route path="/media" element={<Media/>} /> 
        <Route path="/contact" element={<Contacts/>} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
