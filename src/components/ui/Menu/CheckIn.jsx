import { Link } from 'react-router-dom';
import './CheckIn.css';

export const CheckIn = ( { hidepopup, checkinref } ) => {
  return (
    <div ref={ checkinref } className='managebooking'>
        <div style={{position:'relative'}}>
            <div className='managebooking-block' onClick={ () => hidepopup() }></div>
            
            <div className='managebooking-content'>
                <div className='managebooking-content-x'><i className="fa fa-times" aria-hidden="true" onClick={ () => { hidepopup() } }></i></div>
                <h1>Check In</h1>
                <p>Check in online from 24 hours before your flight.</p>
                <div className='managebooking-inputs'>
                    <div className='managebooking-inputs-u'>
                        <div className='managebooking-inputs-p'>
                            <p>Booking Reference</p><i className="fa fa-question-circle-o" aria-hidden="true"></i>
                        </div>
                        <input placeholder='e.g. BN9HJJ'/>
                    </div>

                    <div className='managebooking-inputs-u'>
                        <div className='managebooking-inputs-p'>
                            <p>Family name</p>
                        </div>
                        <input />
                    </div>
                </div>
                <button>Continue</button>
                <div className='managebooking-foot'>
                    <p>Please note: some bookings cannot be retrieved online. <Link to='/'>More information</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}
