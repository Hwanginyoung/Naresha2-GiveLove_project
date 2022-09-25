import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Main from "./containers/Main";
import Signup from "./containers/Signup";
import Gsignup from "./containers/Gsignup";
import Home from "./components/Home";
import Dmypage from "./containers/Dmypage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gsignup" element={<Gsignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dmypage" element={<Dmypage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
