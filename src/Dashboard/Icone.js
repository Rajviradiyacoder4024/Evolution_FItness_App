import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


function  Icone()

{
    return( <div class="px-20 py-12">
        <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-x-2 gap-y-10">
            
            <div>
            <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Add Inquiry</p>
            </div>
            <div>
            <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faUser} size="lg" />

</button>

                  <p class="mt-2 text-sm text-t font-bold">User List</p>
            </div>
            <div>
            <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Add user</p>
            </div>
            <div>
            <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faList} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Employee List</p>
            </div>
            <div>
            <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faUsers} style={{ fontSize: '20px' }} /></button>

                  <p class="mt-2 text-sm text-t font-bold">Add Employee</p>
            </div>
            <div>
            <button className="bg-g text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faFlag} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Reports</p>
            </div>
            <div>
            <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faPlus} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Creat a plan</p>
            </div>
            <div>
            <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faSun} style={{ fontSize: '20px' }} />

</button>

                  <p class="mt-2 text-sm text-t font-bold">Diet session</p>
            </div>
            <div>
            <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faMoon} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">sleep session</p>
            </div>
            <div>
            <button className="bg-g text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faUtensils} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Diet plan</p>
            </div>
            <div>
            <button className="bg-r text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faBicycle} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Exercise scheduale</p>
            </div>
            <div>
            <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faCalendarDay} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Appointments</p>
            </div>
            <div>
            <button className="bg-y text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faFile} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Assessment form</p>
            </div>
            <div>
            <button className="bg-o text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faDumbbell} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Classes</p>
            </div>
            <div>
            <button className="bg-a1 text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faComment} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Bots</p>
            </div>
            <div>
            <button className="bg-a2 text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faCog} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Settings</p>
            </div>
            <div>
            <button className="bg-a3 text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faPlus} style={{ fontSize: '20px' }} />
</button>

                  <p class="mt-2 text-sm text-t font-bold">Add shortcuts</p>
            </div>
    </div>
    </div>
        
        
        );
    }
    
    export default Icone;