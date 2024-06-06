import { useState } from "react";

export default function ProductImages() {
    const images = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg', 'image-product-4.jpg']
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectNewImage = (index, images, next = true) => {
        const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images)

    }
    return(
        <>
            <div className="contenedor-slider relative inline-block">
                <img className="" src={(`src/assets/productImages/${selectedImage}`)} alt="Zapatos" />
                <button className="absolute left-2 inset-y-1/2 bg-white w-10 h-10 rounded-full		" onClick={previous}>{'<'}</button>
                <button className="absolute right-2 inset-y-1/2 bg-white w-10 h-10 rounded-full	"onClick={next}>{'>'}</button>
            </div>

        </>
    );
}