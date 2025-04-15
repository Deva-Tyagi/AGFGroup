import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
// import ProfitPlan from './Components/ProfitPlan/ProfitPlan';
// import Tenure from './Components/Tenure/Tenure';
import Security from './Components/Security/Security';
import Benefits from './Components/Benefits/Benefits';
// import Process from './Components/Process/Process';
import Projects from './Components/Projects/Projects';
import Risk from './Components/Risk/Risk';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner id="home" />
      <About id="about" />
      {/* <ProfitPlan id="profit-plan" /> */}
      {/* <Tenure id="investment" /> */}
      <Security id="security" />
      <Benefits id="benefits" />
      {/* <Process id="process" /> */}
      <Projects id="projects" />
      <Risk id="risk" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default App;