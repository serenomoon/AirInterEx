import { useState } from 'react';
import './Menubar.css';
import { MenubarOpen } from './MenubarOpen';

export const Menubar = () => {

  const [menuButton, setMenuButton] = useState(true)

  const openMenu = () => {
    const menudom = document.getElementById('menubar');
    const menubut = document.getElementById('menu-button');
    setMenuButton(!menuButton)
    
    menuButton === true 
      ? (menudom.style.width='100%',
        menubut.style.borderBottom='1px solid rgb(219, 88, 36)')
      : (menudom.style.width='0',
        menubut.style.borderBottom='0')
  }

  return (
    <div className='menu-bm'>
      <button id='menu-button' className='menu-button' onClick={() => openMenu() }>
        { 
          menuButton === true
          ?<i className="fa fa-bars" aria-hidden="true"></i>
          :<i className="fa fa-times" aria-hidden="true" style={{marginRight:'5px'}}></i>
        }
        </button>
      <MenubarOpen 
        setMenuButton = { setMenuButton }
      />
    </div>
  )
}
