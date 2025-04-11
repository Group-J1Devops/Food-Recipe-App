import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <section>
        <div className="form-data">
          <div className="form-heading">
            <h2>Forgot Password</h2>
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

            <button className="btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
