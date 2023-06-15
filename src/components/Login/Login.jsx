import "./LoginUI.css";

import profile from "../../components/image/a.png";
import email from "../../components/image/email.jpg";
import pass from "../../components/image/pass.png";

import React from "react";
import { Link } from "react-router-dom";

/* function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, such as API requests
    // For simplicity, we'll just call handleLogin with the email
    handleLogin(email);
  }; */
const Login = () => {
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                />
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>

              <p className="link">
                <Link to={"/signup"}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*   animation screen */}
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

/*   <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div> */

export default Login;
