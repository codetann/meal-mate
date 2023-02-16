import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingRoute, JoinRoute } from "@/features/onboarding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/join" element={<JoinRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
