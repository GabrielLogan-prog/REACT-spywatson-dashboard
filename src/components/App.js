import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SocialMediaChecker from './components/SocialMediaChecker';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <SocialMediaChecker />
    </div>
  );
}

export default App;