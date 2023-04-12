import { ChatAstro } from '../../ui/Chat/ChatAstro';
import { Foot } from '../../ui/Foot/Foot';
import { Link } from 'react-router-dom';
import { Menu } from '../../ui/Menu/Menu';
import { MenuChilds } from '../../ui/MenuChilds/MenuChilds';
import './WhereFly.css';

export const WhereFly = () => {
  return (
    <>
        <Menu />
        <MenuChilds />

        <div>
            <div className='wherefly'>
                <h1>Where We Fly</h1>
                <p>
                    Lorem excepteur et reprehenderit nostrud magna elit quis laboris velit culpa aliqua anim non proident.
                    Officia ipsum esse adipisicing dolor nostrud ipsum dolor aute sunt enim ea reprehenderit occaecat.
                    Minim dolore anim labore nisi aliquip aliqua do reprehenderit non.
                    Aliquip magna adipisicing exercitation in Lorem aliqua dolor tempor ex nostrud ea ex.
                    Esse eiusmod sint labore nostrud irure officia dolor pariatur anim Lorem ea nisi voluptate.
                    Velit non sit do deserunt consequat nostrud.<br/><br/>

                    Duis consequat officia ad veniam dolor ad culpa ex.
                    Deserunt laborum do proident <Link>Air Inter Ex</Link> labore commodo officia elit in.
                    Sint enim reprehenderit tempor excepteur sunt adipisicing.
                    Quis ea mollit labore aliqua laboris dolore nostrud nisi ea esse cupidatat est esse dolore.
                    Ut consectetur irure pariatur magna.<br/><br/>

                    Minim dolore anim labore nisi aliquip aliqua do reprehenderit non.
                    Aliquip magna adipisicing exercitation in Lorem aliqua dolor tempor ex nostrud ea ex.
                    Esse eiusmod sint labore nostrud irure officia dolor pa<br/><br/>
                    Fly from the following Solar System cities:
                    <p>
                        <Link>A</Link> 
                        <Link>B</Link> 
                        <Link>C</Link> 
                        <Link>D</Link> 
                        <Link>E</Link> 
                        <Link>F</Link> 
                        <Link>H</Link> 
                        <Link>L</Link>
                    </p> 
                </p>

                <div>
                    <ul><h2>A</h2>
                        <li>Aegis (AEG)</li>
                        <li>Amsfet (AMS)</li>
                    </ul>
                </div>

                <div>
                    <ul><h2>B</h2>
                        <li>Begis (BEG)</li>
                        <li>Bmsfet (BMS)</li>
                    </ul>
                </div>

                <div>
                    <ul><h2>C</h2>
                        <li>Cegis (CEG)</li>
                        <li>Cmsfet (CMS)</li>
                    </ul>
                </div>

                <div>
                    <ul><h2>D</h2>
                        <li>Degis (DEG)</li>
                        <li>Dmsfet (DMS)</li>
                    </ul>
                </div>

                <div>
                    <ul><h2>E</h2>
                        <li>Eegis (EEG)</li>
                        <li>Emsfet (EMS)</li>
                    </ul>
                </div>

                <div>
                    <ul><h2>F</h2>
                        <li>Fegis (FEG)</li>
                        <li>Fmsfet (FMS)</li>
                    </ul>
                </div>

                <div>
                    <ul><h2>H</h2>
                        <li>Hegis (HEG)</li>
                        <li>Hmsfet (HMS)</li>
                    </ul>
                </div>

                <div>
                    <ul><h2>L</h2>
                        <li>Legis (LEG)</li>
                        <li>Lmsfet (LMS)</li>
                    </ul>
                </div>
            
            </div>
        
        </div>


        <Foot />
        <ChatAstro />
    </>
  )
}
