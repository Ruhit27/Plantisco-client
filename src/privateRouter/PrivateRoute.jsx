import  { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Checkout from '../Components/CheckOut/Checkout';
import { Navigate } from 'react-router-dom';

const PrivateRouter = () => {
    const {user} = useContext(AuthContext);
    if(user?.email)
    {
        return <Checkout></Checkout>
    }
     

    return <Navigate to='/auth/login'></Navigate>
       
    
};

export default PrivateRouter;