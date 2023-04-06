import React from "react";
import {
  faUser,
  faPen,
  faEgg,
  faCheese,
  faBreadSlice,
  faWheatAwn,
  faList,
  faFloppyDisk,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PhotoTracking() {
  return (
    <div className="mx-16 my-16">
      <div className="bg-white border shadow-lg group w-80">
        <div className="flex flex-col pb-4 my-4 card_top md:flex-row">
          <div className="flex justify-center px-4 usr_avatar">
            <img
              src="https://i0.wp.com/bane-tech.com/wp-content/uploads/2015/10/V.png?fit=1575%2C1575&ssl=1"
              alt="dish image"
              width="70"
              className="border-4 rounded-lg"
            />
          </div>
          <div className="px-4 usr_name">
            <h2>Egg Dish</h2>
            <p>by User</p>
            <p>Portion - 5 serving</p>
          </div>
        </div>

        <div className="px-4 usr_info">
          <div className="food_nutrition">
            <ul className="flex flex-row justify-around">
              <li className="flex flex-col items-center">
                <div className="w-12 p-4 text-center text-white bg-red-500 rounded icon">
                  <FontAwesomeIcon icon={faEgg} />
                </div>
                <div className="name">Protien</div>
                <div className="value">0g</div>
              </li>

              <li className="flex flex-col items-center">
                <div className="p-4 text-white bg-green-500 rounded icon">
                  <FontAwesomeIcon icon={faCheese} />
                </div>
                <div className="name">Fats</div>
                <div className="value">0g</div>
              </li>

              <li className="flex flex-col items-center">
                <div className="p-4 text-white bg-blue-500 rounded icon">
                  <FontAwesomeIcon icon={faBreadSlice} />
                </div>
                <div className="name">Carbs</div>
                <div className="value">0g</div>
              </li>

              <li className="flex flex-col items-center">
                <div className="p-4 text-white bg-yellow-500 rounded icon">
                  <FontAwesomeIcon icon={faWheatAwn} />
                </div>
                <div className="name">Fibre</div>
                <div className="value">0g</div>
              </li>
            </ul>
          </div>

          <div className="my-4 ingredients">
            <label className="mb-1">
              <FontAwesomeIcon icon={faList} /> Ingredients
            </label>
            <p>Boiled egg</p>
          </div>

          <div className="my-4 calories">
            <label>
              <FontAwesomeIcon icon={faCreditCard} /> Total Calories
            </label>

            <div className="relative mt-2 value">
              <input
                type="number"
                value="70"
                className="w-full p-2 border rounded cal_value"
              />
              <button
                type="button"
                className="absolute px-2 bg-white btn right-1 top-1 h-9"
                value="save"
              >
                <FontAwesomeIcon icon={faFloppyDisk} />
              </button>
            </div>

            <div className="my-4 assign_exp">
              <label className="mb-1">
                <FontAwesomeIcon icon={faUser} /> Assigned Experts
              </label>

              <div className="flex mt-2 -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-pink-500 text-white text-center p-[3px]">
                  F
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-pink-500 text-white text-center p-[3px]">
                  I
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group-hover:bg-indigo-900">
          <div className="flex justify-between px-4 py-4 align-baseline transition border-t border-gray-300 footer">
            <button className="text-center text-indigo-900 capitalize cursor-pointer group-hover:text-white">
              view details
            </button>
            <div>
              <button className="float-right w-8 h-8 mx-1 text-xs text-white bg-indigo-900 rounded-lg group-hover:bg-white group-hover:text-indigo-900">
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button className="float-right w-8 h-8 mx-1 text-xs text-white bg-indigo-900 rounded-lg group-hover:bg-white group-hover:text-indigo-900">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoTracking;
