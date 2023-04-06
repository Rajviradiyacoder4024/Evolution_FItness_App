import { faCalendar, faClock, faPen, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function EmployeeCard() {
  return (
<div className="flex flex-col group w-80">
    <div className="flex py-4 top_card">

      <div className="px-4 user">
        <img src="usr.png" className="border-4 rounded-lg" style={{width: "70px", height: "70px"}}  alt="user-icon" />
        <div className="flex items-center justify-center w-full pt-4">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" />
              <div className="block h-8 bg-red-600 rounded-full w-14"></div>
              <div className="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1"></div>
            </div>
            <div className="ml-3 font-medium text-gray-700"></div>
          </label>
        </div>
      </div>

      <div className="px-4 user_info">
        <h2>User name</h2>
        <p>Employee ID</p>
        <p>employee@company.com</p>
        <p>1234567890</p>
        <p>Designation</p>
        <p><b>08:00 AM - 12:00 PM</b></p>
      </div>
    </div>

    <div className="px-4 py-4 middle_card">
      <label> <FontAwesomeIcon className="pr-2 fas" icon={faWallet}/> Salary </label>
      <p>₹ ****** / Month</p>
      <label> <FontAwesomeIcon className="pr-2 fas" icon={faClock}/> Next Appointment </label>
      <p>No Appointment Scheduled</p>
      <label> <FontAwesomeIcon className="pr-2 fas" icon={faCalendar}/> Next className </label>
      <p>
        No className Scheduled
        <b className="float-right"><FontAwesomeIcon className="pr-2 fas" icon={faUser}/>0</b>
      </p>
    </div>
    <div
      className="flex justify-between align-baseline group-hover:bg-[#292562] py-4 px-4 border-t border-gray-300 transition">
      <button className="group-hover:text-white text-[#292562] cursor-pointer text-center capitalize">
        view details
      </button>
      <button
        className="group-hover:bg-white group-hover:text-[#292562] rounded-lg h-8 w-8 text-white bg-[#292562] float-right text-xs">
        <FontAwesomeIcon icon={faPen}/>
      </button>
    </div>
</div>
    
  )
}

export default EmployeeCard
