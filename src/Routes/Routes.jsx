import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/SignIn/Signin";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Offer from "../pages/Offer/Offer";
import Humidifer from "../pages/Scrolltab/Humidifer";
import Lamp from "../pages/Scrolltab/lamp";
import Fan from "../pages/Scrolltab/Fan";
import Mouse from "../pages/Scrolltab/Mouse";
import Stiker from "../pages/Scrolltab/Stiker";
import Toys from "../pages/Scrolltab/Toys";
import Headset from "../pages/Scrolltab/Headset";
import KeyRing from "../pages/Scrolltab/KeyRing";
import Clock from "../pages/Scrolltab/Clock";
import SmarWatch from "../pages/Scrolltab/SmarWatch";
import Speaker from "../pages/Scrolltab/Speaker";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Users from "../pages/Dashboard/Users/Users";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AddItem/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signin',
            element:<Signin></Signin>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
           path:'/shop',
           element:<Shop></Shop>
        },
        {
           path:'/offer',
           element:<Offer></Offer>
        },
        {
         path :'/productDetails/:id',
         element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
         loader:({params}) => fetch(`https://alim-world-server.vercel.app/product/${params.id}`)
         
        },
        {
           path:'/humidifer',
           element:<Humidifer></Humidifer>
        },
        {
           path:'/lamp',
           element:<Lamp></Lamp>
        },
        {
           path:'/fan',
           element:<Fan></Fan>
        },
        {
           path:'/clock',
           element:<Clock></Clock>
        },
        {
           path:'/headset',
           element:<Headset></Headset>
        },
        {
           path:'/mouse',
           element:<Mouse></Mouse>
        },
        {
           path:'/keyring',
           element:<KeyRing></KeyRing>
        },
        {
           path:'/speaker',
           element:<Speaker></Speaker>
        },
        {
           path:'/stiker',
           element:<Stiker></Stiker>
        },
        {
           path:'/toys',
           element:<Toys></Toys>
        },
        {
           path:'/smarsatch',
           element:<SmarWatch></SmarWatch>
        }

      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children: [
         {
            path: 'cart',
            element:<Cart></Cart>
         },
         {
            path: 'payment',
            element :<Payment></Payment>
         },
         {
            path: 'additems',
            element:<AdminRoute><AddItems></AddItems></AdminRoute>,
         },
         {
            path: 'manageItems',
            element:<AdminRoute><ManageItems></ManageItems></AdminRoute>,
         },
         {
            path: 'updateItem/:id',
            element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
            loader: ({params}) => fetch(`https://alim-world-server.vercel.app/product/${params.id}`)
         },
         {
            path: 'users',
            element:<AdminRoute><Users></Users></AdminRoute>,
         }

      ]
    }
  ]);