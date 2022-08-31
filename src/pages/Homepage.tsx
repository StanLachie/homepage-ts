import React from "react";
import AppSlider from "../components/AppSlider";
import Clock from "../components/Clock";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

function Homepage() {
  return (
    <div className="flex-1 h-screen bg-gray-100 text-gray-800">
      <Navbar name="Lachie" settings={false} />
      <Clock />
      <Searchbar />
      <AppSlider />
    </div>
  );
}

export default Homepage;
