import React from "react";
import Container from "../components/Container";

export function Home() {
const jumbotron = {
    jumboBG: {
        background: "white"
    }
}
    return (
        <Container>
            <div className="container h-50 pb-5 rounded" style={jumbotron.jumboBG} >
                <img src="/images/voter-sq.png" alt="voter"></img>
                
            </div>
        </Container>
    )
}
