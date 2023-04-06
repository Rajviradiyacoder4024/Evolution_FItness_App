import React, { useState, useEffect } from "react";
import {
  faCopy,
  faExpand,
  faPen,
  faPlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Assessment() {
  const [myData, setMyData] = useState([]);

  const [isError, setIsError] = useState("");

  const GetApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/assessment");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    GetApiData();
  }, []);

  return (
    <div className="inline-block min-w-full px-4 py-4 overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
      <div className="py-4 ">
        <div className="flex justify-end entry">
          <button className="inline bg-o text-white mb-2 ml-9 font-bold py-3 px-4 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
            CREATE FORM
          </button>
        </div>
      </div>
      <table className="min-w-full">
        <thead className="bg-white border-t border-b-2">
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
              Form Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Form Description
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Form Enabled
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Create Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Update Date
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-right text-gray-900"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {isError !== "" && <h2>{isError}</h2>}

          {myData.map((tablesleep) => {
            return (
              <tr className="border-x-2" key={tablesleep.id}>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {tablesleep.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {tablesleep.form_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {tablesleep.form_description}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {tablesleep.form_enabled}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {tablesleep.create_date}
                </td>

                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {tablesleep.update_date}
                </td>

                <td className="px-6 py-4 text-sm text-center text-gray-900 whitespace-nowrap">
                  <button className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                  <button className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                    <FontAwesomeIcon icon={faPen} />
                  </button>

                  <button className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </button>

                  <button className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                    <FontAwesomeIcon icon={faExpand} />
                  </button>

                  <button className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                    <FontAwesomeIcon icon={faPlus} />
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
export default Assessment;
