import { Secondmenu } from './Secondmenu';
import { Firstmenu } from './Firstmenu';
import { Searchbar } from './Searchbar';

export const MenubarOpen = ({setMenuButton}) => {
  return (
    <div id='menubar' className='menubar'>
        <Searchbar />
        <Secondmenu 
          setMenuButton = { setMenuButton }
        />
        <Firstmenu />
    </div>
  )
}
