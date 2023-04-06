import { faCalendarDay, faCalendarTimes, faEye, faInfoCircle, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



function Clienticone(){

    return( 
        <div class="px-20 py-12">
        <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-x-2 gap-y-10">
            <div>
            <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: '20px' }}/>
</button>

                  <p class="mt-2 text-sm text-t font-bold">Add Client</p>
            </div>
            <div>
            <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '20px' }}/>
</button>

                  <p class="mt-2 text-sm text-t font-bold">Add Inquiry</p>
            </div>
            <div>
            <button className="bg-g text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faCalendarDay} style={{ fontSize: '20px' }}/>
</button>

                  <p class="mt-2 text-sm text-t font-bold">Book Appointment</p>
            </div>
            <div>
            <button className="bg-r text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faCalendarTimes} style={{ fontSize: '20px' }}/>
</button>

                  <p class="mt-2 text-sm text-t font-bold">Attendance</p>
            </div>
            <div>
            <button className="bg-g text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faEye} style={{ fontSize: '20px' }}/>
</button>

                  <p class="mt-2 text-sm text-t font-bold">Show Phone</p>
            </div>
    </div>
    </div>
        );
}
export default Clienticone;