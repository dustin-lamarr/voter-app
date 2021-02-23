import React from "react";
import Container from "../components/Container";

function Signup() {
  const styles = {
    textColor: {
      color: "white",
    },
    buttonColor: {
      backgroundColor: "#6B000B",
    },
  };
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
            <form>
              <div className="row pb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="col-12 pb-3">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12 pb-3">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="row">
              <div className="col-md-5 pb-3">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4 pb-3">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-3 pb-3">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              </div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
              ></input>
              <label
                htmlFor="exampleFormControlInput1"
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
            </form>
          </div>

          <div className="col-4"></div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
