import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

function EventTable() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  function GetApiData() {
    axios
      .get("http://localhost:5000/event")
      .then((res) => {
        setMyData(res.data);
      })
      .catch((error) => {
        setIsError(error.message);
      });
  }

  useEffect(() => {
    GetApiData();
  }, []);

  return (
    <div className="inline-block min-w-full px-4 py-4 overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
      <table className="min-w-full">
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
              Event Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Start Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              End Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Start Time
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              End Time
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Attendees
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Web
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              App
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              <p>Send Sms To</p>
              <p>Eligible</p>
              Member
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-left text-gray-900"
            >
              Actions
            </th>
          </tr>
        </thead>

        {isError !== "" && <h2>{isError}</h2>}

        {myData.map((event) => {
          

          return (
            <tr className="border-t-2 border-x-2" key={event.id}>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {event.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {event.event_name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {event.start_date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {event.end_date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {event.start_time}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {event.end_time}
              </td>

              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {}
              </td>

              <td className="px-6 py-4 text-sm text-green-500 whitespace-nowrap">
                <span className="absolute w-2 h-2 bg-green-500 rounded-full ">
                  &nbsp;
                </span>
              </td>

              <td className="px-6 py-4 text-sm text-green-500 whitespace-nowrap">
                <span className="absolute w-2 h-2 bg-green-500 rounded-full ">
                  &nbsp;
                </span>
              </td>

              <td className="px-6 py-4 text-sm text-green-500 whitespace-nowrap">
                <span className="absolute w-2 h-2 bg-green-500 rounded-full ">
                  &nbsp;
                </span>
              </td>

              <td className="px-6 py-4 text-sm text-green-500 whitespace-nowrap ">
                <button className="px-1 py-1 font-bold text-black ">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default EventTable;
