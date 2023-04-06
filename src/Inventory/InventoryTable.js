import React, { useEffect, useState } from "react";
import axios from "axios";
import { faPen, faShoePrints, faSocks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function InventoryTable (){

  const [myData,setMyData] = useState([]);
  const [isError,setIsError] = useState("");

  const GetApiData = async () => {

    try{
      const res = await axios.get("http://localhost:5000/inventory")
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
    
    
    <table className="min-w-full">
      <thead className="bg-white border-b-2 border-y-2 border-x">
        <tr>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-x">
           Product Name
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-x">
           Brand
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-x">
           Quantity (In Stock)
          </th>
          
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Action
          </th>
        </tr>
      </thead>
      
      <tbody>
      {isError != "" && <h2>{isError}</h2>}

    {myData.map((inventorys)=>{

      return(
       
        <tr className=" border-x-2" key={inventorys.id}>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            
            {inventorys.product_name}
            </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {inventorys.brand_name}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            23
         </td>
		 <td className="px-6 py-4 text-sm text-green-500 whitespace-nowrap ">
                  <button className="bg-pu text-white py-3 px-3  rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
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

export default InventoryTable;