import AirLogoWhite from '../../assets/logo-viaje-w.png';
import { Link } from 'react-router-dom';
import './SignIn.css';

export const SignIn = () => {
  return (
    <div className='signin'>

        <div className='signin-left'>
            <Link to='/' className='signin-logo'>
                <div className='signin-airspan'>AIR INTER EX</div>
                <img className='signin-airlogo' src={ AirLogoWhite } />
            </Link>

            <div className='signin-content'>
                <h1>Sign In</h1>
                <div className='signin-inputs'>
                    <div className='signin-inputs-u'>
                        <div className='signin-inputs-p'>
                            <p>Airpoints™ number / username / email</p>
                        </div>
                        <input className='signin-inputs-in'/>
                    </div>

                    <div className='signin-inputs-u'>
                        <div className='signin-inputs-p'>
                            <p>Password</p>
                        </div>
                        <input className='signin-inputs-in'/>
                    </div>

                    
                    <div className='signin-check'>
                        <label className="signin-check-container">Stay signed in <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                            <input type="checkbox" />
                            <span className="signin-check-checkmark"></span>
                        </label>
                    </div>

                </div>
                <button>Sign In</button>

                <div className='signin-foot'>
                    <p>Forgot your <Link to='/'>username</Link> or <Link to='/'>password?</Link></p>
                </div>

                <div className='signin-join'>
                    <p>Not an Airpoints member?</p>
                    <button>Join Airpoints</button>
                </div>

                <div className='signin-footmark'>A GALAXY ALLIANCE MEMBER <i class="fa fa-superpowers" aria-hidden="true"></i></div>
            </div>
        
        </div>

        <div className='signin-right'>
        </div>
        
    </div>
    )
}
