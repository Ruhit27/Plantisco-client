import { Link } from "react-router-dom";
import Banner from "../../HomeComp/Banner/Banner";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const btnLogout = ()=>{
        logOut();
    }
    const email = user?.email
    const nav = () => {        
       return <>
            <li><Link to='/blog'>BLOG</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li> <Link to='/checkout'>CHECKOUT</Link> </li>
            {/* <li> <Link to={`/checkout/${email}`}>CHECKOUT</Link> </li> */}
        
        </>
    }
    return (
      <div>
          <div className="navbar md:px-36 py-8  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="font-mono nav menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      {nav()}
                    </ul>
                </div>
                <Link to='/' className="font-semibold text-green-800 font-mono text-3xl">PLantiso</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" font-mono nav menu menu-horizontal px-1">
                {nav()}
                </ul>
            </div>
            <div className="navbar-end text-green-800 font-semibold">
                {/* <Link to='/'><FaHome></FaHome></Link> */}

                {
                    user?.email?<Link onClick={btnLogout} className="bg-green-200 p-2 rounded-md hover:bg-green-700 hover:text-white">LOGOUT</Link>: <>
                     <Link className="" to='/auth/signup'>SIGNUP</Link>
                    <a >/</a>
                    <Link className="" to='/auth/login'>LOGIN</Link>
                    </>
                   
                }
              
            </div>

        </div>
        <Banner></Banner>
      </div>
    );
};

export default Navbar;