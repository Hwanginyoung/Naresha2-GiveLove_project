import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
