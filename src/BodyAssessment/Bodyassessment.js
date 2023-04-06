import React from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Bodyassessment() {
  return (
    <div className="bg-gray-100">
      <div className="inline-block px-2 py-4 mt-6 bg-white text-md sm:mx-6 lg:mx-4 sm:px-6 lg:px-4">
        <div className="">
          <button class="bg-a3 text-white py-3 px-6 mt-2 mb-4 float-right lg:mr-4">
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: "20px" }} />

            <p className="inline-block text-white text-md">Export XLSX</p>
          </button>
        </div>
        <div className="inline-block px-4 py-4 overflow-hidden overflow-x-auto bg-white border shadow-lg border-black-1 shadow-t-lg text-md sm:mx-2 lg:mx-4 sm:px-2 lg:px-4">
          <div>
            <p className="mb-2 ml-2">Body Assessments</p>
          </div>
          <table>
            <thead className="border-b-2 ">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  No.
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  Member Id
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  User Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  Employee Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  Height
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  Weight
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  BMI
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  BMR
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  Assessment Date
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-medium text-left text-gray-900"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 border-x-2">
                <td
                  colspan="10"
                  className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap"
                >
                  No data Available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bodyassessment;
