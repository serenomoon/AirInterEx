import { Link } from 'react-router-dom';
import './Boxes.css';

export const Boxes = () => {
  return (
    <div className='boxes'>
        <div>
            <Link to='#'><img src='https://p-airnz.com/cms/assets/Common-Assets/Products/couple-in-economy-stretch-in-perpetuity-nr-no-exp-1200x800__FocusFillMaxWyIwLjAwIiwiMC4wMCIsNDA0LDI3MF0.jpg'/></Link>
            <h4>Economy Stretch</h4>
            <p>Irure cillum elit sunt nisi exercitation minim sunt.Eu enim labore aliquip consequat laboris sunt irure proident ex dolore quis duis cillum qui.</p>
            <Link className='box-link' to='#'>See More</Link>
        </div>

        <div>
            <Link to='#'><img src='https://orbitaltoday.com/wp-content/uploads/2022/02/Future-of-space-travel.jpg'/></Link>
            <h4>The safest Suits</h4>
            <p>Irure cillum elit sunt nisi exercitation minim sunt.Eu enim labore aliquip consequat laboris sunt irure proident ex dolore quis duis cillum qui.</p>
            <Link className='box-link' to='#'>See More</Link>
        </div>

        <div>
            <Link to='#'><img src='https://www.freethink.com/wp-content/uploads/2021/04/space-tourism_opengraph1.jpg'/></Link>
            <h4>Enjoy the views</h4>
            <p>Irure cillum elit sunt nisi exercitation minim sunt.Eu enim labore aliquip consequat laboris sunt irure proident ex dolore quis duis cillum qui.</p>
            <Link className='box-link' to='#'>See More</Link>
        </div>

        <div>
            <Link to='#'><img src='https://scx2.b-cdn.net/gfx/news/2021/a-couple-of-trainee-as-1.jpg'/></Link>
            <h4>Explore Mars</h4>
            <p>Irure cillum elit sunt nisi exercitation minim sunt.Eu enim labore aliquip consequat laboris sunt irure proident ex dolore quis duis cillum qui.</p>
            <Link className='box-link' to='#'>See More</Link>
        </div>

        <div>
            <Link to='#'><img src='https://ik.imgkit.net/3vlqs5axxjf/TW-Asia/ik-seo/uploadedImages/Industry/Luxury/space-header-220318/Holiday-in-space%3F-Travel-agents-are-making-that-ha.jpg?tr=w-780%2Ch-440%2Cfo-auto'/></Link>
            <h4>Unforgettable experiences</h4>
            <p>Irure cillum elit sunt nisi exercitation minim sunt.Eu enim labore aliquip consequat laboris sunt irure proident ex dolore quis duis cillum qui.</p>
            <Link className='box-link' to='#'>See More</Link>
        </div>

        <div>
            <Link to='#'><img src='https://images.interestingengineering.com/1200x675/filters:format(webp)/img/iea/3gG915j0GV/abalakin-space-settlement-large.jpg'/></Link>
            <h4>Visit Europa city</h4>
            <p>Irure cillum elit sunt nisi exercitation minim sunt.Eu enim labore aliquip consequat laboris sunt irure proident ex dolore quis duis cillum qui.</p>
            <Link className='box-link' to='#'>See More</Link>
        </div>

    </div>
  )
}
