import { useState } from "react";
import { FaUser, FaCreditCard, FaCube, FaCalendar } from "react-icons/fa";

function Reports() {
  const [currentTable, setCurrentTable] = useState("table1");

  return (
    <div className=" bg-new">
      <div className="grid lg:grid-cols-2">
        <div className="border rounded-md bg-white ml-[50px] mt-[100px] mr-[50px] lg:w-[250px] lg:ml-[150px] h-[260px] ">
          <div className="px-4 py-2 text-lg border-b">Reports Tab</div>

          <button
            className="flex items-center w-full px-4 py-2 mt-2 text-left text-gray-500 border focus:text-black active:text-black"
            onClick={() => setCurrentTable("table1")}
          >
            <FaUser className="mr-2" />
            <span>MEMBERS REPORTS</span>
          </button>
          <button
            className="flex items-center w-full px-4 py-2 mt-2 text-left text-gray-500 border focus:text-black active:text-black"
            onClick={() => setCurrentTable("table2")}
          >
            <FaCreditCard className="mr-2 " />
            <span>PAYMENT REPORTS</span>
          </button>
          <button
            className="flex items-center w-full px-4 py-2 mt-2 text-left text-gray-500 border focus:text-black active:text-black"
            onClick={() => setCurrentTable("table3")}
          >
            <FaCube className="mr-2 " />
            <span>CRM REPORTS</span>
          </button>
          <button
            className="flex items-center w-full px-4 py-2 mt-2 text-left text-gray-500 border focus:text-black active:text-black"
            onClick={() => setCurrentTable("table4")}
          >
            <FaCalendar className="mr-2 " />
            <span>ATTENDANCE REPORTS</span>
          </button>
        </div>

        <div
          className={`px-4 border rounded-md bg-white mt-[100px] ml-[50px] mr-[50px] lg:ml-[-335px] lg:w-[900px] ${
            currentTable === "table1" ? "" : "hidden"
          }`}
        >
          <div className="flex items-center px-1 py-2 mt-2 ">
            <FaUser className="mr-2 " />
            <span>Members Reports</span>
          </div>
          <div class="px-4 mt-4 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Membership Report
            </div>
            <div class="text-sm">
              Report generates a list of all contract members with their contact
              and contract data. The report allows you to generate a list of all
              clients put into the system by the membership status with its
              start and end date and their financial status.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Due Memberships
            </div>
            <div class="text-sm">
              Report allows you to monitor the members with due membership by
              current month. The report allows you to generate a list of all
              clients put into the system with the membership expiring over
              current month with its start and due date.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Personal Training
            </div>
            <div class="text-sm">
              Report generates a list of all PT contract members with their
              contact, contract data and PT Trainers. The report allows you to
              generate a list of all clients put into the system by the PT
              membership status with its start and end date, and their financial
              status.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Member Measurement
            </div>
            <div class="text-sm">
              Generate a list of club members with information about last
              measurement done on with body stats entered to the system and next
              to be done on.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Expired Membership
            </div>
            <div class="text-sm">
              Report allows you to monitor the members with expired membership
              by expiry date. The report allows you to generate a list of all
              clients put into the system with the membership expired till date
              with its start and expiry date.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Appointment Report
            </div>
            <div class="text-sm">
              Generate a list of club members with information about their
              scheduled appointment data and consultant. The report allows you
              to generate a list of all clients put into the system by the
              scheduled appointment with its date, time and status.
            </div>
          </div>

          <div class="px-4 mt-6 mb-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Assessment Report
            </div>
            <div class="text-sm">
              Generate a list of club members with information about their
              assessment data and consultant. The report allows you to generate
              a list of all clients put into the system by the assessment date,
              time and status with consultant.
            </div>
          </div>
        </div>

        <div
          className={`px-4 border rounded-md bg-white mt-[100px] ml-[50px] mr-[50px] lg:ml-[-335px] lg:w-[900px] ${
            currentTable === "table2" ? "" : "hidden"
          }`}
        >
          <div className="flex items-center px-1 py-2 mt-2 ">
            <FaCreditCard className="mr-2 " />
            <span>Payment Reports</span>
          </div>

          <div class="px-4 mt-4 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Membership Payment
            </div>
            <div class="text-sm">
              Report generates a list of all contract members with their contact
              and contract data. The report allows you to generate a list of all
              clients put into the system by the membership status with its
              start and end date and their financial status.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Due Payments
            </div>
            <div class="text-sm">
              Report allows you to monitor the members with due membership by
              current month. The report allows you to generate a list of all
              clients put into the system with the membership expiring over
              current month with its start and due date.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Due Date EMI Payments
            </div>
            <div class="text-sm">
              Detailed information about due payment by their due date of the
              club members with contract. The report allows you to generate a
              list of all clients summarizing the membership payment, based on
              accurate information about the payment of specific membership with
              paid and due payment & its due date details.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Product Payments
            </div>
            <div class="text-sm">
              Detailed information about Product payment of the club members .
              The report allows you to generate a list of all clients
              summarizing the product payment, based on accurate information
              about the payment of specific product with paid details.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Mode Wise Payment - Month
            </div>
            <div class="text-sm">
              Detailed information about any payment made month wise by the club
              members with contract. It allows you to generate a detailed report
              summarizing the month wise payment made with different payment
              method and total amount of payment month wise.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Mode Wise Payment - Day
            </div>
            <div class="text-sm">
              Detailed information about any payment made day wise by the club
              members with contract. It allows you to generate a detailed report
              summarizing the day wise payment made with different payment
              method and total amount of payment day wise in chosen period.
            </div>
          </div>

          <div class="px-4 mt-6 mb-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Memberships wise sale
            </div>
            <div class="text-sm">
              Detailed information about total sales amount from all the
              membership and total number of sales of each membership without
              personal trainings. The report allows you to generate a list of
              all membership summarizing the membership sales amount, based on
              accurate information about the total sales of specific membership.
            </div>
          </div>
        </div>

        <div
          className={`px-4 border rounded-md bg-white mt-[100px] ml-[50px] mr-[50px] lg:ml-[-335px] lg:w-[900px] ${
            currentTable === "table3" ? "" : "hidden"
          }`}
        >
          <div className="flex items-center px-1 py-2 mt-2 ">
            <FaCube className="mr-2 " />
            <span>CRM Reports</span>
          </div>

          <div class="px-4 mt-4 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Source Wise Enquiries
            </div>
            <div class="text-sm">
              Report contains information about total number of leads(enquiries)
              from different source. The report allows you to generate a list of
              total number of enquiries through each lead source like Hoarding,
              Newspaper Advertisement, Telecalling, Website Inquiry, Google,
              Facebook, Instagram, Whatsapp, By Friends.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Enquiry
            </div>
            <div class="text-sm">
              Report contains information about total number of leads(enquiries)
              from different source. Leads(enquiries) report contains
              information about leads and their contact data, enquiry date, deal
              stages and their status and next follow up.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Enquiry Enrollments
            </div>
            <div class="text-sm">
              Report contains information about total number of
              leads(enquiries), total number of enroll count across
              leads(enquiries) by particular consultant and percentage of
              enrollment converted from lead to member.
            </div>
          </div>

          <div class="px-4 mt-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Year Performence
            </div>
            <div class="text-sm">
              Detailed information about total sales across leads(enquiries),
              total number of membership and PT sales year wise. The report
              allows you to generate a year wise list of all membership and PT
              sales , total enquiries and solde membership .
            </div>
          </div>

          <div class="px-4 mt-6 mb-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Daily Transaction
            </div>
            <div class="text-sm">
              Detailed information about total sales across leads(enquiries),
              total number of membership and PT sales year wise. The report
              allows you to generate a year wise list of all memberships and PT
              sales , total enquiries and solde membership .
            </div>
          </div>
        </div>

        <div
          className={`px-4 border rounded-md bg-white mt-[100px] ml-[50px] mr-[50px] lg:ml-[-335px] lg:w-[900px] ${
            currentTable === "table4" ? "" : "hidden"
          }`}
        >
          <div className="flex items-center px-1 py-2 mt-2 ">
            <FaCalendar className="mr-2 " />
            <span>Attendance Reports</span>
          </div>

          <div class="px-4 mt-4 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Timesheet Report
            </div>
            <div class="text-sm">
              Report contains information about total number of leads(enquiries)
              from different source. The report allows you to generate a list of
              total number of enquiries through each lead source like Hoarding,
              Newspaper Advertisement, Telecalling, Website Inquiry, Google,
              Facebook, Instagram, Whatsapp, By Friends.
            </div>
          </div>

          <div class="px-4 mt-6 mb-6 border-l-4 border-bor">
            <div class="text-md font-semibold hover:cursor-pointer hover:text-bor">
              Daily Report
            </div>
            <div class="text-sm">
              Report contains information about employee's monthly salary
              details. Employee's basic salary, total earnings, total deduction
              and net pay by month. The report allows you to generate a list of
              all employees's monthly salary summarizing their monthly net pay &
              deduction.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
