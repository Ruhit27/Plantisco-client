import Footer from '../SharedComp/Footer/Footer';
import Navbar from '../SharedComp/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='font-mono '>
            <div className='bg-green-50'>
            <Navbar></Navbar>
            </div>

            <div className='max-w-5xl mx-auto '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        
        </div>
    );
};

export default Layout;