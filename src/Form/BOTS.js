import { faPen, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BOTS(){
    return(
        <div  className="inline-block min-w-full px-4 py-4 overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
	


	<div className="py-4 ">
	<div className="flex justify-between ">
	
	
     <input type="search" placeholder="Enter your question" 
            className="p-1 ml-3 border" />
	 
	 <input type="search" placeholder="When Fire(Date Time)" 
            className="p-1 mr-3 border" />
	 
	 <div className="inline-flex mr-4">
        <button 
        id="tab1"
        className="px-4 py-2 font-semibold text-white uppercase bg-o"
            onclick="dietlist()"     
                >
        ACTIVE  
        </button>
        <button 
        id="tab2"
        className="px-4 py-2 font-semibold uppercase text-neutral-800"
        onclick="exerciselist()"
        >
            INACTIVE
        </button>
     </div>

	<div className="flex justify-center ml-5">
        <button className="px-4 py-2 font-bold text-white rounded bg-o ">
        ADD
        </button>
    </div>
	
	<div className="flex justify-end entry ">
        <button className="inline bg-o text-white mb-2 ml-9 font-bold py-3 px-4 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">    
        VIEW ALL ANSWERS
     </button>  
	</div>
</div>
</div>
    
	<div className="flex justify-between py-3 mb-4 top">
      <div className="relative ml-2 search">
        <input type="search" placeholder="Search Here" className="p-2 border rounded-full" />
        <label className="absolute top-2 right-4"><FontAwesomeIcon icon={faSearch}/></label>
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
	
    <table className="min-w-full mt-0">
      <thead className="border-t-0 border-b-2 ">
        <tr>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           No.
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Question
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Author Name
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           When Fire
          </th>
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
         Status
          </th>
		  
          <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
           Action
          </th>
        </tr>
      </thead>
      
      <tbody>
        
        <tr className=" border-x-2">
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">1</td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          <p>Greetings! Welcome to C </p>B Patel Health Club AI  
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p> CB Patel Health</p> Club
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p>2018-10-01 </p> 08:00:00
          </td>
		 
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">

          <div className="inline-flex">
            <button 
            id="tab3"
            className="px-4 py-2 font-semibold text-white uppercase bg-green-600"
                onclick="dietlist2()"     
                    >
            ACTIVE
            </button>
            <button 
            id="tab4"
            className="px-4 py-2 font-semibold uppercase bg-gray-200 text-neutral-800"
            onclick="exerciselist2()"
            >
                INACTIVE
            </button>
    
            </div>
            </td>

		    <td className="px-6 py-4 text-sm text-black whitespace-nowrap ">			   
                <button className="px-1 py-1 font-bold text-black ">   	
                 <FontAwesomeIcon className="ml-2" icon={faPen}/>
                 <FontAwesomeIcon className="ml-3 " icon={faTrash}/>
				</button>	
          </td>

        </tr>
		
		
		
		<tr className="bg-white border-x-2">
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">2</td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          <p>Did you complete your </p> <p>profile filling in app? </p>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p> CB Patel Health</p> Club
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p>2018-10-01 </p> 08:00:00
          </td>
		 
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          <div className="inline-flex">
 
 <button 
  id="tab5"
  className="px-4 py-2 font-semibold text-white uppercase bg-green-600"
     onclick="dietlist3()"     
		 >
   ACTIVE
  </button>
  <button 
  id="tab6"
  className="px-4 py-2 font-semibold uppercase bg-gray-200 text-neutral-800"
  onclick="exerciselist3()"
  >
    INACTIVE
  </button>
 
</div>
          </td>
		   <td className="px-6 py-4 text-sm text-black whitespace-nowrap ">
		   
				 
								   
                    <button className="px-1 py-1 font-bold text-black ">
                   	
					<FontAwesomeIcon className="ml-2" icon={faPen}/>
                 <FontAwesomeIcon className="ml-3 " icon={faTrash}/>
				 </button>
			
	
          </td>
		  
        </tr>
		
		
		<tr className="bg-gray-100 border-x-2">
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">3</td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          <p>Have you logged any  </p> <p>health conditions in app  </p>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p> CB Patel Health</p> Club
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p>2018-10-01 </p> 08:00:00
          </td>
		 
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            <div className="inline-flex">
 
 <button 
  id="tab7"
  className="px-4 py-2 font-semibold text-white uppercase bg-green-600"
     onclick="dietlist4()"     
		 >
   ACTIVE
  </button>
  <button 
  id="tab8"
  className="px-4 py-2 font-semibold uppercase bg-gray-200 text-neutral-800"
  onclick="exerciselist4()"
  >
    INACTIVE
  </button>
 
</div>
          </td>
		   <td className="px-6 py-4 text-sm text-black whitespace-nowrap ">
		   
				 
								   
                    <button className="px-1 py-1 font-bold text-black ">
                   	
					<FontAwesomeIcon className="ml-2" icon={faPen}/>
                 <FontAwesomeIcon className="ml-3 " icon={faTrash}/>
				 </button>
			
	
          </td>
		  
        </tr>
		
		
		
		<tr className="bg-white border-x-2">
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">4</td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          <p>Have you logged any  </p> <p>health conditions in app  </p>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p> CB Patel Health</p> Club
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p>2018-10-01 </p> 08:00:00
          </td>
		 
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
            <div className="inline-flex">
 
 <button 
  id="tab9"
  className="px-4 py-2 font-semibold text-white uppercase bg-green-600"
     onclick="dietlist5()"     
		 >
   ACTIVE
  </button>
  <button 
  id="tab10"
  className="px-4 py-2 font-semibold uppercase bg-gray-200 text-neutral-800"
  onclick="exerciselist5()"
  >
    INACTIVE
  </button>
 
</div>
          </td>
		   <td className="px-6 py-4 text-sm text-black whitespace-nowrap ">
		   
				 
								   
                    <button className="px-1 py-1 font-bold text-black ">
                   	
					<FontAwesomeIcon className="ml-2" icon={faPen}/>
                 <FontAwesomeIcon className="ml-3 " icon={faTrash}/>
				 </button>
			
	
          </td>
		  
        </tr>
		
		
		
		<tr className="bg-gray-100 border-x-2">
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">5</td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          <p>Please, complete above </p><p>information in app as it </p> 
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p> CB Patel Health</p> Club
          </td>
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
         <p>2018-10-01 </p> 08:00:00
          </td>
		 
          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
           <div className="inline-flex">
 
 <button 
  id="tab11"
  className="px-4 py-2 font-semibold text-white uppercase bg-green-600"
     onclick="dietlist6()"     
		 >
   ACTIVE
  </button>
  <button 
  id="tab12"
  className="px-4 py-2 font-semibold uppercase bg-gray-200 text-neutral-800"
  onclick="exerciselist6()"
  >
    INACTIVE
  </button>
 
</div>
          </td>
		   <td className="px-6 py-4 text-sm text-black whitespace-nowrap ">
		   
				 
								   
                    <button className="px-1 py-1 font-bold text-black ">
                   	
					<FontAwesomeIcon className="ml-2" icon={faPen}/>
                 <FontAwesomeIcon className="ml-3 " icon={faTrash}/>
				 </button>
			
	
          </td>
		  
        </tr>
		
      </tbody>
    </table>
  </div>
  
    );
}

export default BOTS;