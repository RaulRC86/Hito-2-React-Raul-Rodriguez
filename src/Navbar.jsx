import { Link } from 'react-router-dom';

const Navbar=() =>{
    return(
        <>
    <nav>
      <h4>Pizzería Mamma Mía!</h4>
      <Link to ="/"><button>🍕Home</button></Link>
      <Link to ="/login"><button>🔐Login</button></Link>
      <Link to ="/register"><button>🔐Register</button></Link>
    </nav>
        </>
    )
} 
export default Navbar
