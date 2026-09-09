import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import StudentDashboard from "./pages/student/StudentDashboard";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/signup" element={<SignupPage />} />

  <Route
    path="/dashboard/student"
    element={<StudentDashboard />}
  />

  <Route
    path="/dashboard/recruiter"
    element={<RecruiterDashboard />}
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;