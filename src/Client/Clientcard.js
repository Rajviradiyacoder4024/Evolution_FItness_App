import React from "react";



function Clientcard (){

    return( 
        <div className="card lg:w-1/3 md:w-1/2">
  <div className="p-4 top">
    <button type="button" className="p-2 text-white capitalize bg-purple-600 rounded-lg">
      no current membership
    </button>
  </div>
  <div className="slid">
    <div className="relative bg-white carousel">
      <div className="relative w-full overflow-hidden carousel-inner">
        
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" hidden="" checked="checked" />
        <div className="carousel-item absolute opacity-0 h-[440px] md:h-[330px]">
          <div className="block w-full h-full">
            <div className="flex flex-col pb-4 card_top md:flex-row">
              
              <div className="px-4 usr_name">
                <p className="text-2xl">User Name</p>
                <p>CBM0000000</p>
                <p>usr@email.com</p>
                <p>********69</p>
                <p>No Current</p>
                <p>MembershipNo Personal Trainer</p>
                <p className="font-semibold">classNamees :</p>
                <div>
  <span classNameName="border rounded bg-gray-300 inline-block m-[0.1rem] w-6 h-6 text-center">M</span>
  <span classNameName="border rounded bg-gray-300 inline-block m-[0.1rem] w-6 h-6 text-center">T</span>
  <span classNameName="border rounded bg-gray-300 inline-block m-[0.1rem] w-6 h-6 text-center">W</span>
  <span classNameName="border rounded bg-gray-300 inline-block m-[0.1rem] w-6 h-6 text-center">T</span>
  <span classNameName="border rounded bg-gray-300 inline-block m-[0.1rem] w-6 h-6 text-center">F</span>
  <span classNameName="border rounded bg-gray-300 inline-block m-[0.1rem] w-6 h-6 text-center">S</span>
  <span classNameName="border rounded bg-gray-300 inline-block m-[0.1rem] w-6 h-6 text-center">S</span>
</div>

              </div>
            </div>
          </div>
        </div>
        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" hidden="" />
        <div className="carousel-item absolute opacity-0 h-[440px] md:h-[330px]">
          <div className="block w-full h-full px-4">
            <div className="second">
              <span className="mr-2 fas fa-user"></span>Assigned Expert
              <div className="content-[''] bg-pink-500 rounded-full w-8 h-8 my-2"></div>
              <span className="mr-2 fas fa-credit-card"></span>Payment
              <button type="button" className="float-right px-2 text-white bg-red-500 rounded">
                Pay Now
              </button>
              <div className="px-2 py-1 my-2 bg-gray-300 border rounded">
                Due : ₹5999 <b>Paid : ₹ 33000 / ₹ 38999</b>
              </div>
              <span className="mr-2 fas fa-clock"></span>Next Appointment
              <div>No Appointment Scheduled</div>
            </div>
          </div>
        </div>

        
        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" hidden="" />
        <div className="carousel-item absolute opacity-0 h-[440px] md:h-[330px]">
          <div className="block w-full h-full px-4">
            <div className="third">
              <span className="mr-2 fas fa-bars"></span>Assessments
              <div className="flex flex-wrap">
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
                <span className="p-2 m-1 font-semibold capitalize bg-gray-300 border rounded">health assessment</span>
              </div>
            </div>
          </div>
        </div>

        
        <ol className="absolute left-0 right-0 text-center carousel-indicators bottom-1">
          <li className="inline-block mr-3">
            <label for="carousel-1"
              className="block text-4xl text-gray-200 cursor-pointer carousel-bullet hover:text-blue-700">•</label>
          </li>
          <li className="inline-block mr-3">
            <label for="carousel-2"
              className="block text-4xl text-gray-200 cursor-pointer carousel-bullet hover:text-blue-700">•</label>
          </li>
          <li className="inline-block mr-3">
            <label for="carousel-3"
              className="block text-4xl text-gray-200 cursor-pointer carousel-bullet hover:text-blue-700">•</label>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div className="flex justify-between px-4 py-4 align-baseline transition border-t border-gray-300 footer">
    <button className="btn-1 text-[#292562] cursor-pointer text-center capitalize">
      view details
    </button>
    <div>
      <button className="btn-2 mx-1 rounded-lg h-8 w-8 text-white bg-[#292562] float-right text-xs">
        <i className="fa-solid fa-circle"></i>
      </button>
      <button className="btn-2 mx-1 rounded-lg h-8 w-8 text-white bg-[#292562] float-right text-xs">
        <i className="fa-solid fa-child"></i>
      </button>
      <button className="btn-2 mx-1 rounded-lg h-8 w-8 text-white bg-[#292562] float-right text-xs">
        <i className="fa-solid fa-user-group"></i>
      </button>
      <button className="btn-2 mx-1 rounded-lg h-8 w-8 text-white bg-[#292562] float-right text-xs">
        <i className="fa-solid fa-book"></i>
      </button>
    </div>
  </div>
</div>


    );
}
export default Clientcard;