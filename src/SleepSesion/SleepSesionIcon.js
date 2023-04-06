import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SleepSesionIcon(){
    return(

        <div className="">
            <div  className="px-[1000px] py-4">
            <button className="px-6 w-40 py-2 bg-o border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
            
            <p className="text-sm font-bold text-white space-x-3inline">
                <FontAwesomeIcon className="mr-1 " icon={faPlus}/>ADD SESSION
            </p>
            </button>
            </div>
        </div>
       
  
   

    );
}

export default SleepSesionIcon;