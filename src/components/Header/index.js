import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
       <header>
           <Link className='logo' to="/">  
           <img className='png' src='logo.png' 
            alt='Logo' width='8%'/> React Movies</Link>
           <Link className='favoritos' to="/favoritos">Meus Filmes</Link>      
       </header>
    )
}

export default Header;