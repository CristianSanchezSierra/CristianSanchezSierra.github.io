import React, { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "./modal"
import Modal1 from "./modal1"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEarth } from "@fortawesome/free-solid-svg-icons";




const Nav =()=>{

    const [openModal, setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const handleOpen = event => {
        setIsShown(true);
      };
      const handleClose = event => {
        setIsShown(false);
      };
    
    

    return(
        
        <nav className="w-full md:h-[100px] bg-gray-800 flex flex-row-reverse absolute">


            <div className="hidden md:flex text-white text-2xl flex items-center justify-center md:mr-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                <button onClick={()=>{setOpenModal(true)}} className="openModalBtn text-center">CV</button> 
            </div>

            <FontAwesomeIcon className="md:hidden h-24" onClick={handleOpen} icon={faBars} />
            {isShown && (
              <div className="absolute" onClick={handleClose}>
                <Modal1/>
              </div>
            )}
            
            {openModal && <Modal closeModal={setOpenModal}/>}
            




            
               
            <a className="hidden md:flex text-center text-white text-2xl flex items-center justify-center md:mr-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="#cont">Contact and links</a> 
            

            <Link className="hidden md:flex text-white text-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 flex items-center justify-center md:mr-24"
               to={`/Skills`}
               >
                <span className="text-center">Skills</span> 
            </Link>

            <Link className="hidden md:flex text-white text-2xl flex items-center justify-center md:mr-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
               to={`/Knowledge`}
               >
                <span className="text-center">Knowledge</span> 
            </Link>

            <Link className="hidden md:flex text-white text-2xl flex items-center justify-center md:ml-[450px] md:mr-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
               to={`/About`}
               >
                <span className="text-center">About me</span> 
            </Link>

            <Link
            to={`/miweb`}
            >
             <FontAwesomeIcon className="text-gray-900 animate-pulse h-[90px] mt-1 md:ml-5" icon={faEarth} />
            </Link>
            
            <h1 className="flex items-center justify-center text-white text-4xl">Web developer</h1>
        </nav>
        
    )

}

export default Nav