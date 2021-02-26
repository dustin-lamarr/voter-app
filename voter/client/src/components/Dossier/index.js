import React, {useEffect, useState} from "react";
import axios from "axios";
import SenatorPane from "./SenatePane";
import RepPane from "./RepPane";

function Dossier( {senators, reps, clicked, doss}) {
 
  
    if (senators) {
        return(
            <SenatorPane senators={senators}/>
        )
    } else return (
        <RepPane reps={reps}/>
    )
   
}

  export default Dossier;