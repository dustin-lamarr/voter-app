import React from "react";
import Container from "../components/Container"

function Signup(){
    return (
        <div>
<Container>
      <div class="row">
  <div class="col">
  <label for="formGroupExampleInput" class="form-label">Name</label>
    <input type="text" class="form-control" 
    placeholder="First name" aria-label="First name"></input>
  </div>
  <div class="col">
    <input type="text" class="form-control" 
    placeholder="Last name" aria-label="Last name"></input>
  </div>
</div>
</Container>
</div>
    )
}

export default Signup;