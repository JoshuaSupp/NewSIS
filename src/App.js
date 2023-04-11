
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Admin from './Pages/Admin/Admin'
import KXRegistry from './Pages/KXRegistry/KXRegistry';
import ANRegistry from './Pages/ANRegistry/ANRegistry';
import PDRegistry from './Pages/PDRegistry/PDRegistry';
import CreateAdmin from './Pages/CreateAdmin/CreateAdmin';
import StudentReports from './Pages/StudentReports/StudentReports';
import KXAccounts from './Pages/KXAccounts/KXAccounts';
import CreateKX from './Pages/CreateKX/CreateKX';
import CreateAN from './Pages/CreateAN/CreateAN';
import CreatePD from './Pages/CreatePD/CreatePD';
import CreateKXLogin from './Pages/CreateKXLogin/CreateKXLogin';
import CreateANLogin from './Pages/CreateANLogin/CreateANLogin';
import CreatePDLogin from './Pages/CreatePDLogin/CreatePDLogin';
import ANAccounts from './Pages/ANAccounts/ANAccounts';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PDAccounts from './Pages/PDAccounts/PDAccounts';
import Navbar from './Components/Navbar/Navbar';
import Clans from './Pages/Clans/Clans'
import ANStudentG from './Pages/ANStudentG/ANStudentG';
import PDStudentG from './Pages/PDStudentG/PDStudentG';
import KXStudentG from './Pages/KXStudentG/KXStudentG';
import UpdateANStudentG from './Pages/ANStudentG/UpdateANStudentG';
import UpdateKXStudentG from './Pages/KXStudentG/UpdateKXStudentG';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' exact to element={<Login/>} />
    <Route path='/Sidebar' exact to element={<Sidebar/>} />
    <Route path='/Dashboard' exact to element={<Dashboard/>} />
    <Route path='/Admin' exact to element={<Admin/>} />
    <Route path='/KXRegistry' exact to element={<KXRegistry/>} />
    <Route path='/ANRegistry' exact to element={<ANRegistry/>} />
    <Route path='/PDRegistry' exact to element={<PDRegistry/>} />
    <Route path='/CreateAdmin' exact to element={<CreateAdmin/>} />
    <Route path='/StudentReports' exact to element={<StudentReports/>} />
    <Route path='/KXAccounts' exact to element={<KXAccounts/>} />
    <Route path='/ANAccounts' exact to element={<ANAccounts/>} />
    <Route path='/PDAccounts' exact to element={<PDAccounts/>} />
    <Route path='/CreateKX' exact to element={<CreateKX/>} />
    <Route path='/CreateAN' exact to element={<CreateAN/>} />
    <Route path='/CreatePD' exact to element={<CreatePD/>} />
    <Route path='/CreateKXLogin' exact to  element={<CreateKXLogin/>} />
    <Route path='/CreateANLogin' exact to element={<CreateANLogin/>} />
    <Route path='/CreatePDLogin' exact to element={<CreatePDLogin/>} />
    <Route path='/Navbar' exact to element={<Navbar/>} />
    <Route path='/Clans' exact to element={<Clans/>} />
    <Route path='/ANStudentG' exact to element={<ANStudentG/>}/>
    <Route path='/KXStudentG' exact to element={<KXStudentG/>} />
    <Route path='/PDStudentG' exact to element={<PDStudentG/>} />
    <Route path='/updatean/:id' exact to element={<UpdateANStudentG/>} />
    <Route path='/updatekx/:id' exact to element={<UpdateKXStudentG/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
