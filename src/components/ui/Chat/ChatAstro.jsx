import { Link } from 'react-router-dom';
import Astronaut from '../../../assets/astronaut.svg';
import './ChatAstro.css';

export const ChatAstro = () => {
  return (
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
  )
}
