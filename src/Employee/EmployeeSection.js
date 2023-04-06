import { faCalendar, faCalendarCheck, faUser, faUserCheck, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function EmployeeSection() {
  return (
    <div className="px-20 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-x-[280px] gap-y-10">
        <div>
            <button className="bg-p text-white py-6 px-[70px] rounded-[15px]">
            <FontAwesomeIcon className='inline mr-3 ' icon={faUser} style={{fontSize : "30px"}} />
              <p className="inline" style={{fontSize : "30px"}}>40</p>
              <p className="text-white text-md" style={{whiteSpace:"nowrap"}}>Total Employee</p>
              </button>
        </div>
        <div>
            <button className="bg-a5 text-white py-6 px-[70px] rounded-[15px]">
            <FontAwesomeIcon className='inline mr-3 ' icon={faUserCheck} style={{fontSize : "30px"}} />
              <p className="inline" style={{fontSize : "30px"}}>37</p>
              <p className="text-white text-md" style={{whiteSpace:"nowrap"}}>Active Employee</p>
              </button>
        </div>
        <div>
            <button className="bg-gr text-white py-6 px-[70px] rounded-[15px]">
            <FontAwesomeIcon className='inline mr-3 ' icon={faUserMinus} style={{fontSize : "30px"}} />
              <p className="inline" style={{fontSize : "30px"}}>3</p>
              <p className="text-white text-md" style={{whiteSpace:"nowrap"}}>Inactive Employee</p>
              </button>
        </div>
        <div>
            <button className="bg-a4 text-white py-6 px-[70px] rounded-[15px]">
            <FontAwesomeIcon className='inline mr-3 ' icon={faCalendar} style={{fontSize : "30px"}} />
              <p className="inline" style={{fontSize : "30px"}}>2</p>
              <p className="text-white text-md" style={{whiteSpace:"nowrap"}}>This Month C  lasses</p>
              </button>
        </div>
        <div>
            <button className="bg-o text-white py-6 px-[40px] rounded-[15px]">
            <FontAwesomeIcon className='inline mr-3 ' icon={faCalendarCheck} style={{fontSize : "30px"}} />
              <p className="inline" style={{fontSize : "30px"}}>1</p>
              <p className="text-white text-md" style={{whiteSpace:"nowrap"}}>This Month Appointments</p>
              </button>
        </div>
</div>
</div>
  )
}

export default EmployeeSection
