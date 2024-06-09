import logo from '/assets/productImages/logo.svg'
import Carrito from './CartIcon'
import BurgerMenu from './BurgerMenu'
import MenuModal from './MenuModal';
import ModalCart from './ModalCart';
import { useState } from 'react';



export default function NavigationMenu() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const handleClick = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    
  return(
    <>
      <div className='flex gap-4 place-content-between items-center p-4'>
        <div  className="logo flex items-center gap-4 ">
          <BurgerMenu onClick={handleClick}/>
          <a  className='uppercase' href=""><img src={logo} alt=""  /></a>
        </div>
        
        <div className="menu">
          <ul className='flex gap-4 flex-wrap items-center'>
            <li><Carrito/></li>
            <li><img className='w-7'src="\assets\productImages\image-avatar.png" alt="" /></li>
          </ul>
        </div>
        
        

        

      </div>
      {isOpenMenu && <MenuModal isActive={isOpenMenu} onClose={handleClick}/>}
      <div className="flex justify-center">
        <ModalCart/>
      </div>
      
    </>
  );
}