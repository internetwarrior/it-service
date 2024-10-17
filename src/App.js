import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./a_components/Footer";
import Header from "./a_components/Header";
import Main from "./b_pages/Main";
import Service from './b_pages/Service';
import Repair from './b_pages/Repair';
import Development from './b_pages/Development';
// Import other components/pages if needed
// import AnotherPage from "./b_pages/AnotherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/site-development" element={<Development />} />

        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
