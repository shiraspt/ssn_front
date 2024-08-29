import logo from './logo.svg';
import './App.css';
import './style.css';
import Employee_login from './components/employee_login/employee_login';
import Client_login from './components/client_login/client_login';
import Client_reg from './components/client_reg/client_reg';
import Employee_reg from './components/employee_reg/employee_reg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
    <body>
    <div class="topbar">
    <a href="client_login">Post job</a>
            <a href="employee_login">Find Job</a>

        </div>
    <div class="main_body">
    <Routes>
          <Route path="/employee_login" element={<Employee_login/>}></Route>
          <Route path="/client_login" element={<Client_login/>}></Route> 
          <Route path="/client_reg" element={<Client_reg/>}></Route>
          <Route path="/employee_reg" element={<Employee_reg/>}></Route>
        
        </Routes>
        </div>
</body>
   
    

</BrowserRouter>
  );
}

export default App;
