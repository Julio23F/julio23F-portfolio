import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";


const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <Home/>
    </div>
  );
};

export default App;
