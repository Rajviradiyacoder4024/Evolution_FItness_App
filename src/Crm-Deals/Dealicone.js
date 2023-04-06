import React from "react";
function Dealicone(){

    return( 
        <div class="px-20 py-12">
        <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-x-[320px] gap-y-10">
            <div>
            <button className="bg-o text-white font-bold py-3 px-[55px] rounded-lg">
  <p className="text-white font-bold" style={{ whiteSpace: 'nowrap' }}>TOTAL DEALS TODAY : 0</p>
</button>

                 
            </div>
            <div>
            <button className="bg-o text-white font-bold py-3 px-[55px] rounded-lg">
  <p className="text-white font-bold" style={{ whiteSpace: 'nowrap' }}>TOTAL CALLS TODAY : 0</p>
</button>

            </div>
    </div>
    </div>

    );

}
export default Dealicone;