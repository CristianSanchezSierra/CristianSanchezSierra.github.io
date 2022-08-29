import React, { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "./modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";



const Nav =()=>{

    const [openModal, setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);
    
    return(
        <nav className="w-full h-[100px] bg-gray-800 flex flex-row-reverse absolute fixed">


            <div className="text-white text-2xl flex items-center justify-center mr-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                <button onClick={()=>{setOpenModal(true)}} className="openModalBtn text-center">CV</button> 
            </div>
            
            {openModal && <Modal closeModal={setOpenModal}/>}




            
               
            <a className="text-center text-white text-2xl flex items-center justify-center mr-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="#cont">Contact and links</a> 
            

            <Link className="text-white text-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 flex items-center justify-center mr-24"
               to={`/Skills`}
               >
                <span className="text-center">Skills</span> 
            </Link>

            <Link className="text-white text-2xl flex items-center justify-center mr-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
               to={`/Knowledge`}
               >
                <span className="text-center">Knowledge</span> 
            </Link>

            <Link className="text-white text-2xl flex items-center justify-center ml-[450px] mr-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
               to={`/About`}
               >
                <span className="text-center">About me</span> 
            </Link>

            <Link
            to={`/`}
            >
             <FontAwesomeIcon className="text-gray-900 animate-pulse h-[90px] mt-1 ml-5" icon={faEarth} />
            </Link>
            
            <h1 className="flex items-center justify-center text-white text-4xl">Web developer</h1>
        </nav>
        
    )

}

export default Nav