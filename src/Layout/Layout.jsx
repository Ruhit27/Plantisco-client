import Footer from '../SharedComp/Footer/Footer';
import Navbar from '../SharedComp/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='font-mono'>
            <div className='bg-green-50'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default Layout;