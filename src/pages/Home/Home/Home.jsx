import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../../Produsct/Product';
import useProducts from '../../../hooks/useProducts';
import { FaSackDollar } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoUnlinkOutline } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";


const Home = () => {
    const [product]=useProducts()
    return (
        <div>
           <Banner></Banner>
           <div className='mt-16  mb-3 text-2xl'>
            <h1>Our Specialty</h1>
           </div>
            <div className='flex gap-10'>
            <div className="card bg-base-100 w-56 hover:bg-teal-500 hover:text-white shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-center">
    <FaSackDollar />
    </div>
    <p className='text-center'>Friendly Budget</p>
  </div>
    </div>

            <div className="card bg-base-100 w-56 hover:bg-teal-500 hover:text-white shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-center">
    <FaProjectDiagram />
    </div>
    <p className='text-center'>Organic Products</p>
  </div>
    </div>

            <div className="card bg-base-100 w-56 hover:bg-teal-500 hover:text-white shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-center">
    <CiDeliveryTruck />
    </div>
    <p className='text-center'>Super Fast Delivery</p>
  </div>
    </div>

            <div className="card bg-base-100 w-56 hover:bg-teal-500 hover:text-white shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-center">
    <IoUnlinkOutline />
    </div>
    <p className='text-center'>Unique Gadgets</p>
  </div>
    </div>

            <div className="card bg-base-100 w-56 hover:bg-teal-500 hover:text-white shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-center">
    <IoGiftSharp />
    </div>
    <p className='text-center'>Free Gift</p>
  </div>
    </div>
            </div>
           <div className='mt-16  text-2xl mb-5'>
                <h1>Explore latest</h1>
           </div>
           <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-14 mb-10 '>
             {
                product.map(item=> <Product key={item._id} item={item}></Product>)
             }
             
           </div>
        </div>
    );
};

export default Home;