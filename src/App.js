import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { Menu } from '@chakra-ui/react';
import { MenuDrawer } from './components/MenuDrawer/MenuDrawer';
import Homepage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

     <Homepage />
     <Routes>
       <Route path="/signup" element={<Sign />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
