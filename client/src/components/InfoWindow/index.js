import React, { useState } from "react";
import Legislators from "../LegislatorView";
import Dossier from "../Dossier";

function InfoWindow({ reps, senators, legs }) {
    const [doss, getDossier] = useState(false);
    
    const loadDossier = (event) => {
      // event.preventDefault();
      console.log(event.target);
      getDossier((doss) => !doss);
      console.log(doss);
    };
    return (
        <>
   {legs === true ? (
              <Legislators reps={reps} senators={senators} />
            ) : (
              ""
            )}
            {doss === true ? (
              <Dossier
                reps={reps}
                senators={senators}
                onClick={loadDossier}
                doss={doss}
                />
            ) : (
              ""
            )}
        </>
    )
}

export default InfoWindow;