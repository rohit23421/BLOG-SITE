import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <img
        className="registerImg"
        src="https://images.immediate.co.uk/production/volatile/sites/25/2020/05/Mars-Saturn-Jupiter-3bd67e3-e1591182300998.jpg?quality=90&resize=300,200"
        alt=""
      />
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerEmail"
          placeholder="Enter your Username here..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerEmail"
          placeholder="Enter your email here..."
        />
        <label>Password</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your password here..."
        />
        <button className="registerButton">register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
