import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Items from "./components/Items";
import ItemDetail from "./components/ItemDetail";
import AddItem from "./components/AddItem";
import Search from "./components/Search";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
