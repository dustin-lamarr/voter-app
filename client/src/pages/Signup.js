import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiAuth } from "../utils/api";
import { useAuth } from "../utils/context";
import Container from "../components/Container";

export function Signup() {
  const styles = {
    textColor: {
      color: "white",
    },
    buttonColor: {
      backgroundColor: "#6B000B",
    },
    optionsColor: {
      color: "black",
    },
  };

  const [states, getStates] = useState([]);

  useEffect(() => {
    axios.get("./states.json").then((res) => {
      getStates(res.data.states);
    });
  }, []);

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    address2: "",
    city: "",
    states: "",
    zip: "",
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
    setLogin({ ...login, [name]: value });
    setUserData({ ...userData, [name]: value });
  }

  function _handleSubmit(event) {
    event.preventDefault();
    const { username, password } = login;

    apiAuth
      .register(username, password)
      .then((token) => {
        setAuth({ ...auth, token });
        setTimeout(() => {
          history.push("/profile");
        });
      })
      .catch((err) => {
        // Choose your error notification
        // console.log("err", err);
      });
  }

  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-4"></div>
          <div
            className="col-4 border rounded py-3 mb-5"
            style={styles.textColor}
          >
            <h3>Create your Voter account</h3>
            <hr></hr>
            <form onSubmit={_handleSubmit}>
              <div className="row pb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    value={userData.first_name}
                    onChange={_handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    value={userData.last_name}
                    onChange={_handleChange}
                  />
                </div>
              </div>
              <div className="col-12 pb-3">
                <label htmlFor="addressInput" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressInput"
                  placeholder="1234 Main St"
                  value={userData.address}
                  onChange={_handleChange}
                />
              </div>
              <div className="col-12 pb-3">
                <label htmlFor="addressInput2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressInput2"
                  placeholder="Apartment, studio, or floor"
                  value={userData.address2}
                  onChange={_handleChange}
                />
              </div>
              <div className="row">
                <div className="col-md-5 pb-3">
                  <label htmlFor="cityInput" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cityInput"
                    value={userData.city}
                    onChange={_handleChange}
                  />
                </div>
                <div className="col-md-4 pb-3">
                  <label htmlFor="stateInput" className="form-label">
                    State
                  </label>
                  <select
                    id="stateInput"
                    className="form-select"
                    value={userData.states}
                  >
                    <option defaultValue>Choose...</option>
                    {states.map((estado, i) => {
                      return (
                        <option
                          value={estado}
                          key={i}
                          style={styles.optionsColor}
                        >
                          {estado}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-3 pb-3">
                  <label htmlFor="zipInput" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipInput"
                    value={userData.email}
                    onChange={_handleChange}
                  />
                </div>
              </div>
              <label htmlFor="signupEmail" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                value={login.email}
                onChange={_handleChange}
              ></input>
              <label htmlFor="signupPassword" className="form-label pt-3">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder=""
                value={login.password}
                onChange={_handleChange}
              ></input>
              <button
                type="button"
                className="btn btn-dark mt-3"
                style={styles.buttonColor}
              >
                Next
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </Container>
    </div>
  );
}
