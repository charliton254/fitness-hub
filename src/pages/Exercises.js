import React, {useState} from 'react'
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import ExerciseResults from '../components/ExerciseResults';
import Footer from '../components/Footer';

function Exercises() {
  const [exercises, setExercises] = useState([]);

  return (
    <div>
        <Nav/>
        <div className='exercise-body'>
        <Banner/>
        <SearchExercises setExercises={setExercises}/>
        <ExerciseResults setExercises={setExercises} exercises={exercises}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Exercises