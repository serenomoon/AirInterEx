import { Link } from "react-router-dom";

export const Secondmenu = () => {
  return (
    <nav className='secondmenu'>
        <Link to='#'>Manage Booking</Link>
        <Link to='#'>Check In</Link>
        <Link to='#'>Sign In</Link>
        <Link className='askelon' to='#'>Ask Elon for help</Link>
    </nav>
  )
}
