import { Secondmenu } from './Secondmenu';
import { Firstmenu } from './Firstmenu';
import { Searchbar } from './Searchbar';

export const MenubarOpen = () => {
  return (
    <div id='menubar' className='menubar'>
        <Searchbar />
        <Secondmenu />
        <Firstmenu />
    </div>
  )
}
