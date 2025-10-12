import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Journal = lazy(() => import("./pages/Journal"));
const Talk = lazy(() => import("./pages/Talk"));
const Pause = lazy(() => import("./pages/Pause"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/pause" element={<Pause/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
