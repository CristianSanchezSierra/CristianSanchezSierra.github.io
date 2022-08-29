import React from "react";
import img from '../imgs/bo2.jpg'

function Modal1({closeModal1}){
    return(
        <div className="bg-stone-900/50 h-screen w-full flex justify-center items-center absolute">
            <div className="">
                <button onClick={() => closeModal1(false)} className="text-white text-xl"> X </button>
                <img className="drop-shadow-xl rounded-[20px] h-[800px]" src={img}/>
            </div>
        </div>
    )

}

export default Modal1;