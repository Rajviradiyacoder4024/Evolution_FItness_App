import React from "react";

function CreateProgramPlan () {
    return(
        
<div className="bg-gray-100">
    <div className="px-10 py-10 md:px-40 lg:px-80">
      <div className="bg-white rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]">

      <p className="px-8 py-5 mb-8 text-2xl font-bold">CREATE PROGRAM</p>

      <div className="grid grid-cols-1 px-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-4">

            <div className="flex-auto">
                <label className="block mb-2 font-semibold" for="lname">Select Available Diet Plan</label>
                <select
                className="border rounded p-2 bg-transparent  lg:w-[800px]"
                id="ref"
              >
              <option value="1">Select Diet Plan</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="2">Option 3</option>
               
                
              </select>
              </div>

              <div className="flex-auto">
                <button style={{ width : "120px"}}
                className="px-3 py-3 float-right bg-pu border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                <p className="font-bold text-white text-md ">Click Here</p>
              </button>
              <p className="inline float-right mt-3 mr-4 text-lg">Need to create new diet plan ? </p>
              </div>
              
              <div className="flex-auto">
                <label className="block mb-2 font-semibold" for="lname">Select Available Exercise Plan</label>
                <select
                className="border rounded p-2 bg-transparent  lg:w-[800px]"
                id="ref"
              >
              <option value="1">Select Exercise Plan</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="2">Option 3</option>
               
                
              </select>
              </div>
              <div className="flex-auto">
                <button style={{ width : "120px"}}
                className="px-3 py-3 float-right bg-pu border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                <p className="font-bold text-white text-md ">Click Here</p>
              </button>
              <p className="inline float-right mt-3 mr-4 text-lg">Need to create new Exercise plan ? </p>
              </div>
            
            <div className="flex-auto">
                <label className="block mb-2 font-semibold" for="lname">Program Name
              </label>
                <input
                  type="text"
                  id="lname"
                  placeholder=""
                  className="border rounded p-2 sm:w-[200px] md:w-[400px] lg:w-[800px]"
                />
              </div>

              <div className="flex-auto">
                <label className="block mb-2 font-semibold" for="lname">Select Number Of Days</label>
                <input
                  type="text"
                  id="lname"
                  placeholder=""
                  className="border rounded p-2 sm:w-[200px] md:w-[400px] lg:w-[800px]"
                />
                <p className="text-red-500 text-md">( Note : Program will end based on number of days you selected )</p>
              </div>

              <div className="flex-auto">
                <button style={{ width : "120px"}}
                        className="px-3 py-3 float-right mt-4 mb-8 bg-o border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                <p className="font-bold text-white text-md ">CLOSE</p>
                </button>
                <button style={{ width : "120px"}}
                        className="px-3 py-3 float-right mt-4 mb-8 mr-4 bg-o border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                <p className="font-bold text-white text-md ">ADD</p>
                </button>
              </div>

    </div>
         

</div>
</div>
</div>
    );
}

export default CreateProgramPlan;