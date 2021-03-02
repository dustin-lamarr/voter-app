import React from "react";
import Container from "../components/Container";

export function Login() {
  const styles = {
    textColor: {
      color: "white",
    },
    buttonColor: {
      backgroundColor: "#6B000B",
    },
  };
  return (
    <Container>
      <div className="row">
        <div className="col-4"></div>
        <div
          className="col-4 border rounded py-3 mb-5"
          style={styles.textColor}
        >
          <h3>Login to your Voter Dashboard</h3>
          <hr></hr>
          <form>
            <label htmlFor="emailInput" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
            ></input>
            <label
              htmlFor="passwordInput"
              className="form-label pt-3"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder=""
            ></input>
            <button
              type="button"
              className="btn btn-dark mt-3"
              style={styles.buttonColor}
            >
              Login
            </button>
            <hr />
            <p className="fs-5">
              Don't have an account? Create one now, to make sure your
              representatives work for YOU.
            </p>
            <a href="/signup">
              <h5>Create Account</h5>
            </a>
          </form>
        </div>

        <div className="col-4"></div>
      </div>
    </Container>
  );
}

