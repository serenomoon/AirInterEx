import { Link } from "react-router-dom"
import { ChatAstro } from "../../../ui/Chat/ChatAstro"
import { Foot } from "../../../ui/Foot/Foot"
import { Menu } from "../../../ui/Menu/Menu"
import { MenuChilds } from "../../../ui/MenuChilds/MenuChilds"
import './ArriNDep.css';

export const ArriNDep = () => {
  return (
    <>
        <Menu />
        <MenuChilds />

        <div>
            <div className='arrindep'>
                <h1>Arrivals and departures</h1>
                <p>
                    If your travel plans have been affected by a cancelled flight you can re-book
                     by calling us on 1-800-262-1234. Please note that during a major disruption
                      affecting multiple flights there may be some delay answering your call. 
                      You can also check the status of your flight via the <Link to='#'>Air Inter Ex app</Link> or sign up to receive <Link to='/singin'>Travel Alerts</Link>.</p>
            </div>

            <div className='arrindep-check'>
                <h5>Flight Information</h5>
                <div className="arrindep-check-child">
                    <div>
                        <input id='arrival-into' type='radio'/>
                        <label for='arrival-into'>Arrivals into</label>
                    </div>
                    <div>
                        <input id='departures-from' type='radio'/>
                        <label for='departures-from'>Departures from</label>
                    </div>
                    
                    <div>
                        <select id="cars" name="cars">
                            <option value="1">Earth - Argentina</option>
                            <option value="2">Earth - France</option>
                            <option value="3">Mars - Pathfinder</option>
                            <option value="4">Mars - Eberswalde</option>
                            <option value="5">Europa - Chaos Transition</option>
                            <option value="6">Europa - Crisscrossing Bands</option>
                        </select>
                    </div>
                    
                    <div>
                        <input id='24-hour-time' type='checkbox'/>
                        <label for='24-hour-time'>24 Hour time</label>
                    </div>
                    
                    <div>
                        <button>Search</button>
                    </div>

                </div>
            </div>
        </div>

        <Foot />
        <ChatAstro />
    </>
  )
}
