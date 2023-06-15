import "./Signup.css";
import profile from "../../components/image/a.png";
import email from "../../components/image/email.jpg";
import pass from "../../components/image/pass.png";
import React from "react";

/* function Signup({ handleSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, such as API requests
    // For simplicity, we'll just call handleSignup with the email
    handleSignup(email);
  };
 */
const Signup = () => {
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
              <h1>signup Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="email" placeholder="Email" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="Password"
                  className="name"
                />
              </div>

              <div className="login-button">
                <button>Create account</button>
              </div>
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
export default Signup;
