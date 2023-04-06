import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash,faPlus  } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link } from "react-router-dom";


function Water(){

  const [myData,setMyData] = useState([])

  const [isError,setIsError] = useState("")

  function GetApiData() {
    axios.get("http://localhost:5000/w")
    .then((res)=>{
      setMyData(res.data);
    }).catch((error)=>{
      setIsError(error.message)
    });
  }

  useEffect( () => {
    GetApiData();
  },[])


  function handleDelete (id) {
    axios.delete("http://localhost:5000/w/"+id)
    .then(() => {
        GetApiData();
    }).catch((error)=>{
        console.log(error)
    });
  }

  function setDataToStorage (time,qty,description,completetime) {
      localStorage.setItem('time',time);
      localStorage.setItem('qty',qty);
      localStorage.setItem('description',description);
      localStorage.setItem('completetime',completetime);
  }
    return(

      <>

  

<div className="inline-block min-w-full px-4 py-6 overflow-hidden overflow-x-auto shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-14">
	
	<div className="py-4 ">
	<div className="flex justify-start font-bold text-black ">
	
	Current Water Schedule
	
	</div>
	<div className="flex justify-end entry">

<Link to="/create">
  <button className="inline bg-o text-white mb-2 ml-9 font-bold py-3 px-4 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
        <FontAwesomeIcon icon={faPlus}/>  ADD NEW SCHEDULE
  </button>
</Link>
	  
	  </div>
	
	</div>



    <table className="min-w-full ">
      
      <thead className="border-t border-b ">
        <tr>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
          Time
          </th>
		  <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Qty(ML)
          </th>
		  
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900 w-96">
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

    {isError !== "" && <h2>{isError}</h2>}

    <tbody>
    { myData.map((waterintakes)=>{
      

      return(
      
        
          <tr  key={waterintakes.id}>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            {waterintakes.time}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
           {waterintakes.ml}
          </td>
		      <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            <p>{waterintakes.description}</p> 
          </td>
		  
		   <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          {waterintakes.last_modified}
          </td>
		  
		  
          <td className="px-6 py-4 text-sm text-center text-gray-900 whitespace-nowrap">
				  
          <Link to='/edit'>
          <button  className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]"
                    onClick={() => setDataToStorage(waterintakes.time,waterintakes.qty,waterintakes.description,waterintakes.completetime)}
                    >
                    <FontAwesomeIcon icon={faPen} />
          </button> 
          </Link>
         
        
			 
				  
				<button className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]"
                onClick={() => { 
                                if(window.confirm('Are You Sure TO Delete Data??'))
                                {
                                  handleDelete(waterintakes.id)
                                }
                                }}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>   
          </td>
          
		  
        </tr>
      
      );
    })
    }
    </tbody>
      
	  
   
    </table>
  </div>

  </>
    );
}

export default Water;
