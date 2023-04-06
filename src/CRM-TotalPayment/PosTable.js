
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Posfilter from "./Posfilter";
function PosTable(){

  const [myData,setMyData] = useState([])

  const [isError,setIsError] = useState("")

  const GetApiData = async () => {
    try{
      const res = await axios.get("http://localhost:3500/Pos")
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
    <div>
      <Posfilter/>
    </div>
    <div class="uppercase mb-4 px-4">
      <b>
        Recently registered users
      </b>
    </div>
    <table class="min-w-full">
      <thead class="bg-white border-b-2">
        <tr>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            No.
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Payment Date
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Member Id
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Member Name
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
           Product Type
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
           Total Paid
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Payment Option
          </th>
          
        </tr>
      </thead>
      <tbody>
      {isError !== "" && <h2>{isError}</h2>}
    { myData.map((Pos)=>{
    
       return(
        <tr class="bg-gray-100 border-x-2">
          <td class="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">{Pos.id}</td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Pos.paymentdate}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Pos.memberid}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
           {Pos.membername}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Pos.producttype}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
           {Pos.totalpaid}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Pos.paymentoption}
          </td>
          
        </tr>
		
       )
    }
    )
  }
		
		
        
      </tbody>
    </table>
  </div>

  
    );

}
export default PosTable;
