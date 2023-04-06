import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DietSession from "./DietSession";

  

function DietSessionsFinal(){

  const [myData,setMyData] = useState([]);
  const [isError,setIsError] = useState("");

  const GetApiData = async () => {

    try{
      const res = await axios.get("http://localhost:5000/dietplansession")
      setMyData(res.data)
    }catch(error){
      setIsError(error.message)
    }
  };  

  useEffect (()=>{
    GetApiData();
  },[])

    return(
        <div className="inline-block min-w-full px-4 py-4 overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
    <div>
      <DietSession/>
    </div>
    <table className="min-w-full">
      <thead className="border-b-2 ">
        <tr>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           No.
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Session Name
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Start Time
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            End Time
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Status
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Actions
          </th>
        </tr>
      </thead>

      <tbody>
      {isError != "" && <h2>{isError}</h2>}

{myData.map((DietSessionsFinal)=>{

  return(
    
        <tr className="">
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap" key={DietSessionsFinal.id}>{DietSessionsFinal.id}</td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {DietSessionsFinal.session_name}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {DietSessionsFinal.session_start_time}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {DietSessionsFinal.session_end_time}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {DietSessionsFinal.status}
          </td>
          <td className="px-6 py-4 text-sm text-green-500 whitespace-nowrap ">
		   
            
				  
           <button className="px-1 py-1 font-bold text-black ">
           <FontAwesomeIcon icon={faPen}/>
           </button>
           

        </td>
		  
        </tr>
    
  );
})}
      </tbody>
    </table>
  </div>
  
    );
}

export default DietSessionsFinal