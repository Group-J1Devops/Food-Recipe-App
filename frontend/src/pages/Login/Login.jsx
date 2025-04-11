import React, { useState } from "react";
import "./Login.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);
  return (
    <>
      <section>
        <div className="form-data">
          <div className="form-heading">
            <h2>Sign in to RecipeEasy</h2>
          </div>

          <div className="profile_div text-center">
            <img src="/Recipeasy-logo.png" alt="" style={{ width: "90px" }} />
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your email address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passwordShow ? "password" : "text"}
                  name="password"
                  id=""
                  placeholder="Enter your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {!passwordShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn">Login</button>
            <p>
              Don't have an account? <NavLink to={"/register"}>Sign Up</NavLink>
            </p>
            <p>
              Forgot Password?
              <NavLink to={"/forgotpassword"}>Click Here</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
