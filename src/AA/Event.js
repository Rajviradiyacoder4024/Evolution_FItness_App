
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from 'axios';

function Event(){

  const [myData,setMyData] = useState([])

  const [isError,setIsError] = useState("")

  const GetApiData = async () => {
    try{
      const res = await axios.get("http://localhost:3500/Event")
      setMyData(res.data);
    }catch(error){
      setIsError(error.message)
    }
  };
  
  useEffect( () => {
    GetApiData();
  },[])    
  return(
      <div
      class="shadow-lg px-4 py-4 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:-mx-8 inline-block min-w-full sm:px-6 lg:px-8">
      
    
    
      <table class="min-w-full">
        <thead class="flex bg-white border-b-2  ">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             No.
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             Event Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Start Date
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             End Date
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             Start Time
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             End Time
            </th>
        
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Attendees
            </th>
        
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             Web
            </th>
        
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             App
            </th>
        
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             <p>Send Sms To</p>
         <p>Eligible</p>
         Member
            </th>
        
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
             Actions
            </th>
        
          </tr>
        </thead>
        <body>
        {isError != "" && <h2>{isError}</h2>}
    { myData.map((Event)=>{
    
       return(

          <tr class="bg-gray-100 border-t-2 border-x-2">
            <td class="px-10 py-4 whitespace-nowrap text-sm  text-gray-900">{Event.id}</td>
            <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
             {Event.eventname}
            </td>
            <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
             <p>{Event.startdate}</p>
        
            </td>
            <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
           <p>{Event.enddate}</p>
        
            </td>
            <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
          {Event.starttime}
            </td>
        <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
          {Event.endtime}
            </td>
        
        <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
             {Event.attendees}
            </td>
            
           
        
        <td class="text-sm flex text-green-500  px-10 py-4 whitespace-nowrap">
             <span class="bg-green-500 rounded-full h-2 w-2 absolute ">&nbsp;</span>
            </td>
        
        <td class="text-sm text-green-500  px-10 py-4 whitespace-nowrap">
             <span class="bg-green-500 rounded-full h-2 w-2 absolute ">&nbsp;</span>
            </td>
        
        <td class="text-sm text-green-500  px-10 py-4 whitespace-nowrap">
             <span class="bg-green-500 rounded-full h-2 w-2 absolute ">&nbsp;</span>
            </td>
        
        
         <td class="text-sm text-green-500  px-15 py-4 whitespace-nowrap ">
         
         <button className="text-black font-bold px-20 py-1">
      <FontAwesomeIcon icon={faUser} />
    </button>
            </td>
             </tr>
            
        
       )
    }
    )
  }
        </body>
      </table>
    </div>
       
   
     
    );
}
export default Event;

