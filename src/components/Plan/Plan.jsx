import { Foot } from '../ui/Foot/Foot'
import { Menu } from '../ui/Menu/Menu'
import { PlanHelp } from './PlanHelp'
import { Link } from 'react-router-dom';
import { ChatAstro } from '../ui/Chat/ChatAstro';
import './Plan.css';

export const Plan = () => {
  return (
    <>
        <Menu />
        <div className='plan-title'>
            <h1>Plan</h1>
            <p>What you need befor your travel.</p>
        </div>

        <PlanHelp />

        <div className='plan-explore-all'>
            <h2>Explore the world with Air Inter Ex's diverse range of destinations.</h2>
            <div className='plan-explore'>
                <div className='plan-explore-u'>
                    <img src='https://www.savacations.com/wp-content/uploads/2019/08/Best-Places-to-Visit-in-Argentina-Buenos-Aires2.jpg'/>
                    <h4>Discover more of Argentina</h4>
                    <Link to='/plan/destination/destinyplace'>Explore</Link>
                </div>
                <div className='plan-explore-u'>
                    <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e9/64/6b/plaza-general-manuel.jpg?w=700&h=500&s=1'/>
                    <h4>Discover more of Burzaco</h4>
                    <Link to='/plan/destination/destinyplace'>Explore</Link>
                </div>
            </div>
        </div>

        <Foot />

        <ChatAstro />
    </>
  )
}
