import DietPlanFilter from './DietPlan/DietPlanFIlter';
import DietPlanTable from './DietPlan/DietPlanTable';
import DietSession from './DietSession/DietSession';
import DietSessionsFinal from './DietSession/DIetSessionsFinal';
import ExerciseFilter from './ExercisePlan/ExerciseFilter';
import ExercisePlane from './ExercisePlan/ExercisePlan';
import ExpenseFilter from './Expense/ExpenseFilter';
import ExpenseTable from './Expense/ExpenseTable';
import AddEmployeeForm from './Form/AddEmployeeForm';
import BOTS from './Form/BOTS';
import CreateDietPlan from './Form/CreateDietPlan';
import CreateProgramPlan from './Form/CreateProgramPlan';
import FormAddShortcuts from './Form/FormAddShortcuts';
import InquiryForm from './Form/InquiryForm';
import PersonalTraining from './Form/PersonalTraining';
import PhotoTrackingRecipte from './Form/PhotoTrackingRecipte';
import InventoryFIlter from './Inventory/InventoryFIlter';
import InventoryTable from './Inventory/InventoryTable';
import Inventory_Icon from './Inventory/Inventory_Icon';
import MemberShipTable from './MemberShip/MemberShipTable';
import PhotoTracking from './PhotoTracking/PhotoTracking';
import ProgramList from './ProgramManagement/ProgramList';
import ProgramManagement from './ProgramManagement/ProgramManagement';
import Reports from './Reports/Reports';
import Shifts from './Shifts/Shifts';
import FilterSleep from './SleepSesion/FIlterSleep';
import SleepSesionIcon from './SleepSesion/SleepSesionIcon';
import Table from './SleepSesion/TableSleep';
import DropDown from './WaterIntake/DropDown';
import Graph from './WaterIntake/Graph';
import WaterSchedule from './WaterIntake/WaterSchedule';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseIcon from './Expense/ExpenseIcon';
import EventTable from './Event/EventTable';
import EventIcon from './Event/EventIcon';
import EventFilter from './Event/EventFilter';
import EmployeeFIlter from './Employee/EmployeeFIlter';
import EmployeeCard from './Employee/EmployeeCard';
import EmployeeIcon from './Employee/EmployeeIcon';
import EmployeeSection from './Employee/EmployeeSection';
import InventoryFilter from './Inventory/InventoryFIlter';
import TableSleep from './SleepSesion/TableSleep';
import Getmethod from './api2.js/Getmethod';
import Water from './exp/Water';
import Edit from './exp/Edit';
import Create from './exp/Create';

import Assessment from './Assessment/Assessment';
import Bodyassessment from './BodyAssessment/Bodyassessment';
import Class from './Class/Class';
import Clientcard from './Client/Clientcard';
import Clientfilter from './Client/Clientfilter';
import Clienticone from './Client/Clienticone';
import Clientsection from './Client/Clientsection';
import Dealicone from './Crm-Deals/Dealicone';
import Dealtable from './Crm-Deals/Dealtable';
import Upcomming from './Dashboard/Upcomming';
import Lasttable from './Dashboard/Lasttable';
import Cardcenter from './Dashboard/Cardcenter';
import Card1 from './Dashboard/Card1';
import Card2 from './Dashboard/Card2';
import Dealfilters from './Crm-Deals/Dealfilter';
import Inquiries from './CRM-Inquiries/Inquiries';
import Inquiriesfilter from './CRM-Inquiries/Inquiriesfilter';
import InquiriesTable from './CRM-Inquiries/InquiriesTable';
import PosTable from './CRM-TotalPayment/PosTable';
import Posfilter from './CRM-TotalPayment/Posfilter';
import NavBar from './Dashboard/NavBar';
import Icone from './Dashboard/Icone';
import { Icon } from '@iconify/react';



function App() {
  return (


    <Shifts/>
/*<BrowserRouter>
    <Routes>
      <Route path='/' element={<Water/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
    </Routes>
</BrowserRouter>*/





  );
}

export default App;
