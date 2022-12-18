import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { Menu } from '@chakra-ui/react';
import { MenuDrawer } from './components/MenuDrawer/MenuDrawer';
import Homepage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import { Route,Routes,NavLink } from "react-router-dom";
import SingleProjectPage from "../pages/SingleUserPage/SingleProjectPage";


function App() {
  return (
    <div className="App">

     <Homepage />
     <Routes>
       <Route path="/signup" element={<Sign />}></Route>
        <Route path="/login" element={<Login />}></Route>
    <Route path={"/Projects/:project_id"} element={<SingleProjectPage/>} />
    <Route path={"*"} element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
