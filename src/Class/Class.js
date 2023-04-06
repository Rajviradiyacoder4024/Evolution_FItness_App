import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faSearch,
  faPlus,
  faExpand,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Class() {
  return (
    <div class="shadow-lg px-4 py-4 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:-mx-8 inline-block min-w-full sm:px-6 lg:px-8">
      <div class=" border-2 py-4">
        <div class="entry">
          <label>
            <select
              style={{ width: "320px" }}
              className="p-2 px-4 ml-2 border rounded"
            >
              <option value="10">Show All</option>
              <option value="25">Gym</option>
              <option value="50">Gym Daily</option>
              <option value="100">Swimming</option>
              <option value="100">Group-Ex</option>
            </select>
          </label>

          <button class="inline bg-o text-white mb-2 ml-5 font-bold py-3 px-4 ml-[770px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
            TODAY
          </button>

          <button className="inline bg-o text-white mb-2 ml-9 font-bold py-3 px-4 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            ADD NEW CLASS
          </button>
        </div>
      </div>
      <div class="main p-4">
        <div class="top flex justify-between border-t-2 border-y-2 py-3 mb-4">
          <div class="search relative">
            <input
              type="search"
              placeholder="Search Here"
              class="border rounded-full p-2"
            />
            <label class="absolute top-2 right-4">
              <FontAwesomeIcon icon={faSearch} />
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

        <table class="min-w-full">
          <thead class="bg-white border-b-2 border-slate-400 border-t">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                No.
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                <p>Class</p>
                Name
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Date
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Days
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Time
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Trainer
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                <p>Proxy</p>
                Trainer
              </th>

              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Participants
              </th>

              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Status
              </th>

              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="bg-gray-100 border-2">
              <td class="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                1
              </td>
              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                Group-Ex
              </td>
              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                Daily
              </td>
              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                Mon,Tue,Wed,Thur,Fri,Sat
              </td>
              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                <p>04:00 </p> <p>PM - </p>
                <p>05:00</p> PM
              </td>

              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                <p>Adan </p> Brown
              </td>

              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap"></td>

              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                1 / 25
              </td>

              <td class="text-sm text-green-500  px-6 py-4 whitespace-nowrap">
                <span class="bg-green-500 rounded-full h-2 w-2 absolute ">
                  &nbsp;
                </span>
              </td>

              <td class="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                <button class=" text-black font-bold px-1 py-1 ">
                  <FontAwesomeIcon icon={faExpand} />
                  <FontAwesomeIcon icon={faPen} className="ml-2" />
                  <FontAwesomeIcon icon={faTrash} className="ml-2" />
                </button>
              </td>
            </tr>
            <tr class="bg-white border-x-2 border-b-2">
              <td class="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                2
              </td>
              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                Swimming
              </td>
              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                Daily
              </td>
              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                Mon,Tue,Wed,Thur,Fri,Sat
              </td>
              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                <p>08:00 </p> <p>AM - </p>
                <p>09:00</p> AM
              </td>

              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                <p>Adan </p> Brown
              </td>

              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                Hitesh J Patel
              </td>

              <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                0 / 20
              </td>

              <td class="text-sm text-green-500  px-6 py-4 whitespace-nowrap">
                <span class="bg-green-500 rounded-full h-2 w-2 absolute ">
                  &nbsp;
                </span>
              </td>

              <td class="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                <button class=" text-black font-bold px-1 py-1 ">
                  <FontAwesomeIcon icon={faExpand} />
                  <FontAwesomeIcon icon={faPen} className="ml-2" />
                  <FontAwesomeIcon icon={faTrash} className="ml-2" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Class;
