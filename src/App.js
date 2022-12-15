import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { Menu } from '@chakra-ui/react';
import { MenuDrawer } from './components/MenuDrawer/MenuDrawer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
     {/* <MenuDrawer /> */}
     <Homepage />
    </div>
  );
}

export default App;
