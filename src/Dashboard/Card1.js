import React from "react";


function Card1(){

    return( 
    <div class="card w-full sm:w-full md:w-1/2 lg:w-1/3 float-left">
    <div class="main rounded-tl-[20px] rounded-b-[20px] bg-white shadow-gray-300 py-4 relative w-full float-left">
      <div class="heading border-b-2 border-blue-200 w-full float-left">
        <div class="left w-3/4 px-4 float-left">
          <h3 class="uppercase mb-4 font-bold">inquiry</h3>
        </div>
        </div>
      <div class="chart pt-8 px-2 float-left relative w-full h-52 sm:h-80 md:h-60 lg:h-60 xl:h-52">
        <div class="data text-gray-300 text-center capitalize absolute top-1/3 w-full font-bold">no data available</div>
      </div>
      <div class="total border-t-2 border-blue-200 pt-4 float-left w-full font-semibold">
        <div class="left w-1/2 px-4 float-left relative">
          <p class="capitalize">
            total - 
            <span class="total-span">0</span>
          </p>
        </div>
        <div class="right w-1/2 px-4 float-left relative">
          <a href="" class="capitalize float-right">view all</a>
        </div>

      </div>
    </div>
  </div>
        );
    }
    export default Card1;