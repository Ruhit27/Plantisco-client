import DifferentNav from '../Components/ContactUs/DifferentNav';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComp/Footer/Footer';

const SecondLayout = () => {
    return (
        <div>
            <DifferentNav></DifferentNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SecondLayout;