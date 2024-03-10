import {FaShoppingCart } from "react-icons/fa";


const ItemsCard = (props) => {


    const { image, name, price } = props.item.products
    console.log(props.item)
    return (
        <div>
            <div className="card card-compact w-72 mb-8" >
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-center ">
                    <h2 className="text-xl font-semibold ">{name}</h2>
                </div>
                <div className='flex justify-center gap-10'>
                    <div className=" text-center text-lg text-green-600">${price}.00</div>

                    <button className='btn btn-sm btn-ghost btn-outline hover:text-white hover:bg-black ' ><FaShoppingCart></FaShoppingCart> Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ItemsCard;