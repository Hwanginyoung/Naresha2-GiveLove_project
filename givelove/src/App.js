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
import Gmypage from "./containers/Gmypage";
import MoneyDetail from "./containers/MoneyDetail";
import ArticleDetail from './containers/ArticleDetail';
import MakeMoney from './containers/MakeMoney';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="Gsignup" element={<Gsignup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dmypage" element={<Dmypage />} />
        <Route path="/Gmypage" element={<Gmypage />} />
        <Route path="/Moneydetail" element={<MoneyDetail />} />
        <Route path="/Articledetail" element={<ArticleDetail />} />
        <Route path="/Makemoney" element={<MakeMoney />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
