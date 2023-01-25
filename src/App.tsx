import {Routes,Route} from "react-router-dom"
import { CommitteesPage } from './pages/Committees/CommitteesPage';
import { DepNumbersPage } from './pages/depNumbers/DepNumbersPage';
import { DocCirculationPage } from './pages/DocCirculation/DocCirculationPage';
import { HomePage } from './pages/HomePage';
import { MeetingsSchedulePage } from './pages/MeetingsSchedule/MeetingsSchedulePage';
import { MPNumbersPage } from "./pages/MPnumbers/MPNumbersPage";
import { TimeTablePage } from './pages/timeTable/TimeTablePage';
import  Login  from './pages/login/Login'
import  Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className='App'>
     <Routes>
        <Route path="/" element={<HomePage/>} />                
        <Route path='/DocCirculation' element={<DocCirculationPage/>} />
        <Route path='/TimeTable' element={<TimeTablePage/>} />
        <Route path='/Committees' element={<CommitteesPage/>} />
        <Route path='/MeetingsSchedule' element={<MeetingsSchedulePage/>} />
        <Route path='/MPNumbers' element={<MPNumbersPage/>} />
        <Route path='/DepNumbers' element={<DepNumbersPage/>} /> 
        <Route path='/login' element={<Login/>} />  
        <Route path ='/Admin' element={<Admin/>}/>
     </Routes>
    </div>
  );
}

export default App;
