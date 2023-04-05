import { Link } from "react-router-dom"
import { ChatAstro } from "../../ui/Chat/ChatAstro"
import { Foot } from "../../ui/Foot/Foot"
import { Menu } from "../../ui/Menu/Menu"
import { MenuChilds } from "../../ui/MenuChilds/MenuChilds"
import './FlightInfo.css';

export const FlightInfo = () => {
  return (
    <>
        <Menu />
        <MenuChilds />

        <div>
            <div className='flightinfo'>
                <h1>Flight information</h1>
                <h5>Whether you're planning your next trip or flying today, find links to up-to-date flight information here.</h5>
                <p>For updates on your flight, download the <Link to='/'>Air Inter Ex app</Link> or <Link to='/singin'>sign up to receive travel updates</Link> by text or email.</p>
            </div>

            <div className='flightinfo-list'>
                <div>
                    <h5>Arrivals & departures</h5>
                    <p>Check the latest arrival and departure times for up-to-date flight information.</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>View daily arrivals and departures</Link>
                </div>

                <div>
                    <h5>Travel alerts</h5>
                    <p>Travel alerts inform you of changes to your booked flights.</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>See active travel alerts</Link>
                </div>

                <div>
                    <h5>Flight schedules</h5>
                    <p>Search our flight schedules to see when we fly to your chosen destination.</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>See more flight schedules</Link>
                </div>

                <div>
                    <h5>Airport maps & connections</h5>
                    <p>Whether you're clearing customs or in transit for an international flight, signage throughout the airport will help guide you.</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>View downloadable maps & connection guides</Link>
                </div>

                <div>
                    <h5>Customer service & tarmac delay plan</h5>
                    <p>Air Inter Ex's guiding principle drives us to "be the customers' airline of choice when travelling to, from and within Earth."</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>See more of our customer service plan</Link>
                </div>
            </div>
        </div>

        <Foot />
        <ChatAstro />
    </>
  )
}
