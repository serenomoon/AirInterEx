import { Link } from 'react-router-dom';
import Astronaut from './assets/astronaut.svg';
import { Menu } from './Menu/Menu';
import { Presentation } from './Home/Presentation';
import './App.css';
import { Boxes } from './Home/Boxes';
import { HelpBook } from './Home/HelpBook';
import { Foot } from './Home/Foot';
import { Signup } from './Home/Signup';

export const App = () => {
  

  return (
    <div className="container">

      <Menu />

      <Presentation />

      <Boxes />

      <Signup />

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
