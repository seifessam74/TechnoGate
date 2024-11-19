// App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Applications,
  Feedbacks,
  Hero,
  Navbar,
  Services,
  Clients,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter basename="/TechnoGate">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Applications />
        <Clients />
        {/* <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
