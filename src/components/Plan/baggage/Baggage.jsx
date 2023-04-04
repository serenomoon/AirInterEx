import { Link } from 'react-router-dom';
import { ChatAstro } from '../../ui/Chat/ChatAstro'
import { Foot } from '../../ui/Foot/Foot'
import { Menu } from '../../ui/Menu/Menu'
import { MenuChilds } from '../../ui/MenuChilds/MenuChilds'
import './Baggage.css'; 

export const Baggage = () => {
  return (
    <>
        <Menu />
        <MenuChilds />

        <div>
            <div className='bagagge'>
                <h1>Baggage</h1>
                <h5>Travelling light, or with a little extra? Everything you need to know about baggage is outlined below.</h5>
                <p>How much you can bring, and what to do if you need more? Get the answers to all your baggage questions, including how many you're allowed, what not to pack, oversized baggage and other important queries below.</p>
            
              <div className='baggage-button'>
                <div>
                  <Link>
                    <h5>Add an extra bag</h5>
                    <p>Prepaid Extra Bags are the way to go to avoid higher fees at the airport. Find your booking to add an extra bag now.</p>
                  </Link>
                </div>
                <button>Add now</button>
              </div>         
            </div>

            <div className='baggage-img'>
              <div>
                <img src='https://cdn.shopify.com/s/files/1/0141/2779/2186/files/MicrosoftTeams-image_6_600X600.jpg?v=1648135501'/>
                <h5>Carry-on baggage</h5>
                <p>Find the size, weight and number of carry-on bags that you can bring on board.</p>
                <Link to=''>Find out more</Link>
              </div>

              <div>
                <img src='https://www.airnorth.com.au/wp-content/uploads/2020/08/Checked-Baggage-2.jpg'/>
                <h5>Checked-in-baggage</h5>
                <p>Find the number, weight and size of checked-in bags and easy ways to add more.</p>
                <Link to=''>Find out more</Link>
              </div>
            </div>

            <div className='bagagge'>
              <div className='bagagge-list-all'>
                
                <div className='bagagge-list'>
                  <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-two-bags-100x100__ScaleMaxWidthWzkwXQ.png'/>
                  </div>

                  <div>
                    <h5>Excess baggage</h5>
                    <p>
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                    </p>
                    <p><Link>Fasum proident ipsum est irure eiusmod</Link> duis ipsum fugiat dolore nostrud ad.</p>
                  </div>
                </div>

                <div className='bagagge-list'>
                  <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-bike-100x100__ScaleMaxWidthWzkwXQ.png'/>
                  </div>

                  <div>
                    <h5>Overweight and oversized items</h5>
                    <p>
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                    </p>
                    <p><Link>Fasum proident ipsum est irure eiusmod</Link> duis ipsum fugiat dolore nostrud ad.</p>
                  </div>
                </div>

                <div className='bagagge-list'>
                  <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-restricted-100x100__ScaleMaxWidthWzkwXQ.png'/>
                  </div>

                  <div>
                    <h5>Prohibited items</h5>
                    <p>
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                      uis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                    </p>
                    <ul>
                      <li><Link>Prohibited checked-in baggage items</Link></li>
                      <li><Link>Prohibited items</Link></li>
                    </ul>
                  </div>
                </div>

                <div className='bagagge-list'>
                  <div>
                    <img src='https://p-airnz.com/cms/assets/Common-Assets/Icons/air-new-zealand-icon-kids-100x100__ScaleMaxWidthWzkwXQ.png'/>
                  </div>

                  <div>
                    <h5>Children's baggage allowance </h5>
                    <p>
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat officia sunt Lorem.
                      Pariatur duis ad amet Lorem minim quis magna eiusmod eu anim consequat. <Link>Find out more.</Link>.
                    </p>
                  </div>
                </div>

              </div> 
            </div>
        
        </div>


        <Foot />
        <ChatAstro />
    </>
  )
}
