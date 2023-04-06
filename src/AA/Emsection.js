import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

function Emsection(){

    return( 
        <div class="px-20 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-x-[280px] gap-y-10">
            <div>
            <button className="bg-p text-white py-6 px-[70px] rounded-[15px]">
      <FontAwesomeIcon icon={faUser} className="inline mr-3" style={{ fontSize: 30 }} />
      <p className="inline" style={{ fontSize: 30 }}>40</p>
      <p className="text-md text-white" style={{ whiteSpace: 'nowrap' }}>Total Employee</p>
    </button>
            </div>
            <div>
            <button className="bg-y text-white py-6 px-[70px] rounded-[15px]">
      <FontAwesomeIcon icon={faUserCheck} className="inline mr-3" style={{ fontSize: 30 }} />
      <p className="inline" style={{ fontSize: 30 }}>37</p>
      <p className="text-md text-white" style={{ whiteSpace: 'nowrap' }}>Active Employee</p>
    </button>
            </div>
            <div>
            <button className="bg-gr text-white py-6 px-[70px] rounded-[15px]">
      <FontAwesomeIcon icon={faUserMinus} className="inline mr-3" style={{ fontSize: 30 }} />
      <p className="inline" style={{ fontSize: 30 }}>3</p>
      <p className="text-md text-white" style={{ whiteSpace: 'nowrap' }}>Inactive Employee</p>
    </button>
            </div>
            <div>
            <button className="bg-a1 text-white py-6 px-[70px] rounded-[15px]">
      <FontAwesomeIcon icon={faCalendar} className="inline mr-3" style={{ fontSize: 30 }} />
      <p className="inline" style={{ fontSize: 30 }}>2</p>
      <p className="text-md text-white" style={{ whiteSpace: 'nowrap' }}>This Month Classes</p>
    </button>
            </div>
            <div>
                
            <button className="bg-o text-white py-6 px-[40px] rounded-[15px]">
      <FontAwesomeIcon icon={faCalendarCheck} className="inline mr-3" style={{ fontSize: 30 }} />
      <p className="inline" style={{ fontSize: 30 }}>1</p>
      <p className="text-md text-white" style={{ whiteSpace: 'nowrap' }}>This Month Appointments</p>
    </button>
            </div>
    </div>
    </div>

        );

    }
    export default Emsection;