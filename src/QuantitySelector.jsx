export default function QuantitySelector() {
    return(
        <>
            <div className="quantity-selector bg-slate-100 p-2 rounded flex justify-between">
                <button className="text-orange-500 font-bold text-2xl px-4">-</button>
                <input className="bg-transparent text-center font-bold" type="number" placeholder="0" />
                <button className="text-orange-500 font-bold text-2xl px-4">+</button>
            </div>
        </>
    );
}