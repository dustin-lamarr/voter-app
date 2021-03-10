import React, { useEffect } from "react";
import { useAuth } from "../utils/context"
import { useHistory } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

export function Home() {
const jumbotron = {
    jumboBG: {
        background: "white"
    },
    jumboP: {
        color: "#6B000B"
    }
}
const { auth, setAuth } = useAuth();
const history = useHistory();

useEffect(() => {
  if (auth) {
    history.push("/dashboard");
  }
}, []);
    return (
        <>
        <Navbar home={"home"}/>
        <Container>
            <div className="container h-50 pb-3 rounded" style={jumbotron.jumboBG} >
                <div className="row align-items-center">
                <div className="col"> 
                
                <img src="/images/voter-sq.png" alt="voter"></img>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col" style={jumbotron.jumboP}>
                        <h3>Make your representatives work for you. </h3>
                       <h3 className="text-muted"> Welcome to Voter</h3>
                 
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </Container>
        </>
    )
}
