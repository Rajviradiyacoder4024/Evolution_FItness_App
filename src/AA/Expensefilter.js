import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function Expensefilter() {

    const [showFilter, setShowFilter] = useState(false);

    const handleFilterToggle = () => {
      setShowFilter(!showFilter);
    };

  return (
     <div className="bg-new">
     <div className="flex px-12 py-4">
          <div className="grid w-full grid-cols-1 bg-white border-2 border-gray-100 shadow-lg text-md gap-x-8 gap-y-4 md:grid-cols-1 lg:grid-cols-1">
            
            <div className="flex justify-between w-full h-8">
              <div className="px-4 pt-1 ml-2 text-left text-slate-900">
                Filter Here
              </div>
              <div className="px-6 pt-2 text-right">
                <button className="transition duration-600 delay-600 hover:duration-600" onClick={handleFilterToggle}>
                  <FontAwesomeIcon icon={faAngleDown} style={{fontSize: "20px"}} className={`${showFilter ? 'up' : 'down'}`}/>
                </button>
              </div>
            </div>

            {showFilter && (
              
                <div className="grid grid-cols-1 px-4 py-6 shadow-lg h-34 text-md bg-b gap-x-3 gap-y-2 md:grid-cols-2 lg:grid-cols-4">
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300">
                    Assigned amployee
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full h-12 p-4 text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300">
                    Type
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full h-12 p-4 text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select a Type"
                    />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300">
                     From Date
                  </label>
                  
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full h-12 p-4 text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="dd/mm/yyyy"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300">
                    To Date
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full h-12 p-4 text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="">
                  <button
                    style={{ width: "100px" }}
                    className="px-3 py-3 float-right mt-10 bg-o border  border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
                  >
                    <span className="font-bold text-white text-md ">SEARCH</span>
                  </button>
  
                  <button
                    style={{ width: "90px" }}
                    className="px-3 py-3 float-right mt-10 mr-3 bg-pu border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
                  >
                    <span className="font-bold text-white text-md ">RESET</span>
                  </button>
                </div>
              </div>
              
            )}
           
    </div>
  </div>
</div>
  )
}

export default Expensefilter
