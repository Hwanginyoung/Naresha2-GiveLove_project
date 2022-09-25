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
=======
import Moneydetail from './containers/MoneyDetail';
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gsignup" element={<Gsignup />} />
<<<<<<< Updated upstream
        <Route path="/home" element={<Home />} />
=======
        <Route path="/moneydetail" element={<Moneydetail />} />
>>>>>>> Stashed changes
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
