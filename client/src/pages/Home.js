import React from "react";
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
                        <h3>Welcome to all the information you need to make your representatives work for you, in one conveninent location. </h3>
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
