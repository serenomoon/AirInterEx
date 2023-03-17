import { Secondmenu } from './Secondmenu';
import { Firstmenu } from './Firstmenu';
import { Searchbar } from './Searchbar';

export const MenubarOpen = ({ showPopup,openMenu }) => {
  return (
    <div id='menubar' className='menubar'>
        <Searchbar />
        <Secondmenu 
          showPopup = { showPopup }
          openMenu = { openMenu }
        />
        <Firstmenu />
    </div>
  )
}
