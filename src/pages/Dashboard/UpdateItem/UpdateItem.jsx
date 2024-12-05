import { useLoaderData } from "react-router-dom";
import useAxiosPublic from'../../../hooks/useAxisPublic'
import useAxiosSecore from "../../../hooks/useAxiosSecore";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env. VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
    const {name , category , price , oldprice , description , _id } = useLoaderData();
    const item = useLoaderData();
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic =useAxiosPublic();
    const axiosSecore =useAxiosSecore();
    const onSubmit = async(data) => {
      console.log(data)
      const imageFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api , imageFile,{
        headers:{
          'content-type': 'multipart/form-data'
        }
      });
      if(res.data.success){
        const productItem = {
          name:data.name,
          category:data.category,
          oldprice:parseFloat(data.oldprice),
          image: res.data.data.display_url
        }
        const productRes = await axiosSecore.patch(`/product${_id}`,productItem)
        console.log(productRes.data)
        if(productRes.data.modifiedCount > 0){
          reset();
          Swal.fire({
            icon: "success",
            title: `${data.name} is upadted to the product`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
      console.log(res.data);
    }
    return (
        <div>
               <div>
                <h1 className="text-3xl text-center mt-11 mb-5">UPDATE ALL ITEMS</h1>
                <div className="w-64 mx-auto">
                   <hr />
                </div>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
      <label  className="form-control w-full my-6 pl-7">
  <div className="label">
    <span className="label-text">Product Name</span>
  </div>
  <input type="text" defaultValue={name} placeholder="Product Name" {...register("name")} className="input input-bordered w-full" />
        </label>
        <div>
        <label  className="form-control w-full my-6 pl-7">
  <div className="label">
    <span className="label-text">Category</span>
  </div>
  <select defaultValue={category} {...register("category")} className="select select-bordered w-full">
  <option disabled value={'default'}>Select a category</option>
  <option value="lamp">Lamp</option>
  <option value="Watch">Watch</option>
  <option value="fan">Fan</option>
  <option value="clock">Clock</option>
  <option value="mouse">Mouse</option>
  <option value="headset">Headset</option>
  <option value="wooden">Wooden</option>
  <option value="stiker">Stiker</option>
  <option value="toys">Toys</option>
  <option value="keyboard">Keyboard</option>
  <option value="airpods">Airpods</option>
  <option value="humidifer">Humidifer</option>
  <option value="tripod">Tripod</option>
      </select>
        </label>
        </div>
        <div className="flex">
        <div>
        <label  className="form-control w-full pl-7">
  <div className="label">
    <span className="label-text">Old Price</span>
  </div>
  <input type="text"  defaultValue={oldprice} placeholder="Old Price" {...register("oldprice")} className="input input-bordered w-full" />
        </label>
        </div>
        <div>
        <label  className="form-control w-full pl-7">
  <div className="label">
    <span className="label-text">Price</span>
  </div>
  <input type="text"  defaultValue={price} placeholder="Price" {...register("price")} className="input input-bordered w-full" />
        </label>
        </div>
        </div>
        <div>
        <label  className="form-control w-full pl-7">
  <div className="label">
    <span className="label-text">Details</span>
  </div>
  <textarea className="textarea textarea-bordered " placeholder="Details" {...register("details")}></textarea>
        </label>

        </div>
        <div>
        <div className="mt-6 ml-7">
        <input
  type="file"
  className="file-input file-input-bordered file-input-secondary w-full max-w-xs"{...register("image")} />
        </div>
        <button className="btn btn-secondary ml-7 mt-6">Secondary</button>
        </div>
        
    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;