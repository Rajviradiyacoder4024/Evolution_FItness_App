import React, { useEffect, useState } from "react";
import axios from 'axios';

function  Lasttable()

{
  const [myData,setMyData] = useState([])
  
  const [isError,setIsError] = useState("")

  const GetApiData = async () => {
    try{
      const res = await axios.get("http://localhost:3500/Lasttable")
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
    <div class="uppercase mb-4 px-4">
      <b>
        Recently registered users
      </b>
    </div>
    <table class="min-w-full">
      <thead class="bg-white border-b">
        <tr>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            No.
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Member Id
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Member Name
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            E-Mail Address
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Membership Name
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Membership Price
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Join Date
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
      {isError !== "" && <h2>{isError}</h2>}
    { myData.map((Lasttable)=>{
      return(
        <tr class="bg-gray-100 border-x-2">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{Lasttable.id}</td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
           {Lasttable.memberid}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Lasttable.membername}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Lasttable.email}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Lasttable.membershipname}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Lasttable.membershipprice}
          </td>
          <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
            {Lasttable.join}
          </td>
          <td class="text-sm text-green-500  px-6 py-4 whitespace-nowrap relative">
            <span class="bg-green-500 rounded-full h-2 w-2 absolute top-6 left-2">&nbsp;</span>
            Active
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

export default Lasttable;