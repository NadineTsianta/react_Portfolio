import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/Header/Header";
import HomeItem from "./components/HomePage/HomePage";




function App() {
 
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomeItem />}/>


    </Routes>



   </Router>

  )
}

export default App;
