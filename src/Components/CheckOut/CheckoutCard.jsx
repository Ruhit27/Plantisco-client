import axios from 'axios';
import Swal from 'sweetalert2';

const CheckoutCard = (props) => {
    
    const btnDelete = (_id) => {
        console.log(_id);
      
        // Include the _id in the URL path according to the server route expectation
        axios.delete(`http://localhost:3000/purchase/${_id}`)
          .then(res=> {
            if(res.data.acknowledged)
            {
                Swal.fire({
                    title: "Are you sure?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                        timer: 1200
                      });
                      location.reload();
                    }
                  });
                
                

            }  

          })
          .catch(error => {
            // Handle error
            console.log('Error deleting item', error);
          });
      }
      
      const { image, name, price, details } = props.item.products ?? {};

    const {_id} = props.item
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
                       
                       <span className='ml-2  btn-xs rounded-xl btn '> <span onClick={ ()=>btnDelete(_id)} > ❌</span> </span>
                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default CheckoutCard;