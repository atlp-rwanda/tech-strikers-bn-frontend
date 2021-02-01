import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Navbar />
    <Home />
    <Footer />
  </div>
);
export default App;
