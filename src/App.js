import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Academy from './pages/Academy';
import Capoeira from './pages/Capoeira';
import Contact from './pages/Contact';
import Trainings from './pages/Trainings';
import Navbar from "./components/Navbar";
import History from "./pages/Capoeira/History";
import Music from "./pages/Capoeira/Music";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/capoeira' element={<Capoeira />} />
          <Route path='/capoeira/history' element={<History />} />
          <Route path='/capoeira/music' element={<Music />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/trainings' element={<Trainings />} />
          <Route path='/calendar' element={<Trainings />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
