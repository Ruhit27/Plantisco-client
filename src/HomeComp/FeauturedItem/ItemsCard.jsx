import { useContext } from "react";
import {FaShoppingCart } from "react-icons/fa";
import './itemsCard.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const ItemsCard = (props) => {
    const {user} = useContext(AuthContext)

    const btnAddToCart=(products)=>{
        // console.log(products,user.email)
        
          if(user && user.email)
          {
            axios.post('http://localhost:3000/purchase',{products,Email:user?.email})
            .then(res=>{
                console.log(res.data)
                Swal.fire({
                    position: "top-middle",
                    icon: "success",
                    title: ` ${name} added to the Card`,
                    showConfirmButton: false,
                    timer: 1200
                  });
            })

          }
        else 
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Login",
                footer: '<a href="/auth/login">Click to login</a>'
              });
        }
    }

    const { image, name, price, } = props.item.products
    return (
        <div>
        <div className=" mb-8">
            <figure>
                <img className="w-full md:h-[310px]" src={image} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-sm font-semibold">{name}</h2>
                <div className="text-md text-green-600">${price}.00</div>
                <button onClick={() => btnAddToCart(props.item.products)} className="btn btn-sm btn-ghost btn-outline hover:text-white hover:bg-black">
                    <FaShoppingCart /> Buy
                </button>
            </div>
        </div>
    </div>
    
    );
};

export default ItemsCard;