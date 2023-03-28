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
            <h1>Argentina</h1>
            <h5>Argentina has naturally stunning landscapes, friendly locals and heaps to do - all within short travelling distances.</h5>
        </div>
         
       
          <div className='destinyplace-explore-all'>
            <div className='destinyplace-explore'>

              <div className='destinyplace-explore-u'>
                <img src='https://www.smata.com.ar/turismo/wp-content/uploads/sites/2/2019/03/Buenos-Aires-destacada-1170x658.jpg'/>
                <h4>Capital Federal</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Capital Federal</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://www.welcomeargentina.com/provincia-cordoba/imagenes/provincia-cordoba.jpg'/>
                <h4>Cordoba</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Cordoba</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/TALMLR.jpg/1200px-TALMLR.jpg'/>
                <h4>La Rioja</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore La Rioja</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://hablemosdeargentina.com/wp-content/uploads/2018/03/SC0.jpg'/>
                <h4>Santa Cruz</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Santa Cruz</Link>
              </div>
              
              <div className='destinyplace-explore-u'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/06/Puelo_Lake.jpg'/>
                <h4>Lago Puelo</h4>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Lago Puelo</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://viajerosocultos.com/wp-content/uploads/2023/01/iguazu-falls-misiones-jungle-argentina.jpg'/>
                <h4>Misiones</h4>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Misiones</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cerro_de_los_siete_colores.JPG/800px-Cerro_de_los_siete_colores.JPG '/>
                <h4>Jujuy</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Jujuy</Link>
              </div>
              <div className='destinyplace-explore-u'>
                <img src='https://www.argentina.gob.ar/sites/default/files/portezuelo-turismo-ccabrera.jpg'/>
                <h4>Catamarca</h4>
                <p>City, bars, and beautiful scenery - it's all here.</p>
                <Link to='/plan/destination/destinyplace/placeinfo'>Explore Catamarca</Link>
              </div>

            </div>
          </div>

        <Foot />

        <ChatAstro />
    </>
  )
}
