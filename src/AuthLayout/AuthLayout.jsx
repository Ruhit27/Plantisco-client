import { Outlet } from "react-router-dom";
import DifferentNav from "../Components/ContactUs/DifferentNav";
import Footer from "../SharedComp/Footer/Footer";

const AuthLayout = () => {
    return (
        <div>
            <DifferentNav></DifferentNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;