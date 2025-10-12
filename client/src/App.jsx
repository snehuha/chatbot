import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Journal = lazy(() => import("./pages/Journal"));
const Talk = lazy(() => import("./pages/Talk"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
