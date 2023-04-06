import { faEye, faSearchPlus, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Inventory_Icon () {
    return(
        <div class="px-20 py-12">
        <div class="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-x-2 gap-y-10">
            <div>
                <button class="bg-t text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                    <FontAwesomeIcon icon={faTag} style={{fontSize : "20px"}} />
                  </button>
                  <p class="mt-2 text-sm text-t font-bold">Purchase</p>
            </div>
            <div>
                <button class="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faEye} style={{fontSize : "20px"}}/>
                  </button>
                  <p class="mt-2 text-sm text-t font-bold">Supplier</p>
            </div>
            <div>
                <button class="bg-p  text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faSearchPlus} style={{fontSize : "20px"}}/>
                  </button>
                  <p class="mt-2 text-left text-sm text-t font-bold">New Inventory</p>
            </div>
    </div>
    </div>
    
    );
}

export default Inventory_Icon;
