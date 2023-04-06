import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function WaterSchedule() {
  const [myData, setMyData] = useState([]);

  const [isError, setIsError] = useState("");

  const GetApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/waterintake");
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
      .delete(`http://localhost:5000/w/${id}`)
      .then(() => {
        GetApiData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="inline-block min-w-full px-4 py-6 overflow-hidden overflow-x-auto bg-white shadow-lg text-md sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-14">
        <div className="py-4 ">
          <div className="flex justify-start font-bold text-black ">
            Current Water Schedule
          </div>
          <div className="flex justify-end entry">
            <button className="inline bg-o text-white mb-2 ml-9 font-bold py-3 px-4 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
              <FontAwesomeIcon icon={faPlus} /> ADD NEW SCHEDULE
            </button>
          </div>
        </div>

        <table className="min-w-full ">
          <thead className="border-t border-b ">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Time
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Qty (ML)
              </th>

              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900 w-96"
              >
                Description
              </th>

              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Complete Time
              </th>

              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {isError !== "" && <h2>{isError}</h2>}
            {myData.map((waterintakes) => {
              return (
                <tr key={waterintakes.id}>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {waterintakes.time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {waterintakes.ml}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap ">
                    <p className="p-4 break-before-left ">
                      {waterintakes.description}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {waterintakes.last_modified}
                  </td>

                  <td className="px-6 py-4 text-sm text-center text-gray-900 whitespace-nowrap">
                    <button className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                      <FontAwesomeIcon icon={faPen} />
                    </button>

                    <button
                      className="bg-pu text-white py-3 px-3 mr-3 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]"
                      onClick={() => {
                        if (window.confirm("Are You Sure TO Delete Data??")) {
                          handleDelete(waterintakes.id);
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

export default WaterSchedule;
