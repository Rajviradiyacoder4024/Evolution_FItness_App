import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faHospital,
  faMagnifyingGlass,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function MemberShipTable() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const GetApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/membership");
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
            <FontAwesomeIcon icon={faPlus} /> ADD NEW MEMBERSHIP
          </button>
        </div>
      </div>

      <div className="flex justify-between py-3 mb-4 top">
        <div className="relative ml-2 search">
          <input
            type="search"
            placeholder="Search Here"
            className="p-2 border rounded-full"
          />
          <label className="absolute top-2 right-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </label>
        </div>
        <div className="entry">
          <label>
            Show
            <select className="p-2 ml-1 mr-1 border rounded ">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </label>
        </div>
      </div>

      <table className="min-w-full table-auto ">
        <thead className="border-t border-b-2">
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
              <p>Membership</p>
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Membership Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Period(Days)
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Amount($)
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Status
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
          {isError != "" && <h2>{isError}</h2>}

          {myData.map((memberships) => {
            return (
              <tr className=" border-x-2" key={memberships.id}>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {memberships.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  <img
                    src={memberships.image}
                    style={{ width: "50px", height: "50px" }}
                  ></img>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {memberships.membership_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {memberships.period}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {memberships.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  <span className="absolute w-2 h-2 bg-green-500 rounded-full ">
                    &nbsp;
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-black whitespace-nowrap ">
                  <button className="px-1 py-1 font-bold text-black ">
                    <FontAwesomeIcon icon={faExpand} />
                    <FontAwesomeIcon className="ml-2 " icon={faPen} />
                    <FontAwesomeIcon className="ml-2 " icon={faTrash} />
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

export default MemberShipTable;
