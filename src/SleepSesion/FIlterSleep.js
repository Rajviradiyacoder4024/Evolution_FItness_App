import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown } from '@fortawesome/free-solid-svg-icons'

function FIlterSleep() {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="">
      <div className="flex px-12 py-4">
        <div className="grid w-full grid-cols-1 bg-white border-2 border-gray-100 shadow-lg text-md gap-x-8 gap-y-4 md:grid-cols-1 lg:grid-cols-1">
          <div className="flex justify-between w-full">
            <div className="px-4 pt-2 ml-2 text-left text-slate-900">
              Filter
            </div>
            <div className="px-6 pt-3 pb-2 text-right">
              <button onClick={handleFilterToggle}>
                <FontAwesomeIcon icon={faAngleDown} className={`${showFilter ? 'up' : 'down'}`}/>
              </button>
            </div>
          </div>

          {showFilter && (
            <div className="grid grid-cols-1 px-4 py-6 shadow-lg text-md bg-b gap-x-3 gap-y-2 md:grid-cols-2 lg:grid-cols-4">
              <div className="mb-6">
                <label
                  htmlFor="large-input"
                  className="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300">
                  Search
                </label>
                <input
                  type="text"
                  id="large-input"
                  className="block w-full p-4 text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div></div>
              <div></div>
              <div className="">
                <button
                  style={{ width: "100px" }}
                  className="px-3 py-4 float-right mt-10 bg-o border  border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
                >
                  <span className="font-bold text-white text-md ">SEARCH</span>
                </button>

                <button
                  style={{ width: "90px" }}
                  className="px-3 py-4 float-right mt-10 mr-3 bg-pu border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
                >
                  <span className="font-bold text-white text-md ">RESET</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default FIlterSleep;
