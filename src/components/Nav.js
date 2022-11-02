import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <div className='logo'>
          <img src='./images/logo.png' style={{height:"80%", paddingRight:"3%"}} alt='logo'/>
          <h2 style={{ color:"white"}}>Fitness Hub</h2>
        </div>
        <div className='nav-div'>
          <Link to='/exercises' className='navlinks'>Exercises</Link>
          <Link to='/plan' className='navlinks'>Plan</Link>
          <Link to='/meals' className='navlinks'>Meals</Link>
          <Link to='/timer' className='navlinks'>Timer</Link>
        </div>
    </div>
  )
}

export default Nav