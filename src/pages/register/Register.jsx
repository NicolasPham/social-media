import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username..." />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email..." />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}
