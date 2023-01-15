import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>OPS Social.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            magni numquam mollitia. Architecto voluptate similique consequuntur
            reprehenderit delectus perspiciatis?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login" className="link">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
