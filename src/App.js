import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const user = true;
  return (
    <Router>
      <Topbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/post/:postId" element={user ? <Single /> : <Login />} />
        <Route path="/:id/setting" element={user ? <Setting /> : <Login />} />
        <Route path="/:id/write" element={user ? <Write /> : <Login />} />
      </Routes>
    </Router>
  );
}
