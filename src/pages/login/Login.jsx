import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function Login(props) {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to OPS.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            magni numquam mollitia. Architecto voluptate similique consequuntur
            reprehenderit delectus perspiciatis?
          </p>
          <span>Do you have an account?</span>
          <Link to="/register" className="link">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" id="username" placeholder="Username" />
            <input type="password" id="password" placeholder="Password" />
            <Link to="/">
            <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
          <p>Username: nick  / password: nick</p>
        </div>
      </div>
    </div>
  );
}
