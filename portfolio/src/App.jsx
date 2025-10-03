import './App.css';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import AboutMePage from './components/AboutMePage';
import ContactPage from './components/ContactPage';
import MyServices from './components/MyServices';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<MyServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
