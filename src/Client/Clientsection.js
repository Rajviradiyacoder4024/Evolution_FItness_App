import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import Clienticone from "./Clienticone";
import Clientfilter from "./Clientfilter";
import Clientcard from "./Clientcard";

function Clientsection() {
  return (
    <>
    <div>
      <Clienticone/>
    </div> 
    <div className="px-20 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-x-[280px] gap-y-10">
        <div className="">
          <button className="bg-ba text-white py-6 px-[70px] rounded-[15px]">
            <p className="inline" style={{ fontSize: "30px" }}>
              <FontAwesomeIcon
                icon={faUsers}
                className="inline mr-3"
                style={{ fontSize: "30px" }}
              />
              716
            </p>
            <p className="text-white text-md" style={{ whiteSpace: "nowrap" }}>
              Total Clients
            </p>
          </button>
        </div>
        <div>
          <button className="bg-a5 text-white py-6 px-[70px] rounded-[15px]">
            <p className="inline" style={{ fontSize: "30px" }}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="inline mr-3"
                style={{ fontSize: "30px" }}
              />
              535
            </p>
            <p className="text-white text-md" style={{ whiteSpace: "nowrap" }}>
              Active Clients
            </p>
          </button>
        </div>
        <div>
          <button className="bg-gr text-white py-6 px-[70px] rounded-[15px]">
            <p className="inline" style={{ fontSize: "30px" }}>
              <FontAwesomeIcon
                icon={faUserMinus}
                className="inline mr-3"
                style={{ fontSize: "30px" }}
              /><br></br>
            181
            </p>
            <p className="text-white text-md" style={{ whiteSpace: "nowrap" }}>
              Inactive Clients
            </p>
          </button>
        </div>
        <div>
          <button className="bg-a5 text-white py-6 px-[70px] rounded-[15px]">
            <p className="inline" style={{ fontSize: "30px" }}>
              <FontAwesomeIcon
                icon={faMale}
                className="inline mr-3"
                style={{ fontSize: "30px" }}
              /><br></br>
            495
            </p>
            <p className="text-white text-md" style={{ whiteSpace: "nowrap" }}>
              Male Clients
            </p>
          </button>
        </div>
        <div>
          <button className="bg-o text-white py-6 px-[70px] rounded-[15px]">
            <p className="inline" style={{ fontSize: "30px" }}>
              <FontAwesomeIcon
                icon={faFemale}
                className="inline mr-3"
                style={{ fontSize: "30px" }}
              /><br></br>
              221
            </p>
            <p className="text-white text-md" style={{ whiteSpace: "nowrap" }}>
              Female Clients
            </p>
          </button>
        </div>
      </div>
      <div>
      <Clientfilter/>
    </div>
    <div>
      <Clientcard/>
    </div>
    </div>
    </>
  );
}
export default Clientsection;
