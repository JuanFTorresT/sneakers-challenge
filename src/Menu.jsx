import logo from '../public/assets/productImages/logo.svg'
import Carrito from './CartIcon'
import BurgerMenu from './BurgerMenu'
import MenuModal from './MenuModal';

import { useState } from 'react';

export default function NavigationMenu() {
    const [selectedOpen, setSelectedOpen] = useState(false);

    const open = () => {
        setSelectedOpen(!selectedOpen)
        console.log('open');
    }
  return(
    <>
      <div className='flex gap-4 place-content-between items-center p-4'>
        <div onClick={open} className="logo flex items-center gap-4 ">
          {selectedOpen?<MenuModal/>: <BurgerMenu />}
          <a  className='uppercase' href=""><img src={logo} alt=""  /></a>
        </div>
        
        <div className="menu">
          <ul className='flex gap-4 flex-wrap items-center'>
            <li><Carrito/></li>
            <li><img className='w-7'src="\assets\productImages\image-avatar.png" alt="" /></li>
          </ul>
        </div>

      </div>
    </>
  );
}