import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email..." />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>

      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}
