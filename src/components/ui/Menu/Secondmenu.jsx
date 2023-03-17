import { Link } from "react-router-dom";

export const Secondmenu = ({ showPopup, openMenu}) => {

  

  return (
      <ul className='secondmenu'>
        <li className='secondmenu-f' onClick={ () => { showPopup(); openMenu() } }>Manage Booking</li>
        
        <li>Check In</li>
        <li><Link to='#'>Sign In</Link></li>
        <li><Link className='askelon' to='#'>Ask Elon for help</Link></li>
      </ul>
  )
}
