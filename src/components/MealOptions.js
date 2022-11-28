import GainWeight from './GainWeight';
import LoseWeight from './LoseWeight';
import BuildMuscle from './BuildMuscle';
import { useState } from 'react';

function MealOptions() {
  const [selectedOption, selectOption] = useState(0);
  return (
    <div>
      <div className='meals-target'>
        <h1>What is your target?</h1>
        <div className='meals-btn'>
          <button className='meal-btn' onClick={() => {
            selectOption(1);
          }}>Lose Weight</button>
          <button className='meal-btn' onClick={() => {
            selectOption(2);
          }}>Gain Weight</button>
          <button className='meal-btn' onClick={() => {
            selectOption(3);
          }}>Build Muscle</button>
        </div>
      </div>
      {selectedOption === 0 &&
        <h1 className='choice'>Please pick a choice</h1>
      }
      {selectedOption === 1 &&
        <GainWeight />
      }
      {selectedOption === 2 &&
        <LoseWeight />
      }
      {selectedOption === 3 &&
        <BuildMuscle />
      }
    </div>
  )
}

export default MealOptions