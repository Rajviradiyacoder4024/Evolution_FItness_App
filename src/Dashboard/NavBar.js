import { faBagShopping, faBars, faBell, faCalendarDay, faCalendarDays, faComment, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";




function NavBar(){

    return(

        <nav
      className="relative flex flex-wrap items-center justify-between w-full py-3 text-white shadow-lg bg-nav navbar navbar-expand-lg navbar-light"
    >
      <div
        className="container flex flex-wrap items-center justify-between px-4 mx-auto"
      >
        <div
          className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start"
        >
          <div className="items-center flex-grow">
            <a className="text-xl font-bold uppercase" href="#">dashboard</a>
          </div>
          <button
            className="block px-3 py-1 text-xl leading-none bg-transparent border-transparent border-solid rounded curser-pointer lg:hidden lg:outline-none focus:outline-none"
            type="button"
            onclick="toggleNavbar('example-collapse-navbar')"
          >
            <FontAwesomeIcon className="text-white " icon={faBars}/>
          </button>
        </div>
        <div
          className="items-center hidden bg-white lg:flex lg:bg-transparent lg:shadow-none"
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col mr-auto list-none lg:flex-row">
            <li className="flex items-center">
              <a
                href="#Notifications"
                className="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
                >
                <FontAwesomeIcon className="mr-2 text-lg text-gray-500 lg:text-gray-300 leading-lg" icon={faBell}/>
                </a>
            </li>
            <li className="flex items-center">
              <a
                href="#Today's Appointments"
                className="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
                >
                    <FontAwesomeIcon className="mr-2 text-lg text-gray-500 lg:text-gray-300 leading-lg" icon={faCalendarDay}/>
                </a>
            </li>
            <li className="flex items-center">
              <a
                href="Chat"
                className="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
                >
                    <FontAwesomeIcon className="mr-2 text-lg text-gray-500 lg:text-gray-300 leading-lg" icon={faComments}/>
                </a>
            </li>
            <li className="flex items-center">
              <a
                href="#POS"
                className="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
                >
                    <FontAwesomeIcon className="mr-2 text-lg text-gray-500 lg:text-gray-300 leading-lg" icon={faBagShopping}/>
                </a>
            </li>
            <li className="flex items-center">
              <a
                href="#POS"
                className="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
              >
                <div className="bg-white rounded-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    width="20"
                    height="20"
                  />
                </div>
              </a>
            </li>


            <li
              className="relative items-center hidden dropdown lg:flex lg:inline-block"
            >
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="dropdown"
              >
                <span className="hidden sm:inline">Admin</span>
                <i className="pt-1 ml-2 fa-solid fa-caret-down"></i>
              </button>
              <ul
                className="absolute right-0 hidden pt-1 text-gray-700 dropdown-menu top-5"
              >
                <li className="">
                  <a
                    className="sm:w-[10rem] rounded-tl-2xl bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap capitalize"
                    href="#"
                  >
                    <i className="px-2 fa-solid fa-user"></i
                    ><span className="hidden sm:inline">my profile</span>
                  </a>
                </li>
                <li className="">
                  <a
                    className="block px-4 py-2 capitalize whitespace-no-wrap bg-white hover:bg-gray-400"
                    href="#"
                  >
                    <i className="px-2 fa-solid fa-gear"></i
                    ><span className="hidden sm:inline">settings</span>
                  </a>
                </li>
                <li className="">
                  <a
                    className="block px-4 py-2 capitalize whitespace-no-wrap bg-white hover:bg-gray-400"
                    href="#"
                  >
                    <i className="px-2 fa-solid fa-ticket"></i
                    ><span className="hidden sm:inline">tickets</span>
                  </a>
                </li>
                <li className="">
                  <a
                    className="block px-4 py-2 capitalize whitespace-no-wrap bg-white hover:bg-gray-400"
                    href="#"
                  >
                    <i className="px-2 fa-solid fa-circle-question"></i
                    ><span className="hidden sm:inline">help</span>
                  </a>
                </li>
                <li className="">
                  <a
                    className="block px-4 py-2 whitespace-no-wrap bg-white rounded-b-2xl hover:bg-gray-400"
                    href="#"
                  >
                    <i className="px-2 fa-solid fa-arrow-right-from-bracket"></i
                    ><span className="hidden sm:inline">logout</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
     
    

  
}
export default NavBar 