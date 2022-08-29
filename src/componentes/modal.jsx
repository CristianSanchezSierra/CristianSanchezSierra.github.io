import React from "react";
import img from "../imgs/PDF.PNG"

function Modal({closeModal}){
    return(
        <div className="bg-stone-900/50 h-screen w-full flex justify-center items-center absolute">
            <div className="">
                <button onClick={() => closeModal(false)} className="text-white text-xl"> X </button>
                <img className="drop-shadow-xl rounded-[20px] h-[90%] w-[90%]" src={img}/>
            </div>
        </div>
    )

}

export default Modal;