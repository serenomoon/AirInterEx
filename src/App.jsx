import { Link } from 'react-router-dom';
import Astronaut from './assets/astronaut.svg';
import { Menu } from './Home/Menu';
import { Presentation } from './Home/Presentation';
import './App.css';
import { Boxes } from './Home/Boxes';
import { HelpBook } from './Home/HelpBook';
import { Foot } from './Home/Foot';

export const App = () => {
  

  return (
    <div className="container">

      <Menu />

      <Presentation />

      <Boxes />

      <div className='signup'>
        <div className='signup-hr'></div>
        <div className='signup-in'>
          <div>
            <img src='https://pbs.twimg.com/media/EVgCGmHXsAA02tn.jpg:large'/>
          </div>
          <div className='signup-text'>
            <h3>Sign up to Special Offers</h3>
            <p>Subscribe to our email and never miss a deal</p>
          </div>
          <button>Sign Up</button>
        </div>
        <div className='signup-hr'></div>
      </div>

      <HelpBook />

      <Foot />

      <div className='astronaut'>
        <Link to='#'>
          <img src={ Astronaut } />
          <div className="talk-bubble tri-right left-in">
            <div className="talktext">
              <p>Need some help?</p>
            </div>
          </div>
        </Link>
      </div>  

    </div>
  )
}
