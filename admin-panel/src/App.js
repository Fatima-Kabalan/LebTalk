import './App.css';
import PanelPage from "./Pages/PanelPage";
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import SideBar from './Components/SideBar';
import user from './Pages/UserPage';
import UserPage from './Pages/UserPage';


function App() {
  return (
    <div className="App">
    <>
    <BrowserRouter>
      <PanelPage/> 
          <Routes>
              <Route path='/user'  element={<UserPage/>} />
          </Routes>
    </BrowserRouter>
    </>
    </div>
  );
}

export default App;
