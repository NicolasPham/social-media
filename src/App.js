import "./style.scss";
import { useState, useContext } from "react";
/******* PAGES *******/
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
/******* COMPONENTS *******/
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Navbar from "./components/navbar/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
/*** Context ***/
import { AuthContext } from "./context/authContext";

export default function App() {
  const [mode, setMode] = useState(true);
  const toggleMode = () => {
    setMode(!mode);
    return mode;
  };

  /*****Authenticated ******/

  const { currentUser } = useContext(AuthContext);
  /***************** */

  const Layout = () => {
    return (
      <div className={`${mode ? "theme-light" : "theme-dark"}`}>
        <Navbar mode={mode} changeMode={toggleMode} />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        // </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
