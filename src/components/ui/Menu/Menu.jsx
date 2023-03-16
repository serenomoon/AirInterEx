import { Link } from 'react-router-dom';
import AirLogoWhite from '../../../assets/logo-viaje-w.png';
import { Firstmenu } from './Firstmenu';
import './Menu.css';
import { Menubar } from './Menubar';
import { Searchbar } from './Searchbar';
import { Secondmenu } from './Secondmenu';

export const Menu = () => {
  return (
    <div className='menu'> 
         
        <Menubar />

        <Link to='/' className='logo'>
            <div className='airspan'>AIR INTER EX</div>
            <img className='airlogo' src={ AirLogoWhite } />
        </Link>

        <Firstmenu />

        <Searchbar />

        <Secondmenu />
        
        <nav className='secondmenu-signin'>
          <Link to='#'>Sign In</Link>
        </nav>

      </div>
  )
}
