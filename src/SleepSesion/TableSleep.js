import React, { useState, useEffect } from "react";
import {
  faFloppyDisk,
  faExpand,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import FIlterSleep from "./FIlterSleep";
import SleepSesionIcon from "./SleepSesionIcon";

function TableSleep() {
  const [myData, setMyData] = useState([]);

  const [isError, setIsError] = useState("");

  const GetApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/sleep");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    GetApiData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`http://localhost:5000/sleep/${id}`)
      .then(() => {
        GetApiData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="inline-block min-w-full px-4 py-4 w-[640px] h-[640px] overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
        <div>
          <SleepSesionIcon />
        </div>
        <div>
          <FIlterSleep />
        </div>
        <table className="min-w-full table-auto">
          <thead className="border-b-2 ">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                No.
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Member Id
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                User Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Bed Time
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Wake Up Time
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Hr : Min
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {isError !== "" && <h2>{isError}</h2>}

            {myData.map((tablesleep) => {
              return (
                <tr className=" border-x-2" key={tablesleep.id}>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tablesleep.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tablesleep.user_id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tablesleep.user_name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tablesleep.sleep_time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tablesleep.wake_up_time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap ">
                    {tablesleep.total_sleep_time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap ">
                    <button className="bg-pu text-white font-bold py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                      <FontAwesomeIcon icon={faFloppyDisk} />
                    </button>
                    <button className="bg-pu text-white font-bold py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                      <FontAwesomeIcon icon={faExpand} />
                    </button>
                    <button
                      className="bg-pu text-white font-bold py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]"
                      onClick={() => {
                        if (window.confirm("Are You Sure TO Delete Data??")) {
                          handleDelete(tablesleep.id);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableSleep;
