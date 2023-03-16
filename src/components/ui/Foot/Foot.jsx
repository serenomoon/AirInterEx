import { Link } from 'react-router-dom';
import AirLogoWhite from '../../../assets/logo-viaje-w.png';;
import './Foot.css';

export const Foot = () => {
  return (
    <div className='foot'>
        <div className='foot-list'>
            <ul>
                <li><Link to='#'>Help & support</Link></li>
                <li><Link to='#'>United States USD</Link></li>
                <li><Link to='#'>Change region</Link></li>
            </ul>
            <ul>
                <li><Link to='#'>About Air Inter Ex</Link></li>
                <li><Link to='#'>Operating fleet</Link></li>
                <li><Link to='#'>Company profile</Link></li>
                <li><Link to='#'>Sustainability</Link></li>
                <li><Link to='#'>Modern Slavery statement</Link></li>
            </ul>
            <ul>
                <li><Link to='#'>Investor centre</Link></li>
            </ul>
            <ul>
                <li><Link to='#'>Careers</Link></li>
                <li><Link to='#'>Media releases</Link></li>
                <li><Link to='#'>Cargo</Link></li>
                <li><Link to='#'>Engineering & maintenance</Link></li>
                <li><Link to='#'>Legal Terms and Conditions</Link></li>
                <li><Link to='#'>Privacy centre</Link></li>
                <li><Link to='#'>Cyber security hub</Link></li>
            </ul>
            <ul>
                <li><img src={AirLogoWhite}/></li>
            </ul>
        </div>

        <div className='foot-info'>
            <div className='foot-media'>
                <Link to='#'><i className="fa fa-facebook-square" aria-hidden="true"></i></Link>
                <Link to='#'><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                <Link to='#'><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
                <Link to='#'><i className="fa fa-youtube-play" aria-hidden="true"></i></Link>
            </div>
            <p>A GALAXY ALLIANCE MEMBER</p>
            <p>Copyright © 2023 Air Inter Ex Limited</p>
        </div>
    </div>
  )
}
