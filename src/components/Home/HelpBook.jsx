import { Link } from 'react-router-dom';
import './Helpbook.css';

export const HelpBook = () => {
  return (
    <div>
        <div className='help-book'>

            <h1>We are Here to Help</h1>
            <div className='help'>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-change-booking-100x100.png'/>
                    <h3>International travel</h3>
                    <p>Voluptate exercitation anim proident est eiusmod consectetur tempor sit labore labore eiusmod pariatur tempor.</p>
                    <Link to='#'>Find out more</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-new-zealand-travel-full-800x800.png'/>
                    <h3>Travel Alerts</h3>
                    <p>Voluptate exercitation anim proident est eiusmod consectetur tempor sit labore labore eiusmod pariatur tempor.</p>
                    <Link to='#'>Find out more</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-passport-100x100.png'/>
                    <h3>Covid 35 hub</h3>
                    <p>Voluptate exercitation anim proident est eiusmod consectetur tempor sit labore labore eiusmod pariatur tempor.</p>
                    <Link to='#'>Find out more</Link>
                </div>
            </div>

            <h1>Post Booking</h1>
            <div className='book'>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-house-home-100x100.png'/>
                    <h3>Accommodation</h3>
                    <p>Voluptate exercitation anim proident est eiusmod consectetur tempor sit labore labore eiusmod pariatur tempor.</p>
                    <Link to='#'>Book accommodation</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-car-100x100.png'/>
                    <h3>Rental cars</h3>
                    <p>Voluptate exercitation anim proident est eiusmod consectetur tempor sit labore labore eiusmod pariatur tempor.</p>
                    <Link to='#'>Book a rental car</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-bike-100x100.png'/>
                    <h3>Activities</h3>
                    <p>Voluptate exercitation anim proident est eiusmod consectetur tempor sit labore labore eiusmod pariatur tempor.</p>
                    <Link to='#'>Book an activity</Link>
                </div>
                <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-plane-around-globe-100x100.png'/>
                    <h3>Earn United MileagePlus® Points</h3>
                    <p>Voluptate exercitation anim proident est eiusmod consectetur tempor sit labore labore eiusmod pariatur tempor.</p>
                    <Link to='#'>Lear more</Link>
                </div>
            </div>

        </div>
        <div className='signature'>Made by Saulo Fernandez</div>
    </div>
  )
}
