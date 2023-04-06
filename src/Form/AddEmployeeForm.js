import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState} from "react";

function AddEmployeeForm () {
    const [currentTable,setCurrentTable] = useState("Table1");


    const [imageSrc, setImageSrc] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      );
    
      function handleTakeImageClick() {
        // Create an input element of type "file"
        const inputElement = document.createElement("input");
        inputElement.type = "file";
    
        // Set up a listener for the "change" event that will handle the selected file
        inputElement.addEventListener("change", () => {
          // Get the selected file
          const file = inputElement.files[0];
    
          // Convert the file to a base64-encoded string
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const base64String = reader.result;
            setImageSrc(base64String);
          };
        });
    
        // Click the input element to open the file selection dialog
        inputElement.click();
    }
    
    return(
<div className="bg-new">

    <div className="bg-white p-4 lg:mr-[180px] lg:ml-[180px] mt-10">
      <button className="flex items-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="1rem"
          fill="currentColor"
        >
          <path
            d="M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z"
          />
        </svg>
        <p className="ml-2 text-lg font-bold uppercase">Back</p>
        </button>
    </div>
    
    <div className="grid lg:grid-cols-2">
      <div className=" border rounded-md bg-white ml-[50px] mt-[25px] mr-[50px]  lg:w-[250px] lg:ml-[180px] h-[100px] ">
        
          <div className="px-4 py-2 text-lg border-b">Form Tab</div>
      
          <button className="w-full px-4 py-2 mt-2 text-left text-gray-500 border focus:text-black active:text-black" 
                onclick={()=>{ setCurrentTable("Table1")}}>
                    <FontAwesomeIcon icon={faUser} className="mr-2"/>
                    EMPLOYMNET DETAILS</button>
          
      </div>



    <div>
    <div className={`bg-white p-4 lg:mr-[180px] lg:ml-[-300px] mt-6 ${currentTable === "Table1" ? "" : "hidden"}`}>
     
        <p className="ml-2 text-lg font-bold uppercase">employment Details</p>
    
    
      <div className="p-4 mt-4 mb-3 border rounded">    
        <div className="flex flex-wrap gap-4">
          <div className="flex-auto">
            <label className="block mb-2" for="fname">First Name *</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              className="p-2 border rounded lg:w-full"
            />
          </div>
          <div className="flex-auto">
            <label className="block mb-2" for="lname">Last Name *</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              className="p-2 border rounded lg:w-full"
            />
          </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex-auto">
              <label className="block mb-2" for="fname">Joining Date *</label>
              <input
              type="date"
              id="date"
              placeholder="First Name"
              className="w-full h-10 p-2 text-gray-400 border rounded"
            />
            </div>
            <div className="flex-auto">
              <label className="block mb-2" for="lname">Birth Date *</label>
              <input
              type="date"
              id="date"
              placeholder="First Name"
              className="w-full h-10 p-2 text-gray-400 border rounded"
            />
            </div>
            </div>  


            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex-auto">
                <label className="block mb-2" for="fname">Password *</label>
                <input
                  type="password"
                  id="fname"
                  placeholder=""
                  className="p-2 border rounded lg:w-full"
                />
              </div>
              <div className="flex-auto">
                <label className="block mb-2" for="lname">Confirm Password *</label>
                <input
                  type="password"
                  id="lname"
                  placeholder=""
                  className="p-2 border rounded lg:w-full"
                />
              </div>
              </div>
          

              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex-auto">
                  <label className="block mb-2">Gender</label>
                  <div className="flex items-center justify-between h-10 w-52">
                    <label for="male">
                      <input type="radio" name="gender" id="male" checked />
                      <span>Male</span>
                    </label>
                    <label for="female">
                      <input type="radio" name="gender" id="female" />
                      <span>Female</span>
                    </label>
                    <label for="other">
                      <input type="radio" name="gender" id="other" />
                      <span>Other</span>
                    </label>
                  </div>
                </div>
              </div>
           
  
    </div>
    </div>




    <div className="bg-white p-4 lg:mr-[180px] lg:ml-[-300px] mt-6 mb-6">
     
      <p className="ml-2 text-lg font-bold uppercase">User Image</p>
    
    <div className="p-4 mt-4 mb-3 border rounded">
        <div className="flex flex-wrap gap-4">
        <div className="flex-auto">
         <img src={imageSrc} width="200px" height="200px"alt="" className="border"/>
       </div>
       </div>
    
       <button
       type="submit"
       className="px-4 py-2 mx-4 mt-4 font-semibold text-white uppercase rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"
       onClick={handleTakeImageClick}
     >
       Take Image
     </button>
        
    </div>
    </div>
    
    

    <div className="bg-white p-4 lg:mr-[180px] lg:ml-[-300px] mt-6 mb-6">
     
      <p className="ml-2 text-lg font-bold uppercase">Job Profiles</p>

      <div className="p-4 mt-4 mb-3 border rounded">
      <div className="flex flex-wrap gap-4">
        <div className="flex-auto">
          <label className="block mb-2" for="ref">Profession *</label>
          <select
            className="w-full h-10 p-2 bg-transparent border rounded"
            id="ref"
          >
          <option value="" disabled selected hidden>Select Profession</option>
            <option value="1">Sales Person</option>
            <option value="2">Gym</option>
            <option value="3">Diet</option>
            
          </select>
          <div className="float-right mt-2">
            <button
            type="submit"
            className="px-4 py-2 text-xl font-semibold text-white uppercase rounded-md bg-gradient-to-r from-purple-800 to-purple-500"
          >
            <FontAwesomeIcon icon={faPlus}/>
          </button>
          </div>
        </div>
        
        <div className="flex-auto">
          <label className="block mb-2" for="ref">Designation *</label>
          <select
            className="w-full h-10 p-2 bg-transparent border rounded"
            id="ref"
          >
            <option value="" disabled selected hidden>Select Designation</option>
            <option value="1">Personal Trainer</option>
            <option value="2">Fitness Coach</option>
            <option value="3">Manager</option>
            <option value="4">HR Manager</option>
            <option value="5">Front Desk Staff</option>
            <option value="6">Marketing Manager</option>
            <option value="7">Physiotherapist</option>
            <option value="8">Sr. Dietition</option>
          </select>
          <div className="float-right mt-2">
            <button
            type="submit"
            className="px-4 py-2 text-xl font-semibold text-white uppercase rounded-md bg-gradient-to-r from-purple-800 to-purple-500"
          >
            <FontAwesomeIcon icon={faPlus}/>
          </button>
          </div>
        </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex-auto">
            <label className="block mb-2" for="ref">Shift *</label>
            <select
              className="w-full h-10 p-2 bg-transparent border rounded"
              id="ref"
            ><option value="" disabled selected hidden>Select a Shift</option>
              <option value="1">Morning</option>
              <option value="2">Afternoon</option>
              <option value="3">Evening</option>
            </select>
          </div>
          <div className="flex-auto">
            <label className="block mb-2" for="ref">Salary Type *</label>
            <select
              className="w-full h-10 p-2 bg-transparent border rounded"
              id="ref"
            >
              <option value="1">Fixed</option>
              <option value="2">Fixed + PT</option>
              <option value="3">Fixed + Incentive</option>
              <option value="4">Fixed + Incentive + PT</option>
              
            </select>
          </div>
          </div>
        
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex-auto">
              <label className="block mb-2" for="ref">Salary / Month (₹ ) *</label>
              <input
              type="text"
              id="lname"
              placeholder="Last Name"
              className="p-2 border rounded lg:w-full"
            />
            </div>
            <div className="flex-auto">
              <label className="block mb-2" for="ref">Salary Mode *</label>
              <select
                className="w-full h-10 p-2 bg-transparent border rounded"
                id="ref"
              >
                <option value="1">Cash</option>
                <option value="2">Cheque</option>
                <option value="3">Bank</option>
               
                
              </select>
            </div>
            </div>
       
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex-auto">
              <label className="block mb-2">Status</label>
              <div className="flex items-center justify-between h-10 w-52">
                <label for="staac">
                  <input type="radio" name="sta" id="staac" checked />
                  <span>Active</span>
                </label>
                <label for="stainac">
                  <input type="radio" name="sta" id="stainac" />
                  <span>Inactive</span>
                </label>
                
              </div>
            </div>
          </div>
    </div>
</div>



<div className="bg-white p-4 lg:mr-[180px] lg:ml-[-300px] mt-6">
     
    <p className="ml-2 text-lg font-bold uppercase">contact Details</p>

  <div className="p-4 mt-4 mb-3 border rounded">
    <div className="flex flex-wrap gap-4">
      <div className="flex-auto">
        <label className="block mb-2" for="fname">Phone Number *</label>
        <input
          type="text"
          id="fname"
          placeholder=""
          className="p-2 border rounded lg:w-full"
        />
      </div>
      <div className="flex-auto">
        <label className="block mb-2" for="lname">Current Address *</label>
        <input
          type="text"
          id="lname"
          placeholder="Owned/Rented"
          className="p-2 border rounded lg:w-full"
        />
      </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-2">
        <div className="flex-auto">
          <label className="block mb-2" for="comment">Current Address *</label>
          <textarea
            placeholder=""
            id="comment"
            cols="30"
            rows="4"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div className="flex-auto">
          <label className="block mb-2" for="comment">Permanent Address</label>
          <textarea
            placeholder=""
            id="comment"
            cols="30"
            rows="4"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        </div>
</div>
</div>


<div className="bg-white p-4 lg:mr-[180px] lg:ml-[-300px] mt-6 mb-6">
     
  <p className="ml-2 text-lg font-bold uppercase">Permissions</p>

<div className="border rounded p-4 mt-4 mb-[50px]">
    <div className="flex flex-wrap gap-4">
    <div className="flex-auto">
      <div className="flex flex-wrap gap-4">
        <label for="1" className="tailwind">
          <input type="checkbox" name="fitness" id="1" />
          <span className="ml-2">Send Notifications</span>
        </label>
        <label for="2" className="tailwind">
          <input type="checkbox" name="fitness" id="2" />
          <span className="w-full ml-2">Settings</span>
        </label>
        <label for="3" className="tailwind">
          <input type="checkbox" name="fitness" id="3" />
          <span className="w-full ml-2">Schedules</span>
        </label>
        <label for="4" className="tailwind">
          <input type="checkbox" name="fitness" id="4" />
          <span className="w-full ml-2">Chat</span>
        </label>
        </div>
   </div>
   </div>

   <div className="flex flex-wrap gap-4">
    <div className="flex-auto">
      <div className="flex flex-wrap gap-4">
        <label for="5" className="tailwind">
          <input type="checkbox" name="fitness" id="5" />
          <span className="ml-2">Inquiry</span>
        </label>
        <label for="6" className="tailwind">
          <input type="checkbox" name="fitness" id="6" />
          <span className="w-full ml-2">Gym</span>
        </label>
        <label for="7" className="tailwind">
          <input type="checkbox" name="fitness" id="7" />
          <span className="w-full ml-2">Performance Report</span>
        </label>
        <label for="8" className="tailwind">
          <input type="checkbox" name="fitness" id="8" />
          <span className="w-full ml-2">Photo Tracking</span>
        </label>
        </div>
   </div>
   </div>
   <div className="flex flex-wrap gap-4">
    <div className="flex-auto">
      <div className="flex flex-wrap gap-4">
        <label for="9" className="tailwind">
          <input type="checkbox" name="fitness" id="9" />
          <span className="ml-2">Device Sync</span>
        </label>
        <label for="10" className="tailwind">
          <input type="checkbox" name="fitness" id="10" />
          <span className="w-full ml-2">POS</span>
        </label>
        <label for="11" className="tailwind">
          <input type="checkbox" name="fitness" id="11" />
          <span className="w-full ml-2">Yoga</span>
        </label>
        <label for="12" className="tailwind">
          <input type="checkbox" name="fitness" id="12" />
          <span className="w-full ml-2">Form Builder</span>
        </label>
        </div>
   </div>
   </div>

   <div className="flex flex-wrap gap-4">
    <div className="flex-auto">
      <div className="flex flex-wrap gap-4">
        <label for="13" className="tailwind">
          <input type="checkbox" name="fitness" id="13" />
          <span className="ml-2">Business Intelligence Report</span>
        </label>
        <label for="14" className="tailwind">
          <input type="checkbox" name="fitness" id="14" />
          <span className="w-full ml-2">Audio chat</span>
        </label>
        <label for="15" className="tailwind">
          <input type="checkbox" name="fitness" id="15" />
          <span className="w-full ml-2">Video chat</span>
        </label>
        </div>
   </div>
   </div>

  
   <button
   type="submit"
   className="float-right px-4 py-2 mx-4 mb-4 font-semibold text-white uppercase rounded-full mt-7 bg-gradient-to-r from-orange-500 to-yellow-500"
   >
   Submit
   </button>
   
   
</div>

</div>


</div>
</div>
</div>
    );
}

export default AddEmployeeForm;