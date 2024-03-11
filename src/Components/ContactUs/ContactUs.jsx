
const ContactUs = () => {
    return (
        <div>
           <div className=" ">
           <section className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-center text-green-800">Stay in touch! Contact us</h1>
                        <p className="py-6 font-mono">Have a question? Give us a call or fill out the contact form. We’d love to hear from you</p>
                    </div>
                    <div className="card  w-full max-w-2xl  ">
                        <form className="card-body ">
                            <div className="form-control">
                            <input type="text" placeholder="Name" className="input input-bordered input-success w-full my-2 " />
                            </div>
                            <div className="form-control">
                            <input type="email" placeholder="Email" className="input input-bordered input-success w-full my-2 " />
                            </div>
                            <div className="form-control">
                            <input type="text" placeholder="Phone Number" className="input input-bordered input-success w-full  my-2" />
                            </div>
                            <div className="form-control">
                                <textarea className='border border-green-600' placeholder='Message....' name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-control mt-6 max-w-24">
                                <button className="btn btn-success text-white">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
           </div>
        </div>
    );
};

export default ContactUs;