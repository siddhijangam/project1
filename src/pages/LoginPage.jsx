import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="https://www.pexels.com/download/video/2098988/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Card */}
      <div className="login-box">
        <div className="login-icon">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsBXvo2XH9G5pzFe9XHSlmzjwyNzxLY_fVcAlcXBtL0CpSTMiTPep3z83oSm1F345NW0&usqp=CAU"
            alt="logo"
          />
        </div>
        <h2>Login Here</h2>
        <form>
          <div className="input-box">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="extra-links">
          <a href="#">Forget Password</a>
          <a href="#">Registration</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
