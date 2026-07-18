import React, { use } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate } from 'react-router';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';

const PrivateRoute = ({children}) => {
    const {user,loading,setLoading}=use(AuthContext)
    if(loading)
    {
        return <LoadingPage></LoadingPage>
    }
    if(user && user?.email)
    {
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>
  
}

export default PrivateRoute