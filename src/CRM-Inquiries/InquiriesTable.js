import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faExpand, faPen } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Inquiries from './Inquiries';
import Inquiriesfilter from './Inquiriesfilter';



function InquiriesTable(){
  

    const [myData,setMyData] = useState([])
  
    const [isError,setIsError] = useState("")
  
    const GetApiData = async () => {
      try{
        const res = await axios.get("http://localhost:5000/crminquiries")
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
    className="inline-block min-w-full px-4 py-4 overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
    <div>
      <Inquiries/>
    </div>
    <div>
      <Inquiriesfilter/>
    </div>
    <table className="min-w-full">
      <thead className="border-b-2">
      <tr>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            No.
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            User Name
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            Phone
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            E-Mail Address
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            Inquiry Date
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Inquiry Type
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            Assigned Employee
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            Deal Stage
          </th>
		  <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>


      {isError !== "" && <h2>{isError}</h2>}
    { myData.map((inquiries)=>{
      return(
        <tr className="border-x-2" key={inquiries.id_no}>
          <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{inquiries.id_no}</td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          {inquiries.name} {inquiries.last_name}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          {inquiries.phone}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          {inquiries.email}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          {inquiries.created_at}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          {inquiries.inquiry_type}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          {inquiries.user_name} 
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap ">
          {inquiries.deal_stage}
          </td>
		   <td className="px-6 py-4 text-sm text-green-500 whitespace-nowrap ">
		   <div className="grid grid-cols-2 gap-x-2 gap-y-2 ">
            
				   <button className="px-1 py-1 font-bold text-white rounded-tl rounded-tr rounded-bl rounded-br bg-o">
                   <FontAwesomeIcon icon={faUser} />
                  </button>
				  <button className="px-1 py-1 font-bold text-white rounded-tl rounded-tr rounded-bl rounded-br bg-o">
                  <FontAwesomeIcon icon={faExpand} />
                  </button>
				  <button className="px-1 py-1 font-bold text-white rounded-tl rounded-tr rounded-bl rounded-br bg-o">
                  <FontAwesomeIcon icon={faPen} />
                  </button>
				  
				  
				  
          </div>
          </td>
		  
        </tr>

      );
    }
    )
  }
      
      </tbody>
    </table>
  </div>
  

    );
}
export default InquiriesTable;
