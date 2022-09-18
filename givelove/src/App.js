import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./components/Footer";

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
