import React, { useState } from "react";

const ResetPassword = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);
  return (
    <>
      <section>
        <div className="form-data">
          <div className="form-heading">
            <h2>Reset Your Password</h2>
          </div>

          <form>
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

            <button className="btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
