import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAxiosSecore from "../../../hooks/useAxiosSecore";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart , refetch]=useCart();
    const totalPrice = cart.reduce( (total , item)=> total+item.price, 0)
    const axiosSecore = useAxiosSecore();
    const handleDelete = id =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      
          axiosSecore.delete(`/carts/${id}`)
          .then(res=>{
            if(res.data.deletedCount > 0){
              refetch();
                    Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
          })
        }
      });
    }
    return (
        <div>
        <div className="flex mt-10 justify-evenly w-full">
            <h2 className="text-4xl">Items: {cart.length}</h2>
            <h2 className="text-4xl">Total Price: {totalPrice}</h2>
            { cart.length ?<Link to={'/dashboard/payment'}><button className="btn btn-active btn-secondary">Pay</button></Link>
            :
            <button disabled className="btn btn-active btn-secondary">Pay</button>
          }
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           #
          </label>
        </th>
        <th>Image</th>
        <th>Price</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        cart.map((item ,index)=> <tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
             <p className="flex gap-2"><FaBangladeshiTakaSign /> {item.price}</p>
            </td>
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs text-pink-600"><FaTrashAlt></FaTrashAlt></button>
            </th>
          </tr> )
     }
     
    </tbody>
  </table>
</div>
        </div>
        
    );
};

export default Cart;