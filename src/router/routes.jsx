import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Homepage from "../pages/Homepage/Homepage";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                index:true,
                element:<Homepage></Homepage>
            },
            {
                path:"/category/:id",
                loader:()=>fetch('/news.json'),
                element:<CategoryNews></CategoryNews>
            }
            
        ]
    },
    {
        path:"/auth",
        element: <AuthenticationLayout></AuthenticationLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]

    },
    {
        path:"/*",
        element:<h1>404 Error!!!</h1>
    }
])
export default router;