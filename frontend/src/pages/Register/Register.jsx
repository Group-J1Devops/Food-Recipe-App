import React, { useState } from "react";
import "../Login/Login.scss";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);
  return (
    <>
      <section>
        <div className="form-data">
          <div className="form-heading">
            <h2>Sign up to RecipeEasy!</h2>
          </div>

          <div className="profile_div text-center">
            <img src="/Recipeasy-logo.png" alt="" style={{ width: "90px" }} />
          </div>

          <form>
            <div className="form_input">
              <input
                type="text"
                name="username"
                id=""
                placeholder="Enter Your Name"
              />
            </div>

            <div className="form_input">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your email address"
              />
            </div>

            <div className="form_input">
              <input type="file" name="userprofilepicture" id="" />
            </div>

            <div className="form_input">
              <div className="two">
                <input
                  type={!passwordShow ? "password" : "text"}
                  name="password"
                  id=""
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {!passwordShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <div className="form_input">
              <div className="two">
                <input
                  type={!passwordConfirmShow ? "password" : "text"}
                  name="password"
                  id=""
                  placeholder="Confirm Password"
                />
                <div
                  className="showpass"
                  onClick={() => setPasswordConfirmShow(!passwordConfirmShow)}
                >
                  {!passwordConfirmShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn">Sign Up</button>
            <p>
              Already have an account? <NavLink to={"/login"}>Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
