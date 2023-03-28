import './Signup.css';

export const Signup = () => {
  return (
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
  )
}
