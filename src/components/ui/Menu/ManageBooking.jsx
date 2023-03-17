import { Link } from 'react-router-dom';
import './ManageBooking.css';

export const ManageBooking = ( { hidepopup, manabooref } ) => {
  return (
    <div ref={ manabooref } className='managebooking'>
        <div className='managebooking-block' onClick={ () => hidepopup() }></div>
        
        <div className='managebooking-content'>
            <div className='managebooking-content-x'><i className="fa fa-times" aria-hidden="true" onClick={ () => { hidepopup() } }></i></div>
            <h1>Manage Booking</h1>
            <p>Change or cancel a booking, enhance your inflight experience, select a seat, or check your ticket details.</p>
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
  )
}
