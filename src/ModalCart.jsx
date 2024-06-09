import BuyButton from './BuyButton'
import CartItem from './CartItem';

export default function ModalCart() {
    return(
        <>
            <div className="modal-cart bg-white z-10 p-4 flex flex-col gap-4 rounded-lg m-4 absolute shadow-lg	w-96">
                
                <p className='font-bold'>Cart</p>
                <hr />
                <ul className='flex flex-col gap-4'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </ul>
                <BuyButton textButton={'Checkout'}/>
            </div>
        </>
    );
}