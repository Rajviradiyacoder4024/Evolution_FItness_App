import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import axios  from './Axios'

function Api() {

  const [myData,setMyData] = useState([]); 

  const [isError,setIsError] =useState("");

  const GetApiData  = async () =>{
    try{
      const res = await axios.get("/waterschedule");
      setMyData(res.data)
    }catch(error){

      setIsError(error.message)
    }
 
  };
     
  
  useEffect(()=>{
    GetApiData();
  },[]);

  return (
    <>
    {isError != "" && <h2>{isError}</h2>}

    <thead className="bg-white border-t border-b ">
        <tr>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
          Time
          </th>
		  <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Qty (ML)
          </th>
		  
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Description
          </th>
		  
		   <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Complete Time
          </th> 
		  
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
          Actions
          </th>
          
          
        </tr>
      
	  </thead>
    { myData.map((waterschedule)=>{
      const { id,time,qty,description,completetime} = waterschedule;

      return(
       <>
       
       </>
      );
    })
    }
    
  
    </>
  );
}

export default Api;
