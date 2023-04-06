import React, { useEffect, useState } from "react";
import {
  faAnchorLock,
  faClock,
  faClockFour,
  faClockRotateLeft,
  faPen,
  faTrash,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { FaClock, FaRegClock } from "react-icons/fa";

function Shifts() {
  const [myData, setMyData] = useState([]);

  const [isError, setIsError] = useState("");

  const GetApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/shifts");
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
      .delete(`http://localhost:5000/shifts/${id}`)
      .then(() => {
        GetApiData();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="p-4 m-auto bg-white">
        <div className="p-4">
          <button className="block px-4 py-2 ml-auto mr-0 font-semibold text-white uppercase rounded-full bg-gradient-to-r from-orange-500 to-yellow-500">
            create shift
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-8 m-4 border card-container ">
          {isError != "" && <h2>{isError}</h2>}

          {myData.map((shift) => {
            return (
              <div className="border group" key={shift.id}>
                <div className="flex items-center justify-center w-48 h-16 m-4 font-bold text-white bg-indigo-500 rounded-lg">
                  {shift.shift_name}
                </div>
                <div className="mx-4 mt-8 mb-2">
                  <span>
                    <FontAwesomeIcon
                      className="fa-regular"
                      icon={faUserClock}
                    />
                  </span>
                  <span> Shift Time </span>
                </div>
                <div className="mx-4 mb-8 text-sm text-gray-500">
                  {shift.start_time} To {shift.end_time}
                </div>
                <div className="flex justify-end gap-2 p-4 border-t group-hover:bg-slate-700">
                  <button className="p-2 text-xs text-white rounded bg-slate-700 group-hover:bg-white group-hover:text-slate-700">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button 
                  className="p-2 text-xs text-white rounded bg-slate-700 group-hover:bg-white group-hover:text-slate-700"
                   onClick={() => {
                    if (window.confirm("Are You Sure TO Delete Data??")) {
                      handleDelete(shift.id);
                    }
                  }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shifts;
