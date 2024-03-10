import axios from 'axios';
import React from 'react';

const Admin = () => {
    const createProducts =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value
        const image = form.image.value;
        const details = form.details.value;
        const products = {
          name,price,image,details
        }
        console.log(products)
      axios.post('http://localhost:3000/products',{products}) 
      .then(res=>{
        console.log(res.data)
        if(res.data.acknowledged)
        {
          alert("Item Added successfully")
        }
      }) 

     }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
         
          <div className="card shrink-0 w-full max-w-7xl shadow-2xl bg-base-100">
            <form onSubmit={createProducts} className="card-body">
             <div className="md:flex">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter Products Name" className="input input-bordered mr-4" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' placeholder="Enter Products Price" className="input input-bordered" required />
               
              </div>
             </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input type="text" name='details' placeholder="Enter the Product Details" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                   <input name='image' placeholder='Enter Products image url' className='input input-bordered' type="text" id="" />               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Admin;