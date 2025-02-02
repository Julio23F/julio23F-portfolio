import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";

const App = () => {
  return (
    <div className="bg-black text-white w-screen h-screen">
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <Home/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
