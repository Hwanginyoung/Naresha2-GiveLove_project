import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Main from "./containers/Main";
import Signup from "./containers/Signup";
import Gsignup from "./containers/Gsignup";
<<<<<<< Updated upstream
import Home from "./components/Home";
import Dmypage from "./containers/Dmypage";
import Gmypage from "./containers/Gmypage";
=======
import MoneyDetail from "./containers/MoneyDetail";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gsignup" element={<Gsignup />} />
<<<<<<< Updated upstream
        <Route path="/home" element={<Home />} />
        <Route path="/dmypage" element={<Dmypage />} />
        <Route path="/gmypage" element={<Gmypage />} />
=======
        <Route path="/moneydetail" element={<MoneyDetail />} />
>>>>>>> Stashed changes
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
