import React from "react";
import Graph from "./Graph";
import WaterSchedule from "./WaterSchedule";

function DropDown() {
  return (
    <>
  
    <div class="bg-gray-100">
      <div class="px-3 py-3 text-md bg-white mt-6 sm:mx-6 lg:mx-4 inline-block sm:px-6 lg:px-4 lg:w-3/4 sm:w-1/2 h-[12rem]">
        <p class="font-bold text-xl">WATER INTAKE SCHEDULE</p>
        <div class="entry mt-6">
          <label>
            <select class="border rounded-md bg-white p-2">
              <option value="Select User">Select User</option>
              <option value="Aashish_lakhani">Aashish_lakhani</option>
              <option value="Abhay_bhingradia">Abhay_bhingradia</option>
              <option value="Abhinav_agarwal">Abhinav_agarwal</option>
              <option value="Abhinay_sharma">Abhinay_sharma</option>
              <option value="Abhishek_agarwal">Abhishek_agarwal</option>
            </select>
          </label>
        </div>
      </div>
    </div>
   
    </>
  );
}

export default DropDown;
