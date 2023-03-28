import { Link } from 'react-router-dom';
import { Foot } from '../../ui/Foot/Foot';
import { Menu } from '../../ui/Menu/Menu';
import { MenuChilds } from '../../ui/MenuChilds/MenuChilds';
import { ChatAstro } from '../../ui/Chat/ChatAstro';
import './Destination.css';

export const Destination = () => {
  return (
    <>
        <Menu />
        <MenuChilds />
        <div className='destination-back'></div>

        <div className='destination-title'>
            <h1>Destination</h1>
            <h5>Explore the Solar system with Air inter Ex's diverse range of destinations.</h5>
            <p>Air Inter Ex operate flights to Europa Chaos Transition, the Crisscrossing Bands, Mars NASA Base, Columbia Hills, Earth Argentina and the UK. You can also connect to a huge range of destinations of the Solar system through our network of partner spacelines.</p>
        </div>
         
       
          <div className='destination-explore-all'>
            <div className='destination-explore'>
              <div className='destination-explore-u'>
                <img src='https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA23872.jpg'/>
                <h4>Crisscrossing Bands</h4>
                <Link to='/plan/destination/destinyplace'>Explore Crisscrossing Bands</Link>
              </div>

              <div className='destination-explore-u'>
                <img src='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/111280main_image_feature_291_ys_full.jpg'/>
                <h4>Columbia Hills</h4>
                <Link to='/plan/destination/destinyplace'>Explore Columbia Hills</Link>
              </div>

              <div className='destination-explore-u'>
                <img src='https://www.planetware.com/photos-large/ARG/argentina-top-attractions-iguazu-falls.jpg'/>
                <h4>Argentina</h4>
                <Link to='/plan/destination/destinyplace'>Explore Argentina</Link>
              </div>
            </div>
          </div>

        <Foot />

        <ChatAstro />
    </>
  )
}
