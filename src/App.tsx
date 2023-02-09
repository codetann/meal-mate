import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingRoute } from "@/features";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
