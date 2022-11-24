import './App.css';
import UserPage from "./Pages/UserPage";
import CategoryPage from "./Pages/CategoryPAge/CategoryPage";
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import CardsPage from './Pages/CardsPage/CardsPage';
// import SideBarStyle from './Pages/SideBarStyle/SideBarStyle';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
        <Routes>
        {/* <Route element={<SideBarStyle />}> */}
          <Route path="/" element={<LoginPage />} />
              {/* <Route element={<SideBar />} */}
              <Route path='/user'  element={<UserPage/>} />
              <Route path='/category'  element={<CategoryPage/>} />
              <Route path='/card'  element={<CardsPage/>} />
              {/* <Route path='/question'  element={<QuestionPage/>} /> */}
        {/* </Route> */}
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}


export default App;