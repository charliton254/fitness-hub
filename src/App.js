import { Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Exercises from './pages/Exercises';
import Plan from './pages/Plan';
import Meals from './pages/Meals';
import Timer from './pages/Timer';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/exercises' element={<Exercises/>} />
        <Route path='/plan' element={<Plan/>} />
        <Route path='/meals' element={<Meals/>} />
        <Route path='/timer' element={<Timer/>} />
      </Routes>   
  );
}

export default App;
