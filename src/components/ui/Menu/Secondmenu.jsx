import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ManageBooking } from "./ManageBooking";

export const Secondmenu = ({setMenuButton}) => {

  const manabooref = useRef(null);

  const showPopup = () => {
    manabooref.current.style.display = "block";
  }

  const hidePopup = () => {
    manabooref.current.style.display = "none";
  }

  return (
      <ul className='secondmenu'>
        <li className='secondmenu-f' onClick={ () => showPopup() }>Manage Booking</li>
        <ManageBooking 
          manabooref = { manabooref }
          hidepopup = { hidePopup }
        />
        <li>Check In</li>
        <li><Link to='#'>Sign In</Link></li>
        <li><Link className='askelon' to='#'>Ask Elon for help</Link></li>
      </ul>
  )
}
