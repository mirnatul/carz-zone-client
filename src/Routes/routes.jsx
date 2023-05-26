import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import PrivateRoute from "./PrivateRoute";
import MyToy from './../pages/MyToy/MyToy';
import UpdateToyInfo from "../pages/UpdateToyInfo/UpdateToyInfo";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'all-toy',
                element: <AllToy></AllToy>,
                loader: () => fetch('https://carz-zone-server.vercel.app/all-toy')
            },
            {
                path: 'all-toy/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://carz-zone-server.vercel.app/all-toy/${params.id}`)
            },
            {
                path: 'add-toy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'my-toy',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
            },
            {
                path: 'update-toy/:id',
                element: <PrivateRoute><UpdateToyInfo></UpdateToyInfo></PrivateRoute>,
                loader: ({ params }) => fetch(`https://carz-zone-server.vercel.app/my-toy/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
]);

export default router;