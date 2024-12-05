import { FaHome, FaAd, FaShoppingCart } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { FaCalendar, FaList, FaUser, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [isadmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-pink-600">
                <ul className="menu">
                   {
                    isadmin? <>
                                          <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils>Add Items</NavLink></li>
                    <li><NavLink to={'/dashboard/manageItems'}><FaList></FaList>Manage Items</NavLink></li>
                    <li><NavLink to={'/dashboard/bookings'}><FaAd></FaAd>Manage Bookings</NavLink></li>                  <li><NavLink to={'/dashboard/users'}><FaUsers></FaUsers> All Users</NavLink></li>
                    </>
                    :
                    <>
                                      <li><NavLink to={'/dashboard/userhome'}><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <li><NavLink to={'/dashboard/review'}><FaAd></FaAd>Review</NavLink></li>
                    </>
                   }
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/offer'}><MdLocalOffer />Offers</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;