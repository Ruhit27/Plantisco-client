import { useLoaderData } from 'react-router-dom';
import DifferentNav from '../ContactUs/DifferentNav';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CheckoutCard from './CheckoutCard';
import Swal from 'sweetalert2';
import axios from 'axios';

const Checkout = () => {
    const [item, setItem] = useState([])
    const [finalAmount, setFinalAmount] = useState([])
    const { user } = useContext(AuthContext);
    const purchasedItems = useLoaderData()
    const  items = purchasedItems.filter(items => items.Email === user?.email)
    // console.log(items)
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += parseInt(items[i].products?.price ?? 0);
        }
        let shipping = 22;
        let total = sum + shipping;
        setItem(sum); 
        setFinalAmount(total);
        
    }, [items]); 
    
    

    const promoBtn = (e) => {
        const parentContainer = e.target.closest('.flex');
        const promoInput = parentContainer.querySelector('input[name="promo"]');
        const promo = promoInput.value;
        const myPromo = 101;
        // const myPromo = '101'correct one;
        if (promo === myPromo) // wrong login might fix later
        {
            alert('oops')
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Promo Isn't Available!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }



    return (
        <div className=''>
            <DifferentNav></DifferentNav>
            <div className=" md:max-w-7xl mx-auto">

                <div className="md:flex space-x-10">
                    <div className='mt-8'>
                        {
                            items.map(item => <CheckoutCard key={item._id} item={item}></CheckoutCard>)
                        }
                    </div>

                    <div className=' md:max-w-full '>
                        <p className='font-semibold text-center mt-4 text-xl'> Order Summery</p>
                        <div className="hero ">
                            <div className="hero-content ">

                                <div className=" border-l-2">
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="  label-text text-blue-800 font-semibold">Promo</span>


                                            </label>
                                            <div className="flex">
                                                <input type="text" name='promo' placeholder="Enter Promo code" className="input-sm input input-bordered w-full " />
                                                <div id='btn' onClick={promoBtn} className=" btn-secondary btn-sm btn ml-1">Use</div>
                                            </div>
                                        </div>
                                        <div className=" flex md:gap-72">
                                            <p>Total </p>
                                            <p>${item}</p>
                                        </div>
                                        <div className=" flex md:gap-64 border-b-2 pb-4">
                                            <p>Shipping</p>
                                            <p>$22</p>
                                        </div>
                                        <div className=" flex md:gap-72">
                                            <p>Payable</p>
                                            <p>${finalAmount}</p>
                                        </div>
                                        <div className="form-control mt-2">
                                            <button className="btn bg-black hover:bg-black text-white">Pay</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;