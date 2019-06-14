import React from 'react';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import MainContent from './components/common/content/MainContent';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="left-content">
        <Header />            
        <MainContent />
        <div className="clearfix"> </div>
        <Footer />             
        <div className="clearfix"> </div>
      </div>
    </div>
  );
}

export default App;
