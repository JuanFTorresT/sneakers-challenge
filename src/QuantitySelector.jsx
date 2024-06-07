import { useState } from "react";

export default function QuantitySelector() {
    let [selectedQuantity, setSelectedQuantity] = useState(1);
    const sumar = () => {
        setSelectedQuantity(selectedQuantity+1)
    }

    const restar = () => {
        const condition = selectedQuantity > 1 ? setSelectedQuantity(selectedQuantity-1) : setSelectedQuantity(1)
        
    }

    return(
        <>
            <div className="quantity-selector bg-slate-100 p-2 rounded flex justify-between">
                <button onClick={restar} className="text-orange-500 font-bold text-2xl px-4">-</button>
                <input className="bg-transparent text-center font-bold" type="number" value={selectedQuantity} />
                <button onClick={sumar} className="text-orange-500 font-bold text-2xl px-4">+</button>
            </div>
        </>
    );
}