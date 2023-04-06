import { faCartPlus, faCheck, faEye, faLaptopCode, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FormAddShortcuts () {
    return(
        
<div className="bg-gray-100">
    <div className="px-20 py-20">
      <div className="bg-white rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]">

      <p className="px-8 py-5 mb-8 text-2xl font-bold">SHORTCUTS</p>
        <div className="grid grid-cols-1 px-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4">


            <div>
                <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                    <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Add Inquiry</p>
            </div>
            <div>
                <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">User List</p>
            </div>
            <div>
                <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Add User</p>
            </div>
            <div>
                <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Employee List</p>
            </div>
            <div>
                <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Add Employee</p>
            </div>
            <div>
                <button className="bg-g text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Reports</p>
            </div>
            <div>
                <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Create A Plan</p>
            </div>
            <div>
                <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Diet Session</p>
            </div>
            <div>
                <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Sleep Session</p>
            </div>
            <div>
                <button className="bg-g text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Diet Plan</p>
            </div>
            <div>
                <button className="bg-r text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Exercise Schedule</p>
            </div>
            <div>
                <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Appointments</p>
            </div>
            <div>
                <button className="bg-y text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Assessment Form</p>
            </div>
            <div>
                <button className="bg-o text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">classNamees</p>
            </div>
            <div>
                <button className="bg-b text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Device Sync</p>
            </div>

            <div>
                <button className="bg-a1 text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Bots</p>
            </div>

            <div>
                <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
                <FontAwesomeIcon icon={faCartPlus} style={{ fontSize : "25px"}}/>
                  </button>
                  <p className="mt-2 text-sm font-bold text-t">Inventory</p>
            </div>
            <div>
              <button className="bg-p text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                </button>
                <p className="mt-2 text-sm font-bold text-t">Add Inventory</p>
          </div>
          <div>
              <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <FontAwesomeIcon icon={faEye} style={{ fontSize : "25px"}}/>
                </button>
                <p className="mt-2 text-sm font-bold text-t">Supplier</p>
          </div>
          <div>
              <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <FontAwesomeIcon icon={faEye} style={{ fontSize : "25px"}}/>
                </button>
                <p className="mt-2 text-sm font-bold text-t">Add Supplier</p>
          </div>
          <div>
              <button className="bg-a3 text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <FontAwesomeIcon icon={faTag} style={{ fontSize : "25px"}}/>
                </button>
                <p className="mt-2 text-sm font-bold text-t">Purchase</p>
          </div>
          <div>
              <button className="bg-a3 text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <FontAwesomeIcon icon={faTag} style={{ fontSize : "25px"}}/>
                </button>
                <p className="mt-2 text-sm font-bold text-t">Add Purchase</p>
          </div>
          <div>
              <button className="bg-gr text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize : "25px"}}/>
                </button>
                <p className="mt-2 text-sm font-bold text-t">Settings</p>
          </div>

          <button style={{ width : "90px"}}
          className="px-3 py-3 float-right mt-40 mb-8 bg-pu border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
          <p className="font-bold text-white text-md ">SAVE</p>
        </button>
          </div>
         
</div>
</div>
</div>
    );
}

export default FormAddShortcuts;