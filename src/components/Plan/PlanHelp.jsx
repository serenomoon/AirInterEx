import { Link } from 'react-router-dom';
import './PlanHelp.css';

export const PlanHelp = () => {
  return (
    <div>
        <div className='plan-help-book'>

            <div className='plan-help'>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-plane-taking-off-100x100.png'/>
                    <h3>Flight information</h3>
                    <p>Check the status of our flight arrivals, departures, schedules, and more.</p>
                    <Link to='#'>See more</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-bag-100x100.png'/>
                    <h3>Baggage</h3>
                    <p>Check your baggage and dimensions, add an extra bag, review restricted items, bring your pets, send cargo and more.</p>
                    <Link to='#'>See more</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-passport-100x100.png'/>
                    <h3>Preparing for travel</h3>
                    <p>Information about vaccinations, government travel advice, travel insurance and more.</p>
                    <Link to='#'>See more</Link>
                </div>

                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-plane-around-globe-100x100.png'/>
                    <h3>Search flights</h3>
                    <p>Search for flights to New Zealand, Australia, the Pacific, Asia and North America.</p>
                    <Link to='#'>See more</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-crew-welcome-100x100.png'/>
                    <h3>Special assistance</h3>
                    <p>Information for people travelling with disabilities, medical conditions, special requirements, while pregnant and with children.</p>
                    <Link to='#'>See more</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-mobile-app-100x100.png'/>
                    <h3>Air Inter Ex App</h3>
                    <p>Manage your bookings, stay updated with real-time flight info, and access your digital boarding pass with the Air NZ app.</p>
                    <Link to='#'>Download</Link>
                </div>
            </div>

        </div>
    </div>
  )
}
