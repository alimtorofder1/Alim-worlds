import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpeg'
import { CgShoppingCart } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { IoMdLogOut } from "react-icons/io";
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';


const NavBar = () => {
  const {user , logOut}=useAuth();
  const [cart]=useCart();
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }

  const Navlink = <>
     <li><Link className='link link-hover' to={'/shop'}>Shop</Link></li>
   <li><Link className='link link-hover' to={'/offer'}>Offers</Link></li>
   <li><Link className='link link-hover' to={'/dashboard/cart'}><span className='text-2xl'><CgShoppingCart /></span><span className='bg-teal-600 text-1xl w-8 text-center rounded-full'>+{cart.length}</span></Link></li>
  </>
    return (
      <div className=' bg-pink-600 text-white'>
         <div className="navbar">
  <div className="navbar-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {Navlink}
      </ul>
    </div>
        <Link to={'/'}>
        <div className='flex'>
   <div className="avatar">
  <div className="w-14 rounded">
    <img src={logo} />
  </div>
  <h2 className='mt-3 ml-3 text-3xl font-bold'>Alim's World</h2>
</div>
   </div>
        </Link>
  </div>
      <div className='pl-8'>
      <label className="input input-bordered  flex items-center gap-2">
  <input  type="text" className="grow w-72 text-black " placeholder="Search Product" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 text-black">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
      </div>
  <div className="navbar-center hidden text-center lg:flex">
    <ul className="menu menu-horizontal px-1">
     {Navlink}
    </ul>
  </div>
  <div>
  </div>
  <div className=" gap-5 ml-52">
    {
      user ? <>
      <button onClick={handleLogOut} className='flex btn btn-ghost'><span className='text-2xl mt-1'><IoMdLogOut /></span><span className=' mt-1 '>Log Out</span></button></> :
       <><Link className='flex' to={"/signin"}><span className='text-2xl mt-1 mr-2'><RxAvatar /></span><span className='mt-1 '>Login</span></Link></>
    }
  </div>
</div>
      </div>
    );
};

export default NavBar;