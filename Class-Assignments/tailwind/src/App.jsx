import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgeVerification from "./pages/AgeVerification";
import EmailEntry from "./pages/EmailEntry";
import OTPVerification from "./pages/OTPVerification";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AgeVerification />} />
      <Route path="/email" element={<EmailEntry />} />
      <Route path="/verify" element={<OTPVerification />} />
    </Routes>
  </Router>
);
export default App;
