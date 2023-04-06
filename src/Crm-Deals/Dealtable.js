import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Dealfilters from "./Dealfilter";
import Dealicone from "./Dealicone";

function Dealtable() {
  const [myData, setMyData] = useState([]);

  const [isError, setIsError] = useState("");

  const GetApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/crmdeal");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    GetApiData();
  }, []);

  return (
    <div className="w-[680px] h-[680px]inline-block min-w-full px-4 py-4 overflow-hidden overflow-x-auto bg-white  text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
      <div>
        <Dealicone/>
      </div>
      <div>
        <Dealfilters/>
      </div>
      <table className="min-w-full shadow-lg">
        <thead className="border-b border-gray-800 ">
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
              Assigned To
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
              Deal Stage
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
              Close Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Next Follow Up Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Actions
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Deal Status
            </th>
          </tr>
        </thead>

        <tbody>
          {isError !== "" && <h2>{isError}</h2>}
          {myData.map((Deal) => {
            return (
              <tr className=" border-x-2" key={Deal.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {Deal.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {Deal.owner_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {Deal.contact_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {Deal.deal_stage}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {Deal.created}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {Deal.close_date  }
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {Deal.updated_at}
                </td>

                <td className="relative px-6 py-4 text-lg whitespace-nowrap">
                  <FontAwesomeIcon icon={faExpand} />
                  <FontAwesomeIcon icon={faDollarSign} className="ml-4" />
                </td>
                <td className="px-6 py-2 text-sm text-gray-900 whitespace-nowrap">
                  <button
                    style={{ width: "100px" }}
                    className="px-2 py-1 font-bold text-white border border-gray-300 bg-o"
                  >
                    <p className="text-sm font-bold text-white">OPEN</p>
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
export default Dealtable;
