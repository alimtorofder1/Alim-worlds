import { Link, useLoaderData } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosSecore from "../../hooks/useAxiosSecore";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";


const ProductDetails = () => {
    const product = useLoaderData();
    const [,refetch]=useCart();
    const {image , name ,  price ,  oldprice , description , _id} = product;
   const {user}=useAuth()
    const axiosSecure = useAxiosSecore()
    const handleAddToCart = Product =>{
        if(user && user.email){
            const cartItem = {
                productId:_id,
                email: user.email,
                name,
                image,
                price
            }
            console.log(user.email , user, 5555)
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })
        }
    }
    return (
        <div className="mt-10 flex">
           <div className=" mb-16 mx-auto ">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
</div>
        <div className=" mb-32">
            <h2 className="text-3xl font-bold mb-3">{name}</h2>
        <div className="flex gap-2">
        <p className="flex text-pink-500 font-bold text-2xl"><span className="mt-1 mr-1"><FaBangladeshiTakaSign /></span>{price}</p>
        <del><p className="flex text-gray-500 mt-1 "><span className="mt-1 "><FaBangladeshiTakaSign /></span>{oldprice}</p></del>
        </div>
            <p className="text-yellow-300 flex"><span className="mt-1 mr-2"><FaStar /></span> <span className="text-slate-500">0/5 (0) .
            0 Sold</span></p>
            <p className="mt-5">Delivery time: 4-5</p>
            <div className="flex mt-5 gap-6 ">
            <Link to={'/dashboard/payment'}>   <button className="btn btn-active btn-accent w-64 text-white">Buy Now</button></Link>
            <button onClick={()=> handleAddToCart(product)} className="btn btn-active btn-secondary w-64">Add to Cart</button>
            </div>
            <h1 className="mb-2 mt-5 font-bold">Description</h1>
            <hr />
            <p className="max-w-xl">{description}</p>
        </div>
        </div>
    );
};

export default ProductDetails;