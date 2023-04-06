import React from "react";
function Eventicone(){

    return(
        <div class="px-[1000px] py-4">
        <button
      style={{ width: "160px" }}
      className="px-6 py-2 bg-o border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
    >
      <p className="inline text-sm text-white font-bold" style={{ whiteSpace: "nowrap" }}>
        <i className="inline fas fa-plus mr-2"></i>CREATE EVENT
      </p>
    </button>
    </div>   
        );
    }
    export default Eventicone;