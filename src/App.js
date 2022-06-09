import React from "react";
import Cloud from "./components/Cloud";
import Data from "./components/Data";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;
