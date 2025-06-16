import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import Register from "./components/Register";
import ItemDetails from "./components/ItemDetails";
import SearchResults from "./components/SearchResults";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
