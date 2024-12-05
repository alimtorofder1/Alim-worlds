import { FaEdit, FaTrashAlt, FaUsers } from "react-icons/fa";
import useProducts from "../../../hooks/useProducts";
import useAxiosSecore from "../../../hooks/useAxiosSecore";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const axiosSecure = useAxiosSecore();
    const [product ,  refetch] = useProducts();
    const handleDeleteItem = (item) =>{
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
          axiosSecure.delete(`/product/${item._id}`)
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
              <div>
                <h1 className="text-3xl text-center mt-11 mb-5">MANAGE ALL ITEMS</h1>
                <div className="w-64 mx-auto">
                   <hr />
                </div>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Old Price</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        product.map((item , index) =><tr key={item._id}>
            <th>
              {index +1}
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
              {item.name}
            </td>
            <td>{item.price}</td>
            <del><td>{item.oldprice}</td></del>
            <th>
            <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn btn-secondary btn-xs text-white-600"><FaEdit></FaEdit></button></Link>
            </th>
            <th>
              <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost btn-xs text-pink-600"><FaTrashAlt></FaTrashAlt></button>
            </th>
          </tr>)
      }
 

    </tbody>

  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;