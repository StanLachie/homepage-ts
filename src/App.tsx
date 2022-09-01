import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";

function App() {
  const selectedMode = localStorage.getItem("hpDarkMode");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("hpDarkMode", JSON.stringify(darkMode));
  };

  useEffect(() => {
    if (selectedMode === "false") {
      setDarkMode(true);
    }
  }, []);

  return (
    <BrowserRouter basename="/homepage-ts">
      <Routes>
        <Route
          path="/"
          element={<Homepage darkMode={darkMode} toggleDark={toggleDarkMode} />}
        ></Route>
        <Route
          path="/settings"
          element={<Settings darkMode={darkMode} toggleDark={toggleDarkMode} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
