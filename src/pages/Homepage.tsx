import React, { FC, useState } from "react";
import AppSlider from "../components/AppSlider";
import Clock from "../components/Clock";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

interface HomepageProps {
  darkMode: boolean;
  toggleDark: Function;
}

const Homepage: FC<HomepageProps> = (props) => {
  return (
    <div
      className={`flex-1 h-screen ${
        props.darkMode ? "bg-zinc-800" : "bg-gray-100"
      } text-gray-800`}
    >
      <Navbar
        name="Lachie"
        settings={false}
        darkMode={props.darkMode}
        toggleDark={props.toggleDark}
      />
      <Clock darkMode={props.darkMode} />
      <Searchbar darkMode={props.darkMode} />
      <AppSlider darkMode={props.darkMode} />
    </div>
  );
};

export default Homepage;
