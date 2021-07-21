import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <div className="circle-c circle-c-1"></div>
      <div className="circle-c circle-c-2"></div>
      <div className="circle-c circle-c-3"></div>
      <div className="main ">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
