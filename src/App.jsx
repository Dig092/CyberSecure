// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Homepage" ;
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Dashboard";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  )
};
export default App;