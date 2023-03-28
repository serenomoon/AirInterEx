import { Link } from 'react-router-dom';
import { Signup } from '../../../Home/Signup';
import { ChatAstro } from '../../../ui/Chat/ChatAstro';
import { Foot } from '../../../ui/Foot/Foot';
import { Menu } from '../../../ui/Menu/Menu';
import { MenuChilds } from '../../../ui/MenuChilds/MenuChilds';
import './PlaceInfo.css';

export const PlaceInfo = () => {
  return (
    <>
        <Menu />
        <MenuChilds />

        <div className='placeinfo-back'>
            <div>
                Lago Puelo
            </div>
        </div>

        <div className='placeinfo'>

            
            <div className='placeinfo-title'>
                <h1>Destination</h1>
                <h5>Explore the Solar system with Air inter Ex's diverse range of destinations.</h5> 
            </div>

            <Signup />

            <div className='placeinfo-info'>
                <p>
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    <br/>
                    <br/>
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                </p>
                <div className='placeinfo-info-img'>
                    <img src='https://www.triptopatagonia.com/admin/uploads/galerias/13115927_236353420055418_3617324652134822326_o.jpg'/>
                    <span>The iconic Lake is just a short bus ride away</span>
                </div>
            </div>

            <div className='placeinfo-title'>
                <h3>Where to go and what to see in Lago Puelo</h3> 
            </div>
            <div className='placeinfo-info'>
                <p>
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in.
                </p>
            </div>

            <div className='placeinfo-color-letters placeinfo-info'>
                <p>
                    Stepping ashore on Lago Puelo is like landing on another planet and the hike to the summit is rewarded with spectacular 360° views.
                </p>
            </div>

            

            <div className='placeinfo-title'>
                <h3>Where to go and what to see in Lago Puelo</h3> 
            </div>
            <div className='placeinfo-info'>
                <p>
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in esse enim ullamco cillum magna nisi aliquip ad.
                    Sint ea deserunt ea mollit in.
                </p>
            </div>
        </div>
         
       
         

        <Foot />
        <ChatAstro />
    </>
  )
}
