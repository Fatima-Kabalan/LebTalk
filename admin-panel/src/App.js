import './App.css';
import UserPage from "./Pages/UserPage/UserPage";
import CategoryPage from "./Pages/CategoryPAge/CategoryPage";
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import CardsPage from './Pages/CardsPage/CardsPage';
import InstructorPage from '../src/Pages/InstructorPage/InstructorPage';
import QuestionPage from '../src/Pages/QuestionPage/QuestionPage'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
              <Route path='/user'  element={<UserPage/>} />
              <Route path='/category'  element={<CategoryPage/>} />
              <Route path='/card'  element={<CardsPage/>} />
              <Route path='/instructor'  element={<InstructorPage/>} />
              <Route path='/question'  element={<QuestionPage/>} />
        {/* </Route> */}
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}


export default App;