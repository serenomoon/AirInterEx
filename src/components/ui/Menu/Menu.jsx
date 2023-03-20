import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Firstmenu } from './Firstmenu';
import { ManageBooking } from './ManageBooking';
import { Menubar } from './Menubar';
import { Searchbar } from './Searchbar';
import { Secondmenu } from './Secondmenu';
import AirLogoWhite from '../../../assets/logo-viaje-w.png';
import { CheckIn } from './CheckIn';
import './Menu.css';

export const Menu = () => {
  
  const manabooref = useRef(null);
  const checkinref = useRef(null);

  const showPopup = (e) => {
    e.target.id === 'manabook' ? manabooref.current.style.display = "block" : '',
    e.target.id === 'checkin' ? checkinref.current.style.display = "block" : ''
  }

  const hidePopup = () => {
    manabooref.current.style.display = "none";
    checkinref.current.style.display = "none";
  }

  return (
    <div className='menu'> 
         
        <Menubar 
          showPopup = { showPopup }
        />

        <Link to='/' className='logo'>
            <div className='airspan'>AIR INTER EX</div>
            <img className='airlogo' src={ AirLogoWhite } />
        </Link>

        <Firstmenu />

        <Searchbar />

        <Secondmenu 
          showPopup = { showPopup }
        />

        <ManageBooking 
          manabooref = { manabooref }
          hidepopup = { hidePopup }
        />
        
        <CheckIn 
          checkinref = { checkinref }
          hidepopup = { hidePopup }
        />

        <nav className='secondmenu-signin'>
          <Link to='signin'>Sign In</Link>
        </nav>

      </div>
  )
}
