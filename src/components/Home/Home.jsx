import { Link } from 'react-router-dom';
import Astronaut from '../../assets/astronaut.svg';
import { Menu } from '../ui/Menu/Menu';
import { Presentation } from './Presentation';
import { Boxes } from './Boxes';
import { HelpBook } from './HelpBook';
import { Foot } from '../ui/Foot/Foot';
import { Signup } from './Signup';
import './Home.css';

export const Home = () => {
  

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