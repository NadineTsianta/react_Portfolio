import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/pages/Header";
import HomeItem from "./components/pages/HomePage";
import ProjectEl from "./components/pages/ProjectsPage";
import ContactEl from "./components/pages/Contact";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeItem />} />
        <Route path="project" element={<ProjectEl />} />
        <Route path="contact" element={<ContactEl />} />
      </Routes>
    </Router>
  );
}

export default App;
