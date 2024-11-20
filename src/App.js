import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SocialMediaChecker from './components/SocialMediaChecker';
import Consultas from './components/Consultas';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar navigateTo={navigateTo} />
      {currentPage === 'dashboard' && (
        <>
          <Dashboard />
          <SocialMediaChecker />
        </>
      )}
      {currentPage === 'consultas' && <Consultas />}
    </div>
  );
}

export default App;