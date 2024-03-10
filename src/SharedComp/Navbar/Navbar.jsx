import Banner from "../../HomeComp/Banner/Banner";
import './Navbar.css'
const Navbar = () => {
    const nav = () => {
       return <>
            <li><a>Blogs</a></li>
            <li><a>Contacts</a></li>
        </>
    }
    return (
      <div>
          <div className="navbar md:px-36 py-8 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="font-mono nav menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      {nav()}
                    </ul>
                </div>
                <a className="  font-semibold text-green-800 font-mono text-3xl  ">PLantiso</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" font-mono nav menu menu-horizontal px-1">
                {nav()}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>

        </div>
        <Banner></Banner>
      </div>
    );
};

export default Navbar;