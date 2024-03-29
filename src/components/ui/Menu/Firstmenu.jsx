import { Link } from 'react-router-dom';

export const Firstmenu = () => {
  return (
    <ul className='firstmenu'>
          <li className='firstli'>
            <Link to='/plan'>Plan</Link>
            <ul className="dropdown">
              <div className='droprelative'>
                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='/plan/destination'>Destination</Link></li>
                    <li><Link to='/plan/destination/destinyplace'>Earth</Link></li>
                    <li><Link to='/plan/destination/destinyplace'>Mars</Link></li>
                    <li><Link to='/plan/destination/destinyplace'>Europa</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='/plan/trip-ideas'>Trip ideas</Link></li>
                    <li><Link to='/plan/destination/destinyplace/placeinfo'>7-day winter guide to Earth</Link></li>
                    <li><Link to='/plan/destination/destinyplace/placeinfo'>7-Day Mars Itinerary</Link></li>
                    <li><Link to='/plan/destination/destinyplace/placeinfo'>7-Day Europa Highlights</Link></li>
                    <li><Link to='/plan/destination/destinyplace/placeinfo'>Nature Earth's Wildlife</Link></li>
                    <li><Link to='/plan/destination/destinyplace/placeinfo'>Stargazing in Europa</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='/plan/baggage'>Baggage</Link></li>
                    <li><Link to='/plan/baggage'>Carry-on bags</Link></li>
                    <li><Link to='/plan/baggage'>Checked-in baggage</Link></li>
                    <li><Link to='/plan/baggage'>Excess baggage</Link></li>
                    <li><Link to='/plan/baggage'>Add extra bags</Link></li>
                    <li><Link to='/plan/baggage'>Baggage help</Link></li>
                    <li><Link to='/plan/baggage'>Baggage Services</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='/plan/flight-information'>Flight Information</Link></li>
                    <li><Link to='/plan/flight-information/arrivals-and-departures'>Arrivals and departures</Link></li>
                    <li><Link to='/plan/flight-information/arrivals-and-departures'>Arrivals and Departures Information</Link></li>
                    <li><Link to='/plan/flight-information/arrivals-and-departures'>Flight Timetables</Link></li>
                    <li><Link to='/plan/flight-information/arrivals-and-departures'>Airport maps & connections</Link></li>
                    <li><Link to='/plan/flight-information/arrivals-and-departures'>Travel alerts</Link></li>
                    <li><Link to='/plan/flight-information/arrivals-and-departures'>Customer Service & Tarmac Delay Plan</Link></li>
                    <li><Link to='/plan/flight-information/arrivals-and-departures'>Special assistance</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='/plan/travel-requirements'>Travel requirements</Link></li>
                    <li><Link to='/plan/travel-requirements/travel-within-inter-ex'>Travel within Inter Ex</Link></li>
                    <li><Link to='/plan/travel-requirements/travel-within-inter-ex'>International travel requirements</Link></li>
                    <li><Link to='/plan/travel-requirements/travel-within-inter-ex'>Pre-departure testing</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='/plan/where-we-fly'>Where We Fly</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Corporate Travel</Link></li>
                    <li><Link to='#'>Large Companies</Link></li>
                    <li><Link to='#'>Small-Medium Companies</Link></li>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li className='firstli'>
             <Link to='#'>Book</Link>
             <ul className="dropdown">
              <div className='droprelative'>
                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>New Zeland Flights</Link></li>
                    <li><Link to='#' style={{ fontWeight: 'bold' }}>Australia Flights</Link></li>
                    <li><Link to='#' style={{ fontWeight: 'bold' }}>New York to New Zeland</Link></li>
                    <li><Link to='#' style={{ fontWeight: 'bold' }}>Chicago to New Zeland</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Hotels</Link></li>
                    <li><Link to='#' style={{ fontWeight: 'bold' }}>Travel Insurance</Link></li>
                    <li><Link to='#' style={{ fontWeight: 'bold' }}>Rental cars</Link></li>
                    <li><Link to='#'>Rental cars deals</Link></li>
                    <li><Link to='#'>Campervans</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Booking options</Link></li>
                    <li><Link to='#'>Online booking</Link></li>
                    <li><Link to='#'>Manage bookings</Link></li>
                    <li><Link to='#'>Fare Hold</Link></li>
                    <li><Link to='#'>Twin Seat</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Travel Extras</Link></li>
                    <li><Link to='#'>Seatselect</Link></li>
                    <li><Link to='#'>Upgrade to Skycouch</Link></li>
                    <li><Link to='#'>Upgrade with OneUp™</Link></li>
                    <li><Link to='#'>Taxi transfers in New Zeland</Link></li>
                    <li><Link to='#'>Multistop bookings</Link></li>
                    <li><Link to='#'>Group travel from North America</Link></li>
                    <li><Link to='#'>Refund Seat Select or Extra Bags</Link></li>
                    <li><Link to='#'>Economy Skycouch™</Link></li>
                  </div>
                </div>

              </div>
            </ul>
          </li>

          <li className='firstli'>
            <Link to='#'>Experience</Link>
            <ul className="dropdown">
              <div className='droprelative'>
                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>At the airport</Link></li>
                    <li><Link to='#'>International check-in</Link></li>
                    <li><Link to='#'>Air New Zeland Lounges</Link></li>
                    <li><Link to='#'>New Zealand domestic check-in</Link></li>
                    <li><Link to='#'>Online and mobile check-in</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Onboard your flight</Link></li>
                    <li><Link to='#'>Inflight entertainment</Link></li>
                    <li><Link to='#'>Long haul</Link></li>
                    <li><Link to='#'>Inflight wellbeing</Link></li>
                    <li><Link to='#'>Domestic</Link></li>
                    <li><Link to='#'>Tasman</Link></li>
                    <li><Link to='#'>Cuisine and wine</Link></li>
                    <li><Link to='#'>Islands</Link></li>
                    <li><Link to='#'>Safety videos</Link></li>
                    <li><Link to='#'>Inflight Wi-Fi</Link></li>
                    <li><Link to='#'>Upgrades</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Seat maps</Link></li>
                    <li><Link to='#'>Boeing 777-300ER</Link></li>
                    <li><Link to='#'>Boeing 787-9</Link></li>
                    <li><Link to='#'>Boeing 787-9 V2</Link></li>
                    <li><Link to='#'>Airbus A321neo(International)</Link></li>
                    <li><Link to='#'>Airbus A321neo(NZ Domestic)</Link></li>
                    <li><Link to='#'>Airbus A320neo</Link></li>
                    <li><Link to='#'>Airbus A320(International)</Link></li>
                    <li><Link to='#'>Airbus A320(NZ Domestic)</Link></li>
                    <li><Link to='#'>ATR72</Link></li>
                    <li><Link to='#'>de Havilland Q300</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>United Airlines alliance</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Digital experience</Link></li>
                    <li><Link to='#'>The Air NZ app</Link></li>
                    <li><Link to='#'>Airband™</Link></li>
                    <li><Link to='#'>Oscar</Link></li>
                    <li><Link to='#'>Kia Ora magazine</Link></li>
                  </div>
                </div>

              </div>
            </ul>
          </li>

          <li className='firstli'>
            <Link to='#'>Airpoints™</Link>
            <ul className="dropdown">
              <div className='droprelative'>
                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>About Airpoints™</Link></li>
                    <li><Link to='#'>Claim missing Airpoints™</Link></li>
                    <li><Link to='#'>Co-operation partners</Link></li>
                    <li><Link to='#'>Star Alliance</Link></li>
                    <li><Link to='#'>Airpoints™ Terms & Conditions</Link></li>
                    <li><Link to='#'>Digital Airpoints™ cards</Link></li>
                    <li><Link to='#'>Airpoints™ for Schools</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Earning Airpoints Dollars™</Link></li>
                    <li><Link to='#'>Earning on flights</Link></li>
                    <li><Link to='#'>Travel partners</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Spending Airpoints Dollars™</Link></li>
                    <li><Link to='#'>Flight rewards</Link></li>
                    <li><Link to='#'>Loyalty upgrades</Link></li>
                    <li><Link to='#'>Gifting flights</Link></li>
                    <li><Link to='#'>Companion tickets</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Status Points and frequent flyer tiers</Link></li>
                    <li><Link to='#'>Frequent flyer tier benefits</Link></li>
                    <li><Link to='#'>Silver</Link></li>
                    <li><Link to='#'>Gold</Link></li>
                    <li><Link to='#'>Elite</Link></li>
                    <li><Link to='#'>Elite Partner</Link></li>
                    <li><Link to='#'>Frequent Flyer Status Assistance</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>Koru</Link></li>
                    <li><Link to='#'>Koru terms & conditions</Link></li>
                    <li><Link to='#'>Koru benefits</Link></li>
                    <li><Link to='#'>Koru Corporate</Link></li>
                    <li><Link to='#'>Koru Programme Membership 6 Month Status Extension</Link></li>
                  </div>
                </div>

              </div>
            </ul>
          </li>

          <li className='firstli'>
            <Link to='#'>Help</Link>
            <ul className="dropdown">
              <div className='droprelative'>
                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                    <li><Link to='#'>COVID-35 Hub</Link></li>
                    <li><Link to='#'>Latest travel alerts</Link></li>
                    <li><Link to='#'>Resources</Link></li>
                    <li><Link to='#'>Credit & refund info</Link></li>
                    <li><Link to='#'>Use or view a credit</Link></li>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                  </div>
                </div>

                <div className='dropdown-back'>
                  <div className='dropdown-child'>
                  </div>
                </div>

              </div>
            </ul>
          </li>
        </ul>
  )
}
