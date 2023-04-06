import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ExpenseIcon() {
    return(

<div className="">
    
    <div className="px-[1000px] py-4">
        <button style={{width: "160px"}} 
                className="px-5 py-2 bg-o border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                <p className="inline text-sm font-bold text-white" >
                <FontAwesomeIcon className="mr-1" icon={faPlus}/>
                ADD EXPENSE</p>
          </button>
    </div>    
            
</div>




    );
}

export default ExpenseIcon;