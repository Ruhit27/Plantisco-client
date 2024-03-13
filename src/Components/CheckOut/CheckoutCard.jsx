import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const CheckoutCard = (props) => {
    const { image, name, price, details } = props.item.products
    return (
        <div className=" border-b-2 border-gray-300 p-8 shadow-sm ">
            
            <div className="md:flex  md:flex-col bg-white">
                <div className="flex flex-row justify-between ">
                    <div className="flex flex-row">
                        <img src={image} alt="Snake Plant" className="h-14 w-14 rounded-md" />
                        <div className="flex flex-col justify-between ml-4">
                            <span className="font-bold text-lg">{name}</span>
                            <span className="text-sm text-gray-600">{details}</span>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <span className="font-bold text-md">${price}.00</span>
                       
                       <span className='ml-2  btn-xs rounded-xl btn '> <span > ❌</span> </span>
                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default CheckoutCard;