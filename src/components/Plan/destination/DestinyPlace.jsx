import { Link } from "react-router-dom"
import { ChatAstro } from "../../ui/Chat/ChatAstro"
import { Foot } from "../../ui/Foot/Foot"
import { Menu } from "../../ui/Menu/Menu"
import { MenuChilds } from "../../ui/MenuChilds/MenuChilds"
import './DestinyPlace.css';

export const DestinyPlace = () => {
  return (
    <>
        <Menu />
        <MenuChilds />
        
        <div className='destinyplace-title'>
            <h1>Earth</h1>
            <h5>Earth has naturally stunning landscapes, friendly locals and heaps to do - all within short travelling distances.</h5>
        </div>
         
       
          <div className='destinyplace-explore-all'>
            <div className='destinyplace-explore'>

              <div className='destinyplace-explore-u'>
                <img src='https://www.smata.com.ar/turismo/wp-content/uploads/sites/2/2019/03/Buenos-Aires-destacada-1170x658.jpg'/>
                <h4>Argentina</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Argentina</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://www.amerique-centrale.campusfrance.org/sites/pays/files/amerique-centrale/styles/desktop_visuel_principal_page/public/paris.jpg?itok=rBLaa85D'/>
                <h4>France</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore France</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://humanidades.com/wp-content/uploads/2018/09/italia-venecia-e1579918757767.jpg'/>
                <h4>Italy</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Italy</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://sofitel.accor.com/destinations/imagerie/new-zealand-1400x788-ee91_1400x788.jpg'/>
                <h4>New Zealand</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore New Zealand</Link>
              </div>
              
              <div className='destinyplace-explore-u'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/06/Puelo_Lake.jpg'/>
                <h4>Lago Puelo</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Lago Puelo</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/10/Cape-Town-Coast-line_redit_GettyImages-1151735355.jpg?resize=1536,614'/>
                <h4>South Africa</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore South Africa</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://www.japonalternativo.com/wp-content/uploads/2020/02/preparativos-antes-de-viajar-a-Jap%C3%B3n.jpg'/>
                <h4>Japan</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Japan</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://www.travelandleisure.com/thmb/3oPWFmA6fi9sjAyWzigwaUKD8P8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg'/>
                <h4>United States</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore United States</Link>
              </div>

            </div>
          </div>

        <Foot />

        <ChatAstro />
    </>
  )
}
