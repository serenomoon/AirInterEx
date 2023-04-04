import { Link } from 'react-router-dom';
import { ChatAstro } from '../../ui/Chat/ChatAstro';
import { Foot } from '../../ui/Foot/Foot';
import { Menu } from '../../ui/Menu/Menu';
import { MenuChilds } from '../../ui/MenuChilds/MenuChilds';
import './TripIdeas.css';

export const TripIdeas = () => {
  return (
    <>
        <Menu />
        <MenuChilds />
        <div>
            <div className='tripideas-title'>
                <h1>Trip Ideas</h1>
                <h5>Make your planning to Earth holidays easy.</h5>
            </div>
                
                <div className='tripideas-explore-all'>
                    <div className='tripideas-explore'>
                        <div className='tripideas-explore-u'>
                        <img src='https://loveincorporated.blob.core.windows.net/contentimages/gallery/6a985aaa-8a95-4382-97a9-91cdf96f43d3-Moraine_Lake_Dennis_Frates_Alamy_Stock_Photo.jpg'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>7-day winter guide to Earth</Link>
                        </div>

                        <div className='tripideas-explore-u'>
                        <img src='https://bullwinkles.com/content/uploads/2023/01/Bullwinkles108_small.jpg'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>Take flight with this 10-day Earth itinerary</Link>
                        </div>

                        <div className='tripideas-explore-u'>
                        <img src='https://www.snexplores.org/wp-content/uploads/2019/11/860_main_Marscolony.gif'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>7-Day Mars Itinerary</Link>
                        </div>

                        <div className='tripideas-explore-u'>
                        <img src='https://i.pinimg.com/564x/14/57/c5/1457c59698ec5ff064ea9f4799dc1df5.jpg'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>7-Day Europa Highlights</Link>
                        </div>

                        <div className='tripideas-explore-u'>
                        <img src='https://www.beaumont.org/images/default-source/news/walking.jpg?sfvrsn=a75378ef_2'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>Earth Short Walks</Link>
                        </div>

                        <div className='tripideas-explore-u'>
                        <img src='https://www.recetasnatura.com.ar/sites/default/files/655_x_475-_web_naturaempanadas_de_roastbeef_desmenuzado.jpg'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>Favorite Earth Foods</Link>
                        </div>

                        <div className='tripideas-explore-u'>
                        <img src='https://ep1.pinkbike.org/p5pb10501840/p5pb10501840.jpg'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>Cycling Trails in Mars</Link>
                        </div>

                        <div className='tripideas-explore-u'>
                        <img src='https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>Nature Earth's Wildlife</Link>
                        </div>

                        <div className='tripideas-explore-u'>
                        <img src='https://solarsystem.nasa.gov/internal_resources/6024/europa.jpg'/>
                        <Link to='/plan/destination/destinyplace/placeinfo'>Stargazing in Europa</Link>
                        </div>
                    </div>

                    <p>Voluptate deserunt duis magna non aute esse.Quis deserunt eiusmod ut nulla minim amet id ullamco labore duis aliqua amet in ea.Do sint ea et eiusmod ullamco consectetur occaecat officia.Duis occaecat sunt magna irure tempor aute occaecat nostrud id proident officia incididunt culpa cillum.</p>
                </div>
        </div>

        <Foot />
        <ChatAstro />
    </>
  )
}
