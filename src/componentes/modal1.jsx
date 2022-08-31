import React from "react";
import img from '../imgs/bo2.jpg'
import { Link } from "react-router-dom";

function Modal1({setIsShown}){
    return(
        <div className="bg-stone-900/50 h-screen w-full flex justify-center items-center absolute">
            <div className="mr-[150px]">
                <button className="text-white text-xl"> X </button>
                <Link className="md:flex text-white text-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 flex items-center justify-center md:mr-24"
               to={`/Skills`}
               >
                <span className="text-center">Skills</span> 
            </Link>
            </div>
        </div>
    )

}

export default Modal1;