import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiAuth } from "../utils/api";
import { useAuth } from "../utils/context";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

export function Login() {
  const styles = {
    textColor: {
      color: "white",
    },
    buttonColor: {
      backgroundColor: "#6B000B",
    },
  };

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { auth, setAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push("/profile");
    }
  }, []);

  function _handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function _handleSubmit(event) {
    event.preventDefault();
    const { email, password } = state;

    apiAuth
      .login(email, password)
      .then((token) => {
        setAuth({ ...auth, token });
        setTimeout(() => {
          history.push("/profile");
        })
      })
      .catch((err) => {
        // Choose your error notification
        console.log("err", err);
      });
  }
  return (
    <>
    <Navbar login={"login"}/>
    <Container>
      <div className="row">
        <div className="col-4"></div>
        <div
          className="col-4 py-3 mb-5"
          style={styles.textColor}
        >
          <h3>Login to your Voter Dashboard</h3>
          <hr></hr>
          <form onSubmit={_handleSubmit}>
            <label htmlFor="emailInput" className="form-label">
              Email Address
            </label>
            <input
            name="email"
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              value={state.username}
                onChange={_handleChange}
            ></input>
            <label
              htmlFor="passwordInput"
              className="form-label pt-3"
            >
              Password
            </label>
            <input
            name="password"
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder=""
              value={state.password}
              onChange={_handleChange}
            ></input>
            <button
              type="submit"
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
    </>
  );
}

