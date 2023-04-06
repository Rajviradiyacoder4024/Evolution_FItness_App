import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function ProgramList() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const GetApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/programlist  ");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    GetApiData();
  }, []);

  return (
    <div class="shadow-lg">
      <div class="containe">
        <div class="header bg-gray-200 py-4 px-4 flex justify-between items-center">
          <h1 class="uppercase font-bold text-lg">program list</h1>

          <button
            type="button"
            class="bg-purple-900 text-white uppercase font-semibold text-base p-2 rounded-lg"
          >
            add program
          </button>
        </div>
        <div class="main p-4">
          <div class="top flex justify-between h-0">
            <div class="search relative">
              <input
                type="search"
                placeholder="Search Here"
                class="border rounded-full p-2"
              />
              <label class="absolute top-2 right-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </label>
            </div>

            <div class="entry">
              <label>
                Show
                <select class="border rounded p-2">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>

          <div class="w-full py-4 overflow-hidden overflow-x-auto inline-block">
            <table class="min-w-full border-collapse">
              <thead>
                <tr>
                  <th>Program List:</th>
                  <th>Program Name</th>
                  <th>Diet Plan</th>
                  <th>Exercise Plan</th>
                  <th>No Of Days</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {isError != "" && <h2>{isError}</h2>}

                {myData.map((program) => {
                  return (
                    <tr key={program.id}>
                      <td>{program.id}</td>
                      <td>{program.programme_name}</td>
                      <td>{program.plan_days}</td>
                      <td>{program.name}</td>
                      <td>{program.days}</td>
                      <td>
                        <div class="flex justify-evenly">
                          <button
                            type="button"
                            class="bg-purple-900 text-white p-2 rounded"
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </button>
                          <button
                            type="button"
                            class="bg-purple-900 text-white p-2 rounded"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div class="footer">Showing 0 To 0 Of 0 Entries</div>
        </div>
      </div>
    </div>
  );
}

export default ProgramList;
