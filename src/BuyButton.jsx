import CartIcon from "./CartIcon"

export default function BuyButton({textButton}) {
    return (
        <>
            <button className="flex bg-orange-500 text-white p-4 rounded w-full justify-center gap-4 font-bold">
                <CartIcon color={"white"}/>
                {textButton}
            </button>
        </>
    )
}