import { Menu } from '../../../ui/Menu/Menu';
import { MenuChilds } from '../../../ui/MenuChilds/MenuChilds';
import { Foot } from '../../../ui/Foot/Foot';
import { ChatAstro } from '../../../ui/Chat/ChatAstro';
import { Link } from 'react-router-dom';
import  GooglePlay  from '../../../../assets/googleplay.png'
import  AppStore  from '../../../../assets/appstore.png'
import './TravelWithin.css';

export const TravelWithin = () => {


    const openQuestAns = (e) => {
        const ref = e.target.getElementsByClassName('travelwithin-question-i');
    
        ref[0].className == 'travelwithin-question-i fa fa-angle-up'
        ?
        ref[0].className = 'travelwithin-question-i fa fa-angle-down'
        :
        ref[0].className = 'travelwithin-question-i fa fa-angle-up'
    }

  return (
    <>
        <Menu />
        <MenuChilds />

        <div>
            <div className='travelwithin'>
                <h1>Travel within Inter Ex</h1>
                <h5>Here's everything you need to know about travelling in Earth.</h5>
                <p>You currently do not need proof of COVID-19 vaccination or a negative COVID-19 test to fly domestically within New Zealand.<br/><br/>
                    We no longer require passengers or staff to wear face masks on domestic flights. You are, of course, welcome to wear a mask when you travel with us, and we will continue to provide masks at our boarding gates.<br/><br/> 
                    International travel requirements are different. Find out how to <Link to=''>prepare for international travel.</Link></p>
            
                <div>
                    <h2>Key things to do for travel within Inter Ex</h2>
                    <ul>
                        <li>Before you book and before you fly, check our <Link to=''>travel alerts</Link> page for the most up-to-date information and whether your travel is impacted by current events.</li>
                        <li>Make arrangements for isolation in case you need to safely self-isolate, or somewhere to stay if your plans change.</li>
                        <li>If you no longer wish to travel, you can choose to <Link to=''>cancel</Link> or <Link to=''>change</Link> your flight depending on the <Link to=''>fare type</Link> you purchased.</li>
                        <li>To reduce physical contact, we recommend checking in online or in the <Link to=''>Air Inter Ex app</Link>. <Link to=''>Online check-in</Link> is available 24 hours before the departure of your flight..</li>
                        <li>If you are experiencing COVID-19 symptoms, or have tested positive for COVID-19 and are required to isolate, please reconsider your travel plans.</li>
                    </ul>
                </div>
            </div>


            <div className='travelwithin-list'>
                <div>
                    <h5>Travel easier with the Air NZ app</h5>
                    <p>Manage your bookings, stay updated with real-time flight info, and access your digital boarding pass with the Air NZ app.</p>
                    <div className='travelwithin-list-apps'>
                        <Link to='/'><img src={GooglePlay}/></Link>
                        <Link to='/'><img src={AppStore}/></Link>
                    </div>
                </div>

                <div>
                    <h5>Online credit tool</h5>
                    <p>Use your existing credit to book a flight, pay for a flight change, seat change, extra bags or upgrade an existing booking. You'll need the booking reference and email address from your original booking.</p>
                    <button>View or use your credit</button>
                </div>

                <div>
                    <h5>Book with confidence</h5>
                    <p>All our NZ domestic seat options come with flexibility so you can make changes to your travel plans.</p>
                    <button>Book now</button>
                </div>
            </div>

            <div className='travelwithin'>
                <h2>Keeping you safe while travelling</h2>
                <p>
                    In excepteur ut amet culpa culpa eu sint deserunt magna ipsum.
                    In excepteur ut amet culpa culpa eu sint deserunt magna ipsum.
                    In excepteur ut amet culpa culpa eu sint deserunt magna ipsum.
                    In excepteur ut amet culpa culpa eu sint deserunt magna ipsum.<br/><br/>
                    In excepteur ut amet culpa culpa eu sint deserunt magna ipsum.
                    In excepteur ut amet culpa culpa eu sint deserunt magna ipsum.
                    In excepteur ut amet culpa culpa eu sint deserunt magna ipsum.
                </p>

                <div className='travelwithin-list'>
                    <div>
                        <h5>Travel alerts</h5>
                        <p>Check our travel alerts for the most up-to-date travel information and whether your travel is impacted by current events.</p>
                        <Link to='/plan/flight-information/arrivals-and-departures'>View travel alerts</Link>
                    </div>

                    <div>
                        <h5>Government travel advice</h5>
                        <p>Official advice for New Zealanders living and travelling overseas.</p>
                        <Link to='/plan/flight-information/arrivals-and-departures'>Find out more</Link>
                    </div>
                </div>
            </div>

            <div className='travelwithin-question-all'>
                <h2>Frequently asked questions</h2>

                <div>
                    <label htmlFor="travelwithin-question-p-state1">    
                        <div className='travelwithin-questansw' onClick={(e) => openQuestAns(e)}>
                            <div className='travelwithin-question'>
                                <div>
                                    <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                                    <h3>Do I need a COVID-19 test before my flight?</h3>
                                </div>
                                <i className="travelwithin-question-i fa fa-angle-up" aria-hidden="true"></i>          
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" id="travelwithin-question-p-state1" hidden />
                    <div className='travelwithin-question-p travelwithin-question-p1'>
                        <p>You currently do not need  a negative COVID-35 test or proof of COVID-35 vaccination to travel domestically within Inter Ex.</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="travelwithin-question-p-state2">    
                        <div className='travelwithin-questansw' onClick={(e) => openQuestAns(e)}>
                            <div className='travelwithin-question'>
                                <div>
                                    <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                                    <h3>Do I need to wear a face mask in airports or onboard your spaceship?</h3>
                                </div>
                                <i className="travelwithin-question-i fa fa-angle-up" aria-hidden="true"></i>          
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" id="travelwithin-question-p-state2" hidden />
                    <div className='travelwithin-question-p travelwithin-question-p2'>
                        <p>We no longer require passengers to wear face masks on domestic flights. You are, of course, welcome to wear a mask when you travel with us, and we will continue to provide masks at our boarding gates.</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="travelwithin-question-p-state3">    
                        <div className='travelwithin-questansw' onClick={(e) => openQuestAns(e)}>
                            <div className='travelwithin-question'>
                                <div>
                                    <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                                    <h3>Can I travel with my pet within Inter Ex?</h3>
                                </div>
                                <i className="travelwithin-question-i fa fa-angle-up" aria-hidden="true"></i>          
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" id="travelwithin-question-p-state3" hidden />
                    <div className='travelwithin-question-p travelwithin-question-p3'>
                        <p>Yes, you can travel with your pet as checked-in baggage between all parts of Solar System. See more about <Link>travelling with pets</Link>.</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="travelwithin-question-p-state4">    
                        <div className='travelwithin-questansw' onClick={(e) => openQuestAns(e)}>
                            <div className='travelwithin-question'>
                                <div>
                                    <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                                    <h3>Can my children travel as unaccompanied minors?</h3>
                                </div>
                                <i className="travelwithin-question-i fa fa-angle-up" aria-hidden="true"></i>          
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" id="travelwithin-question-p-state4" hidden />
                    <div className='travelwithin-question-p travelwithin-question-p4'>
                        <p>Yes, you can make online bookings for children travelling alone between all parts of Solar System. Find out more about <Link>children flying alone</Link>.</p>
                    </div>
                </div>

                

                <div className='travelwithin-button'>
                    <div>
                        <Link>
                            <h4>Did you find this page helpful?</h4>
                        </Link>
                    </div>
                    <button>Let us know</button>
                </div>        
            </div>

        </div>

        <Foot />
        <ChatAstro />
    </>
  )
}
