import React, { useState } from "react";

const Boton = (props) =>{
    return(
        <div>
            <button>
                <p>{props.tanto}</p>
            </button>
        </div>
    )
}

export default Boton;