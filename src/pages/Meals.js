import Footer from '../components/Footer';
import MealOptions from '../components/MealOptions';
import Nav from '../components/Nav';

function Meals() {
  return (
    <div>
        <Nav/>
        <div className='meals-bar'>
          <h1>A healthy workout requires a healthy meal</h1>
          <h2>Take your fitness to the next level by customizing your workouts with our great collection of meals.</h2>
          <h3>Stay healthy, stay fit.</h3>
        </div>
        <MealOptions/>
        <Footer/>
    </div>
  )
}

export default Meals