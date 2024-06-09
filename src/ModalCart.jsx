import BuyButton from './BuyButton'
import TrashIcon from './TrashIcon';
export default function ModalCart() {
    return(
        <>
            <div className="modal-cart bg-white z-10 p-4 flex flex-col gap-4 rounded-lg m-4 absolute shadow-lg	w-96">
                
                <p className='font-bold'>Cart</p>
                <hr />
                <ul>
                    <li className="flex gap-4 items-center">
                        <img className="w-14 rounded" src="/assets/productImages/image-product-1-thumbnail.jpg" alt="" />
                        <div className="item-description">
                            <p>Fall Limited Edition Sneakers</p>
                            <div className="price flex gap-2">
                                <p>$125</p>
                                <p>x3</p>
                                <p className='font-bold'>$375</p>
                            </div>
                            
                        </div>
                        <TrashIcon/>
                    </li>
                </ul>
                <BuyButton/>
            </div>
        </>
    );
}