export default function ProductDescription () {
    const productData = {
        company: 'sneaker company',
        productTitle: 'Fall Limited Edition Sneakers',
        productDescription: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everything the weather can offer.',
        productPrice: 125,
        comparePrice: 250,
        perecentageDisccount: 50
    }
    return(
        <>
            <div className="description-container flex flex-col gap-4 p-4">

                <p className="uppercase font-bold text-sm text-orange-400">{productData.company}</p>
                <h1 className="font-bold text-3xl">{productData.productTitle}</h1>
                <p className="text-neutral-400">{productData.productDescription}</p>

                <div className="price flex gap-4 place-content-between items-center">

                    <div className="actual-price flex gap-4 items-center">

                        <p className="font-bold text-3xl">${productData.productPrice}</p>
                        <p className="bg-orange-200 text-orange-500 px-2 rounded v font-semibold">{productData.perecentageDisccount}%</p>

                    </div>
                    
                    <p className="line-through	text-neutral-400">${productData.comparePrice}</p>

                </div>
                
            </div>
        </>
    );
}