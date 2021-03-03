import React, { useState } from "react";
import Legislators from "../LegislatorView";
import Dossier from "../Dossier";

function InfoWindow({ reps, senators }) {
 
    return (
        <>
   {/* {legs === true ? (
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
            )} */}
        </>
    )
}

export default InfoWindow;