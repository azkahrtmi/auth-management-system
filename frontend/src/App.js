import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashUser from "./pages/DashUser";
import DashAdmin from "./pages/DashAdmin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboarduser" element={<DashUser />} />
          <Route path="/dashboardadmin" element={<DashAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
