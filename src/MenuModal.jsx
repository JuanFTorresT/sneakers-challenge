
import { useState } from "react";
import ExitIcon from "./ExitIcon";

export default function MenuModal({ isActive, onClose }) {
    
    const clickOpen = () =>{
        console.log('click en exit');
    }
    return(
        <div className={`ventana-modal fixed top-0 backdrop-blur-lg w-full h-full z-10 left-0`}>
            <div className="menu-modal bg-white w-1/2 h-screen p-4 flex flex-col gap-8">
                <div className="exit" >
                    <ExitIcon onClick={onClose}/>
                </div>
                <div className="menu">
                <ul className="flex flex-col gap-4">
                    <li className="font-bold text-xl">Collections</li>
                    <li className="font-bold text-xl">Men</li>
                    <li className="font-bold text-xl">Women</li>
                    <li className="font-bold text-xl">About</li>
                    <li className="font-bold text-xl">Contact</li>
                </ul>
                </div>

            </div>
        </div>
    );
}