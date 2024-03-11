import {FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const ItemsCard = (props) => {


    const { image, name, price, } = props.item.products
    console.log(props.item)
    return (
        <div>
            <div className="card card-compact  mb-8" >
                <figure><img className="w-60" src={image} alt="Shoes" /></figure>
                <div className="card-body text-center ">
                    <h2 className="text-xl font-semibold ">{name}</h2>
                </div>
                <div className='flex justify-center gap-10'>
                    <div className=" text-center text-lg text-green-600">${price}.00</div>

                    <Link  className='btn btn-sm btn-ghost btn-outline hover:text-white hover:bg-black ' ><FaShoppingCart></FaShoppingCart>Buy </Link>
                </div>

            </div>
        </div>
    );
};

export default ItemsCard;