import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='./images/logo.png' style={{height:"80%", paddingRight:"3%"}} alt='logo'/>
            <h2 style={{ color:"white"}}>Fitness Hub</h2>
        </div>
        <div className='navlinks-div'>
            <Link to='/' className='navbarlinks'>Home</Link>
            <Link to='/login' className='navbarlinks'>Login</Link>
            <Link to='/signup' className='navbarlinks'>Signup</Link>  
        </div>    
    </div>
  )
}

export default Navbar