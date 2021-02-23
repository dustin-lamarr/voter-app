import React from "react";
import Container from "../components/Container";

function Login() {
    const styles = {
        textColor: 
        {
            color: "white"
        },
        buttonColor: 
        {
backgroundColor: "#6B000B"
        }
    }
  return (
    <Container>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 border rounded py-3 mb-5" style={styles.textColor}>
            <h3>Login to your Voter Dashboard</h3>
            <hr></hr>
        <label for="exampleFormControlInput1" className="form-label">Email Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
  placeholder="name@example.com"></input>
  <label for="exampleFormControlInput1" className="form-label pt-3">Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" 
  placeholder=""></input>
<button type="button" className="btn btn-dark mt-3" style={styles.buttonColor}>Login</button>
<p className="pt-3 fs-5">Don't have an account? Create one now, to make sure your representatives work for YOU.</p>
        </div>
        
        <div className="col-4"></div>
      </div>
    </Container>
  );
}

export default Login;
