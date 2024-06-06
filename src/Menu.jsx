import logo from './assets/productImages/logo.svg'
import Carrito from './CartIcon'
import BurgerMenu from './BurgerMenu'

export default function NavigationMenu() {
  return(
    <>
      <div className='flex gap-4 place-content-between items-center p-4'>
        <div className="logo flex items-center gap-4">
          <BurgerMenu/>
          <a  className='uppercase' href=""><img src={logo} alt="" /></a>
        </div>
        
        <div className="menu">
          <ul className='flex gap-4 flex-wrap items-center'>
            <li><Carrito/></li>
            <li><img className='w-7'src="./src/assets/productImages/image-avatar.png" alt="" /></li>
          </ul>
        </div>

      </div>
    </>
  );
}