import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

export const Secondmenu = ({ showPopup, openMenu}) => {

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const popUpMenu = (e) => {
    isMobile ? 
    showPopup(e) ||
    openMenu()
    : showPopup(e)
  }

  return (
      <ul className='secondmenu'>
        <li className='secondmenu-f' id='manabook' onClick={ (e) => { popUpMenu(e)  } }>Manage Booking</li>
        <li className='secondmenu-f' id='checkin' onClick={ (e) => { popUpMenu(e)  } }>Check In</li>
        <li><Link to='signin'>Sign In</Link></li>
        <li><Link className='askelon' to='#'>Ask Elon for help</Link></li>
      </ul>
  )
}
