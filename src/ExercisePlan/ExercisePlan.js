import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown, faMagnifyingGlass, faPen, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ExerciseFilter from "./ExerciseFilter";

const url = "http://localhost:3500/exersizeplan"; 

function ExercisePlane (){

  const [myData,setMyData] = useState([]);
  const [isError,setIsError] = useState("");

  const GetApiData = async () => {

    try{
      const res = await axios.get(url)
      setMyData(res.data)
    }catch(error){
      setIsError(error.message)
    }
  };  

  useEffect (()=>{
    GetApiData();
  },[])

    return(
        <div className="inline-block min-w-full px-4 py-6 overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-14">
        <ExerciseFilter/>
        
      <div className="p-4 main">

        <div className="flex justify-between h-0 mb-4 top">
          <div className="relative search">
            <input type="search" placeholder="Search Here" class="border rounded-full p-2" />
            <label className="absolute top-2 right-4">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </label>
          </div>
          <div className="entry">
            <label>
              Show
              <select className="p-2 border rounded">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </label>
          </div>
        </div>

        <table className="min-w-full table-auto ">
      <thead >
      <tr>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
          No
          <FontAwesomeIcon className="ml-1" icon={faArrowsUpDown}/>
          </th>
		  <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
          Client Name 
          <FontAwesomeIcon className="ml-1" icon={faArrowsUpDown}/>
          </th>
		  
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
          Plan 
          <FontAwesomeIcon className="ml-1" icon={faArrowsUpDown}/>
          </th>
		  
		   <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           From Date
           <FontAwesomeIcon className="ml-1" icon={faArrowsUpDown}/>
          </th> 
		  
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
          To Date
          <FontAwesomeIcon className="ml-1" icon={faArrowsUpDown}/>
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
          Actions
          <FontAwesomeIcon className="ml-1" icon={faArrowsUpDown}/>
          </th>
           
        </tr>

      </thead>
      <tbody>
      {isError != "" && <h2>{isError}</h2>}

{myData.map((DietPlan)=>{
  const {id,clientname,plan,fromdate,todate} = DietPlan;
  return(
        

        <tr>
            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap" key={id}>
            {id}
            </td>
            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
              <FontAwesomeIcon className="mr-1 "icon={faUser}/>
              {clientname}
            </td>


        <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
           {plan}
            </td>

        <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {fromdate}
            </td>
            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {todate}
            </td>


            <td className="px-6 py-4 text-sm text-center text-gray-900 whitespace-nowrap">
              <button class="bg-pu text-white py-3 px-3  rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                  <FontAwesomeIcon icon={faPlus}/>
                  </button>
            </td>

          </tr>
          
  );})}

  </tbody>
 </table>

    </div>
</div>
    );
}

export default ExercisePlane;