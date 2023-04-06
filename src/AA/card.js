import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faWallet,faClock,faCalendar,faUser,faPen  } from '@fortawesome/free-solid-svg-icons'



function card(){

    return(     
    <div class="group flex flex-col w-80">
    <div class="top_card flex py-4">
      
      <div class="user_info px-4">
        <h2>User name</h2>
        <p>Employee ID</p>
        <p>employee@company.com</p>
        <p>1234567890</p>
        <p>Designation</p>
        <p><b>08:00 AM - 12:00 PM</b></p>
      </div>
    </div>
    <div class="middle_card px-4 py-4">
      <label> 
<FontAwesomeIcon icon={faWallet} className="pr-2 fa-wallet" /> Salary </label>
      <p>₹ ****** / Month</p>
      <label> 
<FontAwesomeIcon icon={faClock} className="pr-2 fa-clock" /> Next Appointment </label>
      <p>No Appointment Scheduled</p>
      <label> 
<FontAwesomeIcon icon={faCalendar} className="pr-2 fa-calendar" /> Next Class </label>
      <p>
        No Class Scheduled
        <b class="float-right">
<FontAwesomeIcon icon={faUser} className="pr-2 fas fa-user" />0</b>
      </p>
    </div>
    <div
      class="flex justify-between align-baseline group-hover:bg-[#292562] py-4 px-4 border-t border-gray-300 transition">
      <button className="group-hover:text-white text-[#292562] cursor-pointer text-center capitalize">
      view details
    </button>
      <button
        class="group-hover:bg-white group-hover:text-[#292562] rounded-lg h-8 w-8 text-white bg-[#292562] float-right text-xs">
        
<FontAwesomeIcon icon={faPen} className="fas fa-pen" ></FontAwesomeIcon>
      </button>
    </div>
  </div>

    );
}
export default card;