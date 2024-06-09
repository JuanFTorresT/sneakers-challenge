import TrashIcon from './TrashIcon';

export default function CartItem() {
    return(
        <>
            <li className="flex gap-4 items-center justify-around">
                <img className="w-14 rounded" src="/assets/productImages/image-product-1-thumbnail.jpg" alt="" />
                <div className="item-description">
                    <p>Fall Limited Edition Sneakers</p>
                    <div className="price flex gap-2 text-neutral-400">
                        <p>$125</p>
                        <p>x3</p>
                        <p className='text-black font-bold'>$375</p>
                    </div>
                </div>
                <TrashIcon/>
            </li>
            
        </>
    );
}