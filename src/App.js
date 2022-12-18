import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { Menu } from '@chakra-ui/react';
import { MenuDrawer } from './components/MenuDrawer/MenuDrawer';
import Homepage from './pages/Homepage';
import { Route,Routes,NavLink } from "react-router-dom";
import Sign from "./components/Sign";
import Login from "./components/Login"
import SingleProjectPage from "./pages/SingleUserPage/SingleProjectPage";
import Pricingpage from './pages/Pricingpage';
import Dashpage from './pages/Dashpage';
import Homeafter from './pages/Homeafter';


function App() {
  return (
    <div className="App">


     <Routes>
     <Route path="/" element={<Homepage />}></Route>
       <Route path="/signup" element={<Sign />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/homepage" element={<Homeafter />}></Route>
        <Route path="/pricing" element={<Pricingpage />}></Route>
        <Route path="/dashboard" element={<Dashpage />}></Route>
    <Route path={"/Projects/:project_id"} element={<SingleProjectPage/>} />
    {/* <Route path={"*"} element={<div>404 Not Found</div>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
