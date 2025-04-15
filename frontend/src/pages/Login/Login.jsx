import React, { useState } from "react";
import "./Login.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { userLogin } from "../../redux/slice/userAuthSlice/userAuthSlice";

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const { email, password } = inputValue;

    if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid Email");
    } else if (password === "") {
      toast.error("Password is required");
    } else {
      dispatch(userLogin(inputValue))
        .then((res) => {
          if (res.payload !== undefined) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

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
                onChange={handleChange}
                id=""
                placeholder="Enter your email address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passwordShow ? "password" : "text"}
                  onChange={handleChange}
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

            <button className="btn" onClick={handleSumbit}>
              Login
            </button>
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
