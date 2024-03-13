import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {
    const {login} = useContext(AuthContext);
    const loginBtn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email,pass);
        login(email,pass)
        .then(result=>{
            const user = result.user;
            console.log(user)
            if(user?.email)
            {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1200
                  });
            }
        })

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
                    <p className='font-semibold'>Dont have an account? <Link to='/auth/signup' className='text-green-600'>Please Signup</Link> </p>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;