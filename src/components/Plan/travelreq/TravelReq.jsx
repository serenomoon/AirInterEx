import { Menu } from '../../ui/Menu/Menu';
import { MenuChilds } from '../../ui/MenuChilds/MenuChilds';
import { Foot } from '../../ui/Foot/Foot';
import { ChatAstro } from '../../ui/Chat/ChatAstro';
import { Link } from 'react-router-dom';
import './TravelReq.css';

export const TravelReq = () => {
  return (
    <>
        <Menu />
        <MenuChilds />

        <div>
            <div className='travelreq'>
                <h1>Travel requirements</h1>
                <h5>Travel may look a little different these days, so we've compiled all the information on travel restrictions and health requirements to help make your travel planning easier.</h5>
                <p>Please note the information about visa, entry, testing and quarantine requirements may change between when you book and when you fly, so it's important to check back regularly.</p>
            </div>

            <div className='travelreq-img'>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-international-entry-1200x800__FocusFillMaxWyIwLjAwIiwiMC4wMCIsNjEzLDQwOV0.png' />
                    <h5>Travelling internationally</h5>
                    <p>Find the updated travel and health requirements for international travel including vaccination and testing. You may have additional steps to take before you leave and before you return.</p>
                    <Link to=''>Find out more</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-new-zealand-entry-1200x800__FocusFillMaxWyIwLjAwIiwiMC4wMCIsNjEzLDQwOV0.png' />
                    <h5>Travelling within New Zealand</h5>
                    <p>Find the latest requirements for travel within New Zealand.</p>
                    <Link to=''>Find out more</Link>
                </div>
            </div>

            <div className='travelreq-list'>
                <div>
                    <h5>Travel alerts</h5>
                    <p>Check our travel alerts for the most up-to-date travel information and whether your travel is impacted by current events.</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>View travel alerts</Link>
                </div>

                <div>
                    <h5>Passport details</h5>
                    <p>Securely add your passport information to your booking before your travel date to assist contact tracing measures.</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>Add passport details</Link>
                </div>

                <div>
                    <h5>Government travel advice</h5>
                    <p>Official advice for New Zealanders living and travelling overseas.</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>Find out more</Link>
                </div>

                <div>
                    <h5>Travel insurance</h5>
                    <p>We strongly recommend travel insurance for the entire time you plan to be overseas. Add peace of mind to your next journey.</p>
                    <Link to='/plan/flight-information/arrivals-and-departures'>Get a quote</Link>
                </div>
            </div>

            <div className='travelreq'>
                <div className='travelreq-button'>
                    <div>
                        <Link>
                        <h4>Did you find this page helpful?</h4>
                        </Link>
                    </div>
                    <button>Let us know</button>
                </div> 
            </div>

        </div>

        <Foot />
        <ChatAstro />
    </>
  )
}
