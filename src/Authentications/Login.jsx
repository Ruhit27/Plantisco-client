import { Link } from "react-router-dom";

const Login = () => {
    const loginBtn =(e)=>{
        e.preventDefault();
    }
    return (
        <div className="hero min-h-[700px] ">
        <div className="hero-content flex-col lg:flex-row-reverse  gap-14">
            <div className="text-center lg:text-left ">
                <h1 className="text-5xl font-bold text-green-800">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={loginBtn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='pass' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <p className='font-semibold'>Don't have an account? <Link to='/auth/signup' className='text-green-600'>Please Signup</Link> </p>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SIgnup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;