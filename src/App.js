import { Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Exercises from './pages/Exercises';
import Plan from './pages/Plan';
import Meals from './pages/Meals';
import Timer from './pages/Timer';
import ExerciseDetail from './pages/ExerciseDetail';
import { AuthProvider } from './contexts/AuthContext';
import LoseWeight from './components/LoseWeight';
import GainWeight from './components/GainWeight';
import BuildMuscle from './components/BuildMuscle';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/exercises' element={<Exercises/>} />
        <Route path='/plan' element={<Plan/>} />
        <Route path='/meals' element={<Meals/>} />
        <Route path='/timer' element={<Timer/>} />
        <Route path='/exercise/:id' element={<ExerciseDetail/>} />
        <Route path='LoseWeight' element={<LoseWeight/>} />
        <Route path='GainWeight' element={<GainWeight/>} />
        <Route path='BuildMuscle' element={<BuildMuscle/>} />
      </Routes>   
    </AuthProvider>
  );
}

export default App;
