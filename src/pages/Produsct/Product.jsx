import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({item}) => {
    const {image , name ,  price ,  oldprice , _id} = item
    return (
      
      <div data-aos="zoom-out">
        <div className="card bg-base-100 w-72 h-96">
          <Link to={`/productDetails/${_id}`}>
  <figure>
    <img className="hover:scale-125 ..."
      src={image}
      alt="Shoes" />
  </figure>
  </Link>
  <div className="mt-2">
    <h2 className="card-title">{name}</h2>
    <div className="flex gap-3">
    <p className="flex text-pink-500 font-bold text-2xl"><span className="mt-1 mr-1"><FaBangladeshiTakaSign /></span>{price}</p>
    <del><p className="flex text-gray-500 mt-1 "><span className="mt-1 "><FaBangladeshiTakaSign /></span>{oldprice}</p></del>
    </div>
    <p className="text-yellow-300 flex"><span className="mt-1 mr-2"><FaStar /></span> <span className="text-slate-500">0/5 (0) .
    0 Sold</span></p>
  </div>
       </div>
       </div>
    );
};

export default Product;