import React from "react";
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Welcome to Tejaswini H Portfolio
      </h1>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
