import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Homepage from "../pages/Homepage/Homepage";
import CategoryNews from "../pages/CategoryNews/CategoryNews";


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
                element:<CategoryNews></CategoryNews>
            }
            
        ]
    },
    {
        path:"/*",
        element:<h1>404 Error!!!</h1>
    }
])
export default router;