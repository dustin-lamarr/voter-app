import React, { useEffect } from "react";
import { useAuth } from "../utils/context"
import { useHistory } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

export function MadeWith() {
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
        <Navbar madeWith={"madeWith"}/>
        <Container>
        <div className="container h-50 pb-3 rounded" style={jumbotron.jumboBG} >
                <div className="row align-items-center">
                <div className="col"> 
                
                <img src="/images/voter-sq.png" alt="voter"></img>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col" style={jumbotron.jumboP}>
                        
                       <h3 style={jumbotron.jumboP}> Voter is made with:</h3>
                       <ul>
                    <li>JavaScript</li>
                    <li> Bootstrap 5</li>
                    <li>  React</li>
                    <li>  Express</li>
                    <li>  Node</li>
                    <li>  MongoDb</li>
                    <li>  Passport</li>
                    <li>  Axios</li>
                </ul>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </Container>
        </>
    )
}
