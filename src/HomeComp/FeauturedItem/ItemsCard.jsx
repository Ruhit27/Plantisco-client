import { useContext } from "react";
import {FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
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
                alert("item added successfully")
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
            <div className="card card-compact  mb-8 " >
                <figure><img className="w-60 " src={image} alt="Shoes" /></figure>
                <div className="card-body text-center ">
                    <h2 className="text-xl font-semibold ">{name}</h2>
                </div>
                <div className='flex justify-center gap-10'>
                    <div className=" text-center text-lg text-green-600">${price}.00</div>

                    <div onClick={()=>btnAddToCart(props.item.products)}  className='btn btn-sm btn-ghost btn-outline hover:text-white hover:bg-black ' ><FaShoppingCart></FaShoppingCart>Buy </div>
                </div>

            </div>
        </div>
    );
};

export default ItemsCard;