import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEye,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ProgramManagement() {
  const [activeTab, setActiveTab] = useState("diet");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const GetApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/programdiet");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    GetApiData();
  }, []);

  const [dAta, setDAta] = useState([]);
  const [erRor, setErRor] = useState("");

  const ApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/programexercise");
      setDAta(res.data);
    } catch (error) {
      setErRor(error.message);
    }
  };

  useEffect(() => {
    ApiData();
  }, []);

  return (
    <div className="bg-[rgb(238,238,238)]">
      <div className="main">
        <div className="inline-block bg-white header">
          <button
            id="tab1"
            className={`uppercase font-semibold py-2 px-4 ${
              activeTab === "diet"
                ? "text-white bg-purple-900"
                : "text-neutral-800"
            }`}
            onClick={() => handleTabClick("diet")}
          >
            diet plan list
          </button>
          <button
            id="tab2"
            className={`uppercase font-semibold py-2 px-4 ${
              activeTab === "exercise"
                ? "text-white bg-purple-900"
                : "text-neutral-800"
            }`}
            onClick={() => handleTabClick("exercise")}
          >
            exercise plan list
          </button>
        </div>

        <div
          id="diet"
          className={`w-full ${activeTab === "diet" ? "" : "hidden"}`}
          style={{ display: activeTab === "diet" ? "block" : "none" }}
        >
          <div className="flex flex-col px-8 py-2 top bg-cyan-50 md:flex-row">
            <div className="py-2 font-bold uppercase grow">diet plan list</div>
            <button className="px-4 py-2 mx-1 font-semibold text-white uppercase bg-purple-900 rounded">
              create diet plan
            </button>
            <p className="px-2 py-2 font-semibold text-center capitalize">or</p>
            <button className="px-4 py-2 mx-1 font-semibold text-white uppercase bg-purple-900 rounded">
              upload diet plan
            </button>
          </div>

          <div className="px-4 bg-white main">
            <div className="top">
              <div className="relative inline-block my-4 search">
                <input
                  type="search"
                  placeholder="Search Here"
                  className="p-2 border rounded-full"
                />
                <label className="absolute top-2 right-4">
                  <FontAwesomeIcon icon={faSearch} />
                </label>
              </div>

              <div className="float-right my-4 entry">
                <label>
                  Show
                  <select className="p-2 bg-white border rounded-lg">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  entries
                </label>
              </div>
            </div>

            {isError != "" && <h2>{isError}</h2>}
            <div className="w-full py-4 overflow-hidden overflow-x-auto nline-block">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th>Diet Plan List:</th>
                    <th>Diet Plan Name</th>
                    <th>No Of Days</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {myData.map((pm) => {
                    return (
                      <tr key={pm.id}>
                        <td>{pm.id}</td>
                        <td>{pm.plan_name}</td>
                        <td>{pm.plan_days}</td>
                        <td>
                          <div className="flex gap-2 justify-evenly">
                            <button
                              type="button"
                              className="p-2 text-xs text-white bg-purple-900 rounded"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button
                              type="button"
                              className="p-2 text-xs text-white bg-purple-900 rounded"
                            >
                              <FontAwesomeIcon icon={faPen} />
                            </button>
                            <button
                              type="button"
                              className="p-2 text-xs text-white bg-purple-900 rounded"
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
            <div className="pb-4 footer">Showing 1 To 10 Of 10 Entries</div>
          </div>
        </div>

        <div
          id="exercise"
          className={`w-full ${activeTab === "exercise" ? "" : "hidden"} `}
          style={{ display: activeTab === "exercise" ? "block" : "none" }}
        >
          <div className="flex flex-col px-8 py-2 top bg-cyan-50 md:flex-row">
            <div className="py-2 font-bold uppercase grow">
              exercise plan list
            </div>
            <button className="px-4 py-2 mx-1 font-semibold text-white uppercase bg-purple-900 rounded">
              create exercise plan
            </button>
            <p className="px-2 py-2 font-semibold text-center capitalize">or</p>
            <button className="px-4 py-2 mx-1 font-semibold text-white uppercase bg-purple-900 rounded">
              upload exercise plan
            </button>
          </div>

          <div className="px-4 bg-white main">
            <div className="top">
              <div className="relative inline-block my-4 search">
                <input
                  type="search"
                  placeholder="Search Here"
                  className="p-2 border rounded-full"
                />
                <label className="absolute top-2 right-4">
                  <FontAwesomeIcon icon={faSearch} />
                </label>
              </div>

              <div className="float-right my-4 entry">
                <label>
                  Show
                  <select className="p-2 bg-white border rounded-lg">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  entries
                </label>
              </div>
            </div>

            {erRor != "" && <h1>{erRor}</h1>}
            <div className="inline-block w-full py-4 overflow-hidden overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th>Exercise Plan List:</th>
                    <th>Exercise Plan Name</th>
                    <th>No Of Days</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {dAta.map((ep) => {
                    return (
                      <tr key={ep.id}>
                        <td>{ep.id}</td>
                        <td>{ep.name}</td>
                        <td>{ep.days}</td>
                        <td>
                          <div className="flex gap-2 justify-evenly">
                            <button
                              type="button"
                              className="p-2 text-xs text-white bg-purple-900 rounded"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button
                              type="button"
                              className="p-2 text-xs text-white bg-purple-900 rounded"
                            >
                              <FontAwesomeIcon icon={faPen} />
                            </button>
                            <button
                              type="button"
                              className="p-2 text-xs text-white bg-purple-900 rounded"
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
            <div className="pb-4 footer">Showing 1 To 3 Of 3 Entries</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramManagement;
