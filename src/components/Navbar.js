import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            Logo
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