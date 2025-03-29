import "./App.css";
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePoll from "./pages/CreatePoll";
import PollDetail from "./pages/PollDetail";
import Results from "./pages/Results";



function App() {
  const { user} = useAuth();
  return <>
  <Router>
    {user && <Navbar />}
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/dashboard"} />
      <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
    </Routes>
  </Router>
  </>;
}

export default App;
