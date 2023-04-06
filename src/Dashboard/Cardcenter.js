import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons';




function Cardcenter(){

    return( 
        <div class="px-10 py-10 w-[800px]float-left">
    <div class="main rounded-tl-[20px] rounded-b-[20px] bg-white shadow-lg py-4 relative w-full float-left">
      <div class="heading border-b-2 border-blue-200 w-full float-left">
        <div class="left w-3/4 px-4 float-left">
        <div>
      <button className="uppercase mb-4 font-bold inline mr-5">Revenue History</button>
      <button className="uppercase mb-4 text-gray-400 font-bold inline mr-5">Membership</button>
      <button className="uppercase mb-4 text-gray-400 font-bold inline">Personal Trainer</button>
    </div></div>
        <div class="ml-[300px] float-left text-center">
        <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </div>
      <div class="border-b-2 border-blue-200 pt-8 px-2 float-left relative w-full h-52 sm:h-80 md:h-60 lg:h-60 xl:h-52">
       
      </div>
      <div class="total  pt-4 float-left font-semibold">
        <div class="text-gray-600 left px-4 float-left relative">
            <div>
      <p className="mr-[150px]">
        <FontAwesomeIcon
          icon={faCircle}
          className="mr-2 text-purple-600"
          style={{ fontSize: 11 }}
        />
        Total Membership
      </p>
      <p>
        <FontAwesomeIcon
          icon={faCircle}
          className="mr-2 text-pink-600"
          style={{ fontSize: 11 }}
        />
        Total PT
      </p>
      <p>
        <FontAwesomeIcon
          icon={faCircle}
          className="mr-2 text-cyan-400"
          style={{ fontSize: 11 }}
        />
        Total Products
      </p>
      <p>
        <FontAwesomeIcon
          icon={faCircle}
          className="mr-2 text-red-600"
          style={{ fontSize: 11 }}
        />
        Total Expense
      </p>
    </div>




        </div>
        <div class="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 border-l-2 border-white  ">
        <div class="border-l-2 border-blue-200">
            <div class="text-2xl text-center font-bold">
              ₹ 0

        
            </div>
            <div class="mx-6">
                Total Revenue
            </div>
            <div class="text-gray-400 text-center">
              Today
          </div>

        </div> 



        <div class="border-l-2 border-blue-200 ">
          <div class="text-2xl text-center font-bold">
            ₹ 0

      
          </div>
          <div class="mx-6">
              Total Revenue
          </div>
          <div class="text-gray-400 text-center">
            Today
        </div>

      </div>



      <div class="border-l-2 border-blue-200 ">
        <div class="text-2xl text-center font-bold">
          ₹ 0

    
        </div>
        <div class="mx-6">
            Total Revenue
        </div>
        <div class="text-gray-400 text-center">
          This Month
      </div>

    </div>
      

    <div class="border-l-2 border-blue-200 ">
      <div class="text-2xl text-center font-bold">
        ₹ 0

  
      </div>
      <div class="mx-6">
          Total Revenue
      </div>
      <div class="text-gray-400 text-center">
        This Year
    </div>

  </div>
    

  <div class="border-l-2 border-blue-200 ">
    <div class="text-2xl text-center font-bold">
      ₹ 0


    </div>
    <div class="mx-6 text-center">
        Total Membership Revenue
    </div>
    <div class="text-gray-400 text-center">
      This Year
  </div>

</div>
  

<div class="border-l-2 border-blue-200 ">
  <div class="text-2xl text-center font-bold">
    ₹ 0


  </div>
  <div class="mx-6 text-center">
      Total PT Revenue
  </div>
  <div class="text-gray-400 text-center">
    Today
</div>

</div>



<div class="border-l-2 border-blue-200 ">
<div class="text-2xl text-center font-bold">
  ₹ 0


</div>
<div class="mx-6">
    Total Expense
</div>
<div class="text-gray-400 text-center">
  This Year
</div>

</div>

      


     


      </div>
     </div>
     </div>
     </div>
   


        );
    }
    export default Cardcenter;