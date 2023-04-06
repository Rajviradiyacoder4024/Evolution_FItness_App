import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand,faComment,faEnvelope,faCreditCard } from '@fortawesome/free-solid-svg-icons';


function Upcomming(){

    return(
      <div class="px-10 py-4 flex">
    <div
      class="shadow-lg px-4 py-4 text-md bg-white grid gap-x-6 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[1500px]">
      <button class="px-3 py-2 border border-gray-300 text-left focus:bg-bgp focus:text-white hover:cursor-pointer"
        onclick="table1()">
        Upcoming Appointment
        <div class="float-right text-2xl inline font-semibold">0</div>
      </button>
      <button class="px-3 py-2 border border-gray-300 text-left focus:bg-bgp focus:text-white hover:cursor-pointer"
        onclick="table2()">
        Upcoming Followup
        <div class="float-right text-2xl inline font-semibold">0</div>
      </button>
      <button onclick="table3()"
        class="px-3 py-2 border border-gray-300 text-left focus:bg-bgp focus:text-white hover:cursor-pointer">
        Upcoming Birthday
        <div class="float-right text-2xl inline font-semibold">1</div>
      </button>
      <button onclick="table4()"
        class="px-3 py-2 border border-gray-300 text-left focus:bg-bgp focus:text-white hover:cursor-pointer">
        Recent Collections
        <div class="float-right text-2xl inline font-semibold">0</div>
      </button>
      <button onclick="table5()"
        class="px-3 py-2 border border-gray-300 text-left focus:bg-bgp focus:text-white hover:cursor-pointer">
        Recently Expired Membership
        <div class="float-right text-2xl inline font-semibold">0</div>
      </button>
      <button onclick="table6()"
        class="px-3 py-2 border border-gray-300 text-left focus:bg-bgp focus:text-white hover:cursor-pointer">
        Upcoming Paymnets Due
        <div class="float-right text-2xl inline font-semibold">3</div>
      </button>
      <button onclick="table7()"
        class="px-3 py-2 border border-gray-300 text-left focus:bg-bgp focus:text-white hover:cursor-pointer">
        Upcoming Membership Expires&nbsp;&nbsp;
        <div class="float-right text-2xl inline font-semibold">0</div>
      </button>
      <button onclick="table8()"
        class="px-3 py-2 border border-gray-300 text-left focus:bg-bgp focus:text-white hover:cursor-pointer">
        Today Classes
        <div class="float-right text-2xl inline font-semibold">2</div>
      </button>
  
  

  <div class="px-10 py-5" id="table1">
    <div
      class="shadow-lg px-10 py-5 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:mx-1 inline-block min-w-full sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead class="bg-white border-b-2">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Member Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Appointment Type
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Appointment Date & Time
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Appointment with
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Note
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <div className="px-3 py-3 font-semibold text-black">Total-0</div>
      <div className="px-3 py-3 font-semibold text-right text-black mt-[-50px]">
        View All
      </div>
      <div className="mt-10 font-semibold text-center text-slate-400" style={{height: "200px"}}>
        No Appointment Available
      </div>

    </div>
  </div>
  <div class="px-10 py-5 hidden" id="table2">
    <div
      class="shadow-lg px-10 py-5 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:mx-1 inline-block min-w-full sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead class="bg-white border-b-2">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Member Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Mobile Number
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Assigned To
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Call Response
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Deal Stage
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Next Follow Up Date & Time
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <div className="px-3 py-3 font-semibold text-black">Total-0</div>
      <div className="px-3 py-3 font-semibold text-right text-black mt-[-50px]">
        View All
      </div>
      <div className="mt-10 font-semibold text-center text-slate-400" style={{height: "200px"}}>
        No Appointment Available
      </div>
      
      <div class="px-10 py-5 hidden" id="table3">
    <div
      class="shadow-lg px-10 py-5 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:mx-1 inline-block min-w-full sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead class="bg-white border-b-2">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Member Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Mobile Number
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Birth Date
            </th>

            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-100">
            <td class="px-6">Ashutosh Patel</td>
            <td class="px-6">8238077556</td>
            <td class="px-6">13 Mar 1980</td>
            <td class="py-2 px-6">
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faExpand} className="text-md" />
              </button>

              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faComment} className="text-md" />
              </button>

              <button class="bg-pu text-white py-3 px-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faEnvelope} className="text-md" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="px-3 py-3 font-semibold text-black">Total-1</div>
      <div class="px-3 py-3 font-semibold text-right text-black mt-[-50px]">
        View All
      </div>
    </div>
  </div>

    </div>
  </div>
  <div class="px-10 py-5 hidden" id="table4">
    <div
      class="shadow-lg px-10 py-5 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:mx-1 inline-block min-w-full sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead class="bg-white border-b-2">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Member Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Mobile Number
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Membership Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Collected By
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Payment Mode
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Payment Date
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Paid Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <div className="px-3 py-3 font-semibold text-black">Total-0</div>
      <div className="px-3 py-3 font-semibold text-right text-black mt-[-50px]">
        View All
      </div>
      <div className="mt-10 font-semibold text-center text-slate-400" style={{height: "200px"}}>
        No Appointment Available
      </div>
    </div>
   
    <div class="px-10 py-5 hidden" id="table5">
    <div
      class="shadow-lg px-10 py-5 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:mx-1 inline-block min-w-full sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead class="bg-white border-b-2">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Member Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Mobile Number
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Membership Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Expired Date
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <div class="px-3 py-3 font-semibold text-black">Total-0</div>
      <div className="px-3 py-3 font-semibold text-right text-black mt-[-50px]">
      View All
    </div>
    <div className="mt-10 font-semibold text-center text-slate-400" style={{ height: '200px' }}>
      No Membership Expired Recently
    </div>
    </div>
    <div class="px-10 py-5 hidden" id="table6">
    <div
      class="shadow-lg px-10 py-5 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:mx-1 inline-block min-w-full sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead class="bg-white border-b-2">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Member Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Mobile Number
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Membership Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Due Date
            </th>

            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Due Amount
            </th>

            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-100">
            <td class="px-6">Muskan Agarwal</td>
            <td class="px-6">8238077556</td>
            <td class="px-6">Level-2</td>

            <td class="px-6">10 Aug 2018</td>
            <td class="px-6">15000</td>
            <td class="py-2 px-6">
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faExpand} className="text-md" />
              </button>
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faCreditCard} className="text-md" />

              </button>

              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faComment} className="text-md" />
              </button>

              <button class="bg-pu text-white py-3 px-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faEnvelope} className="text-md" />
              </button>
            </td>
          </tr>

          <tr class="">
            <td class="px-6">Urvi Mistry</td>
            <td class="px-6">9876543210</td>
            <td class="px-6">Life Style Queens</td>

            <td class="px-6">26 Feb 2019</td>
            <td class="px-6">1000</td>
            <td class="py-2 px-6">
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faExpand} className="text-md" />
              </button>
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faCreditCard} className="text-md" />

              </button>

              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faComment} className="text-md" />
              </button>

              <button class="bg-pu text-white py-3 px-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faEnvelope} className="text-md" />
              </button>
            </td>
          </tr>

          <tr class="bg-gray-100">
            <td class="px-6">Aanchal Gupta</td>
            <td class="px-6">-</td>
            <td class="px-6">Level-1</td>

            <td class="px-6">26 Feb 2019</td>
            <td class="px-6">500</td>
            <td class="py-2 px-6">
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faExpand} className="text-md" /> 
              </button>
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faCreditCard} className="text-md" />

              </button>

              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faComment} className="text-md" />
              </button>

              <button class="bg-pu text-white py-3 px-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faEnvelope} className="text-md" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="px-3 py-3 font-semibold text-black">Total-3</div>
      <div class="px-3 py-3 font-semibold text-right text-black mt-[-50px]">
        View All
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="px-10 py-5 hidden" id="table7">
    <div
      class="shadow-lg px-10 py-5 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:mx-1 inline-block min-w-full sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead class="bg-white border-b-2">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Member Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Mobile Number
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Membership Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Expiry Date
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <div class="px-3 py-3 font-semibold text-black">Total-0</div>
      <div className="px-3 py-3 font-semibold text-right text-black mt-[-50px]">
        View All
      </div>
      <div className="mt-10 font-semibold text-center text-slate-400" style={{ height: "200px" }}>
        No Upcoming Membership To Expire
      </div>

    </div>
  </div>
  <div class="px-10 py-5 hidden" id="table8">
    <div
      class="shadow-lg px-10 py-5 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:mx-1 inline-block min-w-full sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead class="bg-white border-b-2">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Class Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Employee Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Start Time
            </th>

            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              End Time
            </th>

            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Participant
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-100">
            <td class="px-6">Group-Ex</td>
            <td class="px-6">Adan Brown</td>
            <td class="px-6">04:00 PM</td>
            <td class="px-6">05:00 PM</td>
            <td class="px-6">0/25</td>
            <td class="py-2 px-6">
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faExpand} className="text-md" />
              </button>
            </td>
          </tr>
          <tr class="">
            <td class="px-6">Swimming</td>
            <td class="px-6">Adan Brown</td>
            <td class="px-6">08:00 AM</td>
            <td class="px-6">09:00 AM</td>
            <td class="px-6">0/20</td>
            <td class="py-2 px-6">
              <button class="bg-pu text-white py-3 px-3 mr-2 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <FontAwesomeIcon icon={faExpand} className="text-md" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="px-3 py-3 font-semibold text-black">Total-2</div>
      <div class="px-3 py-3 font-semibold text-right text-black mt-[-50px]">
        View All
      </div>
    </div>
  </div>

  </div>
  </div>

        );
    }
    export default Upcomming;