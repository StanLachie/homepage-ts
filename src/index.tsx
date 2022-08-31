import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename="https://stanlachie.github.io/homepage-ts/">
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  </BrowserRouter>
);
