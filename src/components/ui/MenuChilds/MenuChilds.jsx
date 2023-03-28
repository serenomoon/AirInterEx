import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MenuChilds.css';

export const MenuChilds = () => {

  useEffect(() => {
    window.onscroll = function() {myFunction()};

    const menuchilds = document.getElementById("menuchilds");
    const menuchildsextra = document.getElementById("menuchilds-extra");
    const sticky = menuchilds.offsetTop;
  
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        menuchildsextra.style.height = '52px'
        menuchilds.classList.add("menuchilds-sticky")
      } else {
        menuchildsextra.style.height = '0'
        menuchilds.classList.remove("menuchilds-sticky");
      }
    }
    console.log('first')
  })
  
  

  return (
    <>
      <div className='menuchilds-extra' id='menuchilds-extra'></div>
      <div className='menuchilds' id='menuchilds'>
          {/* hacer un if para cada menu */}
          <ul>
              <Link to='/plan'>Plan <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
              <Link to='/plan/destination'>Destination</Link>
              <Link to='/plan/trip-ideas'>Trip ideas</Link>
              <Link to='/plan/baggage'>Baggage</Link>
              <Link to='/plan/flight-information'>Flight Information</Link>
              <Link to='/plan/travel-requirements'>Travel Requirements</Link>
              <Link to='/plan/where-we-fly'>Where We Fly</Link>
              <Link to='/plan/corporate-fly'>Corporate Fly</Link>
          </ul>
      </div>
    </>
  )
}
