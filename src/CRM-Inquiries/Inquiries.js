import { faDownload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Inquiries() {
  return (
    <div class="px-20 py-12">
      <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-x-2 gap-y-10">
        <div>
          <button className="bg-a3 text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: "20px" }} />
          </button>

          <p class="mt-2 text-sm text-t font-bold">Export XLSX</p>
        </div>
        <div>
          <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "20px" }} />
          </button>

          <p class="mt-2 text-sm text-t font-bold">New Inquiry</p>
        </div>
      </div>
    </div>
  );
}
export default Inquiries;
