import Navbar from '../SharedComp/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='font-mono'>
            <div className='bg-green-50'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        
        </div>
    );
};

export default Layout;