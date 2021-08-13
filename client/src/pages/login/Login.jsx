import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <img
        className="loginImg"
        src="https://images.immediate.co.uk/production/volatile/sites/25/2020/05/Mars-Saturn-Jupiter-3bd67e3-e1591182300998.jpg?quality=90&resize=300,200"
        alt=""
      />
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginEmail"
          placeholder="Enter your email here..."
        />
        <label>Password</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your password here..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
