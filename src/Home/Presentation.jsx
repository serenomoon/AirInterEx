import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { datepicker } from '../js/datepicker';
import './Presentation.css';

export const Presentation = () => {
    


    useEffect(() => {
        datepicker();
        console.log("a")
      }, [])
    
      

    return (
        <div className='presentation'>
            <h1 className='presentation-title'>Discover the Wonders of Solar System</h1>

            <div className='promos'>

                <div className='promo-circle'>
                    <Link to='#'>
                        <h4>Earth to Mars</h4>
                        <div className='promo-price'>
                            <div>from</div>
                            <div>$</div>
                            <div><span>1,239*</span></div>
                        </div>
                        <div className='roundtrip'>Round-trip in Economy</div>
                        <div>See More</div>
                    </Link>
                </div>

                <div className='promo-circle'>
                    <Link to='#'>
                        <h4>Earth to Mars</h4>
                        <div className='promo-price'>
                            <div>from</div>
                            <div>$</div>
                            <div><span>1,239*</span></div>
                        </div>
                        <div className='roundtrip'>Round-trip in Economy</div>
                        <div>See More</div>
                    </Link>
                </div>

                <div className='promo-circle'>
                    <Link to='#'>
                        <h4>Earth to Mars</h4>
                        <div className='promo-price'>
                            <div>from</div>
                            <div>$</div>
                            <div><span>1,239*</span></div>
                        </div>
                        <div className='roundtrip'>Round-trip in Economy</div>
                        <div>See More</div>
                    </Link>
                </div>

                <div className='promo-circle'>
                    <Link to='#'>
                        <h4>Earth to Mars</h4>
                        <div className='promo-price'>
                            <div>from</div>
                            <div>$</div>
                            <div><span>1,239*</span></div>
                        </div>
                        <div className='roundtrip'>Round-trip in Economy</div>
                        <div>See More</div>
                    </Link>
                </div>

            </div>

            <div className='fastbuy'>

                <ul>
                    <li><Link to='#' style={{color:'rgb(219, 88, 36)'}}>Book your trip</Link></li>
                    <li><Link to='#'>Manage Booking</Link></li>
                    <li><Link to='#'>Check-in</Link></li>
                </ul>
                <div className='separator'></div>
                <ul>
                    <li><Link to='#' style={{color:'rgb(219, 88, 36)'}}><i className="fa-solid fa-plane"></i> Book a flight</Link></li>
                    <li><Link to='#'><i className="fa-solid fa-bed"></i> Book a hotel</Link></li>
                    <li><Link to='#'><i className="fa-solid fa-car"></i> Book a rental car</Link></li>
                </ul>

                <div className='fromto'>
                    <div>
                        <div style={{fontWeight:'bold'}}>From</div>
                        <input placeholder='From'></input>
                    </div>
                    <div>
                        <div style={{fontWeight:'bold'}}>To</div>
                        <input placeholder='Airport or City'></input>
                    </div>
                    <button>Continue</button>
                </div>
                
                <div className='fastbuy-expand'>
                    <div>
                        <ul className='fastbuy-radio'>
                            <li><input type="radio"/>Return Trip</li>
                            <li><input type="radio"/>One-way trip</li>
                            <li>Book a multistop trop <i className="fa-solid fa-circle-info"></i></li>
                        </ul>
                    </div>

                    <div className='travel-dates'>
                        <div style={{fontWeight:'bold'}}>Travel dates</div>
                        <div className="containerForm">
                            <input type="text" size="10" id='date1' className='date1'/>
                            <input type="text" size="10" id='date2' className='date2'/>
                        </div>
                        <div className="datepicker ll-skin-melon"></div>
                    </div>

                    <div className='passengers'>
                        <div>
                            <div className='passengers-title' style={{fontWeight:'bold'}}>
                                <div>Adults</div>
                                <div></div>
                            </div>
                            <div className='passengers-select'>
                                <button><i class="fa fa-minus" aria-hidden="true"></i></button>
                                <div className='passengers-number'>1</div>     
                                <button><i class="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div>
                            <div className='passengers-title'>
                                <div style={{fontWeight:'bold'}}>Children</div>
                                <div style={{fontWeight:'100', color:'grey'}}>2-11 years old</div>
                            </div>
                            <div className='passengers-select'>
                                <button><i class="fa fa-minus" aria-hidden="true"></i></button>
                                <div className='passengers-number'>0</div>  
                                <button><i class="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div>
                            <div className='passengers-title' style={{fontWeight:'bold'}}>Infants<div style={{fontWeight:'100', color:'grey'}}>0-23 months old</div></div>
                            <div className='passengers-select'>
                                <button><i class="fa fa-minus" aria-hidden="true"></i></button>
                                <div className='passengers-number'>0</div>    
                                <button><i class="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='childalone-check'><input type='checkbox'/><p>Book a child travelling alone</p></div>
                    
                    <div className='service-promo'>
                        <div>
                            <div style={{fontWeight:'bold'}}>Service class</div>
                            <select id="cars" name="cars">
                                <option value="1">Eonomy - lowest</option>
                                <option value="2">Premium Economy</option>
                                <option value="3">Business Class</option>
                            </select>
                        </div>
                        <div>
                            <div className='service-promo-title' style={{fontWeight:'bold'}}>Promo code<div style={{color:'greay', fontWeight:'100'}}> optional</div></div>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
