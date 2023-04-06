import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseIcon from "./ExpenseIcon";
import ExpenseFilter from "./ExpenseFilter";


function ExpenseTable() {
  
  const [myData,setMyData] = useState([]);
  const [isError,setIsError] = useState("");

  const GetApiData = async () => {

    try{
      const res = await axios.get("http://localhost:5000/expense")
      setMyData(res.data)
    }catch(error){
      setIsError(error.message)
    }
  };  

  useEffect (()=>{
    GetApiData();
  },[])

    return(
        <div  className=" w-[640px] h-[640px] inline-block min-w-full px-4 py-4 overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
        <div>
          <ExpenseIcon/>
        </div>
        <div>
          <ExpenseFilter/>
        </div>
        <table className="min-w-full table-fixed ">
          <thead className="border-b-2 ">
            <tr>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
               Date
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
               Type
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
               Amount
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Created By
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
               Last Updated By
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
               Actions
              </th>
            </tr>
          </thead>


        <tbody>
          {isError !== "" && <h2>{isError}</h2>}

          {myData.map((expense)=>{

            return(

              
              <tr className=" border-x-2" key={expense.id}>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{expense.expense_date}</td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                 {expense.type}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {expense.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {expense.created_by}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {expense.updated_by}
                </td>
                 <td className="px-6 py-4 text-sm text-green-500 whitespace-nowrap ">
                 
                        <button className="px-1 py-1 font-bold text-black ">
                          <FontAwesomeIcon icon={faPen}/>
                          <FontAwesomeIcon className="ml-3 " icon={faTrash}/>
                        </button>
                        
          
                </td>
                
              </tr>
              
            )
          })}
         
         </tbody>
        </table>
      </div>
      
    );
}

export default ExpenseTable;