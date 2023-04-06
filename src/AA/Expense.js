import React, { useEffect, useState } from "react";
import axios from 'axios';
function Expense()

{
    
  const [myData,setMyData] = useState([])

  const [isError,setIsError] = useState("")

  const GetApiData = async () => {
    try{
      const res = await axios.get("http://localhost:3500/Expense")
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
        className="shadow-lg px-4 py-4 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:-mx-8 inline-block min-w-full sm:px-6 lg:px-8">
        
        <table className="min-w-full">
          <thead className="bg-white border-b-2">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Date
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Type
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Amount
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Created By
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Last Updated By
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {isError != "" && <h2>{isError}</h2>}
    { myData.map((Expense)=>{
    
       return(
            <tr className="bg-gray-100 border-x-2">
              <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">{Expense.date}</td>
              <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                {Expense.type}
              </td>
              <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                {Expense.amount}
              </td>
              <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
              {Expense.createdby}
              </td>
              <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
              {Expense.lastupdatedby}
              </td>
               <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
               
                      <button className=" text-black font-bold px-1 py-1 ">
                        <i className="fas fa-pen"></i> 
                        <i className="fas fa-trash ml-2"></i>
                      </button>
                      
        
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
export default Expense;