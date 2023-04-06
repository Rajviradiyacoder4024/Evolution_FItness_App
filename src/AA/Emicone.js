import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';



function Emicone(){

    return( 
        <div class="px-20 py-12">
        <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-x-2 gap-y-10">
            <div>
            <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
      <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 20 }} />
    </button>
                  <p class="mt-2 text-sm text-t font-bold">Add Employee</p>
            </div>
            <div>
            <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
      <FontAwesomeIcon icon={faUser} style={{ fontSize: 20 }} />
    </button>
                  <p class="mt-2 text-sm text-t font-bold">Personal Training</p>
            </div>
            <div>
            <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
      <FontAwesomeIcon icon={faCalendar} style={{ fontSize: 20 }} />
    </button>
                  <p class="mt-2 text-sm text-t font-bold">Attendance</p>
            </div>
            <div>
            <button className="bg-g text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
      <FontAwesomeIcon icon={faEye} style={{ fontSize: 20 }} />
    </button>
                  <p class="mt-2 text-sm text-t font-bold">Show Salary</p>
            </div>
            <div>
            <button className="bg-r text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
      <FontAwesomeIcon icon={faFile} style={{ fontSize: 20 }} />
    </button>
                  <p class="mt-2 text-sm text-t font-bold">Salary Slip</p>
            </div>
    </div>
    </div>
        );

    }
    export default Emicone;