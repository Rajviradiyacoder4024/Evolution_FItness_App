import React from "react";

function CreateDietPlan (){
    return(
        
<div class="bg-gray-100">

    <div class="px-10 sm:px-20 md:px-40 lg:px-80 py-10">
      <div class="bg-white rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]">
      <p class="px-8 py-5 font-bold text-2xl mb-8">CREATE NEW PLAN</p>
      <div class="px-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-4">
            <div class="flex-auto">
                <label class="block mb-2 font-semibold" for="lname">Plan Name
              </label>
                <input
                  type="text"
                  id="lname"
                  placeholder=""
                  class="border rounded p-2 sm:w-[200px] md:w-[400px] lg:w-[800px]"
                />
              </div>
              <div class="flex-auto">
                <label class="block mb-2 font-semibold" for="lname">No Of Days</label>
                <input
                  type="text"
                  id="lname"
                  placeholder=""
                  class="border rounded p-2 sm:w-[200px] md:w-[400px] lg:w-[800px]"
                />
              </div>

              <div class="flex-auto">

                <button style={{width: "120px"}}
                class="px-3 py-3 float-right mt-4 mb-8 bg-o border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                <p class="text-md text-white font-bold ">CLOSE</p>
                </button>
                <button style={{width: "120px"}}
                class="px-3 py-3 float-right mt-4 mb-8 mr-4 bg-pu border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                <p class="text-md text-white font-bold ">CREATE</p>
                </button>

                </div>

          </div> 
      </div>
      </div>

</div>
    
    );
}

export default CreateDietPlan;