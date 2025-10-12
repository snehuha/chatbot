import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Talk from "./pages/Talk";
import Pause from "./pages/Pause";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talk" element={<Talk />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/pause" element={<Pause />} />
      </Routes>
    </Router>
  );
}

export default App;
